// Captures the live site so it can be rebuilt page by page:
// full-page screenshots (desktop + mobile), rendered HTML, text, section layout,
// design tokens (colours, fonts), and original-resolution media from Wix's CDN.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = process.env.CAPTURE_ORIGIN || 'https://www.integpro.com.au';
const OUT = path.resolve(process.env.CAPTURE_OUT || 'capture');
const MAX_PAGES = Number(process.env.CAPTURE_MAX_PAGES || 200);
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
];
const MAX_ASSET_BYTES = 40 * 1024 * 1024;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugFor(url) {
  const u = new URL(url);
  const p = u.pathname.replace(/\/+$/, '');
  return p === '' ? 'home' : p.slice(1).replace(/[^a-z0-9-_]+/gi, '_');
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 site-capture' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function collectUrls() {
  const seen = new Set();
  const pages = [];
  const queue = [`${ORIGIN}/sitemap.xml`];
  while (queue.length) {
    const sm = queue.shift();
    if (seen.has(sm)) continue;
    seen.add(sm);
    let xml;
    try {
      xml = await fetchText(sm);
    } catch (e) {
      console.warn('sitemap fetch failed', sm, e.message);
      continue;
    }
    const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
    if (/<sitemapindex/i.test(xml)) queue.push(...locs);
    else pages.push(...locs);
  }
  const unique = [...new Set([ORIGIN + '/', ...pages])];
  return unique.slice(0, MAX_PAGES);
}

// Wix image URLs carry a transform suffix (/v1/fill/...); strip it for the original file.
function wixOriginal(src) {
  try {
    const u = new URL(src, ORIGIN);
    if (u.hostname === 'static.wixstatic.com' && u.pathname.startsWith('/media/')) {
      const file = u.pathname.split('/')[2];
      return `https://static.wixstatic.com/media/${file}`;
    }
    return u.href;
  } catch {
    return null;
  }
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.7));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle').catch(() => {});
  await sleep(800);
}

// Runs in the page: layout, text, links, media and style statistics.
function extract() {
  const abs = (u) => {
    try { return new URL(u, location.href).href; } catch { return null; }
  };
  const box = (el) => {
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.x + scrollX), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) };
  };
  const bgUrls = (cs) => [...(cs.backgroundImage || '').matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((m) => abs(m[1]));

  const media = new Set();
  const docs = new Set();
  const videos = new Set();
  document.querySelectorAll('img').forEach((img) => {
    [img.currentSrc, img.src].filter(Boolean).forEach((u) => media.add(abs(u)));
    (img.srcset || '').split(',').map((s) => s.trim().split(' ')[0]).filter(Boolean).forEach((u) => media.add(abs(u)));
  });
  document.querySelectorAll('[data-image-info]').forEach((el) => {
    try {
      const info = JSON.parse(el.getAttribute('data-image-info'));
      const uri = info?.imageData?.uri;
      if (uri) media.add(`https://static.wixstatic.com/media/${uri}`);
    } catch {}
  });
  document.querySelectorAll('video, video source').forEach((v) => v.src && videos.add(abs(v.src)));
  document.querySelectorAll('svg image').forEach((i) => {
    const h = i.getAttribute('href') || i.getAttribute('xlink:href');
    if (h) media.add(abs(h));
  });

  const styleCount = {};
  const colourCount = {};
  const bump = (o, k) => { if (k) o[k] = (o[k] || 0) + 1; };
  const all = [...document.querySelectorAll('body *')];
  for (const el of all) {
    const cs = getComputedStyle(el);
    bgUrls(cs).forEach((u) => u && media.add(u));
    if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') bump(colourCount, 'bg ' + cs.backgroundColor);
    const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (ownText && el.offsetParent !== null) {
      bump(colourCount, 'text ' + cs.color);
      bump(styleCount, [el.tagName.toLowerCase(), cs.fontFamily, cs.fontSize, cs.fontWeight, cs.lineHeight, cs.letterSpacing, cs.textTransform, cs.color].join(' | '));
    }
  }
  document.querySelectorAll('a[href]').forEach((a) => {
    const h = abs(a.getAttribute('href'));
    if (h && (/\.pdf($|\?)/i.test(h) || h.includes('/_files/ugd/') || h.includes('filesusr.com'))) docs.add(h);
  });

  const cssVars = {};
  const rootCs = getComputedStyle(document.documentElement);
  for (const sheet of [...document.styleSheets]) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules || []) {
      if (r.style) for (const prop of r.style) if (prop.startsWith('--color_') || prop.startsWith('--font_') || prop.startsWith('--wst-')) cssVars[prop] = r.style.getPropertyValue(prop).trim() || rootCs.getPropertyValue(prop).trim();
    }
  }
  const fontFaces = [];
  for (const sheet of [...document.styleSheets]) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules || []) if (r.constructor.name === 'CSSFontFaceRule') fontFaces.push(r.cssText.slice(0, 600));
  }

  const sectionEls = [...document.querySelectorAll('#PAGES_CONTAINER section, main section, #SITE_HEADER, #SITE_FOOTER')];
  const sections = sectionEls
    .filter((s) => !sectionEls.some((o) => o !== s && o.contains(s)))
    .map((s) => {
      const cs = getComputedStyle(s);
      const inner = [...s.querySelectorAll('*')].map((e) => getComputedStyle(e)).find((c) => c.backgroundImage !== 'none' || c.backgroundColor !== 'rgba(0, 0, 0, 0)');
      return {
        id: s.id,
        box: box(s),
        background: { color: cs.backgroundColor, image: bgUrls(cs), innerColor: inner?.backgroundColor, innerImage: inner ? bgUrls(inner) : [] },
        headings: [...s.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) => ({ tag: h.tagName, text: h.innerText.trim(), box: box(h) })),
        text: s.innerText.trim(),
        links: [...s.querySelectorAll('a[href]')].map((a) => ({ text: a.innerText.trim(), href: abs(a.getAttribute('href')), box: box(a) })),
        images: [...s.querySelectorAll('img')].map((i) => ({ src: i.currentSrc || i.src, alt: i.alt, box: box(i) })),
      };
    });

  const meta = {};
  document.querySelectorAll('meta[name], meta[property]').forEach((m) => { meta[m.getAttribute('name') || m.getAttribute('property')] = m.content; });

  return {
    url: location.href,
    title: document.title,
    canonical: document.querySelector('link[rel=canonical]')?.href || null,
    meta,
    lang: document.documentElement.lang,
    pageHeight: document.documentElement.scrollHeight,
    nav: [...document.querySelectorAll('#SITE_HEADER a[href], header a[href]')].map((a) => ({ text: a.innerText.trim(), href: abs(a.getAttribute('href')) })),
    footer: document.querySelector('#SITE_FOOTER, footer')?.innerText.trim() || '',
    sections,
    text: document.body.innerText,
    media: [...media].filter(Boolean),
    videos: [...videos].filter(Boolean),
    documents: [...docs],
    styles: Object.entries(styleCount).sort((a, b) => b[1] - a[1]).slice(0, 80),
    colours: Object.entries(colourCount).sort((a, b) => b[1] - a[1]).slice(0, 60),
    cssVars,
    fontFaces,
  };
}

async function download(url, dir) {
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 site-capture' } });
    if (!res.ok) return { url, error: res.status };
    const len = Number(res.headers.get('content-length') || 0);
    if (len > MAX_ASSET_BYTES) return { url, skipped: 'too large', bytes: len };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length > MAX_ASSET_BYTES) return { url, skipped: 'too large', bytes: buf.length };
    let name = decodeURIComponent(new URL(url).pathname.split('/').filter(Boolean).pop() || 'file');
    name = name.replace(/[^a-z0-9._~-]+/gi, '_');
    await fs.writeFile(path.join(dir, name), buf);
    return { url, file: path.relative(OUT, path.join(dir, name)), bytes: buf.length, type: res.headers.get('content-type') };
  } catch (e) {
    return { url, error: e.message };
  }
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  for (const d of ['pages', 'screenshots', 'html', 'assets/images', 'assets/docs', 'assets/video']) await fs.mkdir(path.join(OUT, d), { recursive: true });

  const urls = await collectUrls();
  console.log(`Capturing ${urls.length} URLs`);
  await fs.writeFile(path.join(OUT, 'urls.json'), JSON.stringify(urls, null, 2));

  const browser = await chromium.launch();
  const fontRequests = new Set();
  const media = new Set();
  const docs = new Set();
  const videos = new Set();
  const index = [];

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile || false,
      hasTouch: vp.hasTouch || false,
      deviceScaleFactor: vp.deviceScaleFactor || 1,
      locale: 'en-AU',
      timezoneId: 'Australia/Adelaide',
    });
    const page = await ctx.newPage();
    page.on('request', (r) => { if (r.resourceType() === 'font') fontRequests.add(r.url()); });

    for (const url of urls) {
      const slug = slugFor(url);
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await scrollThrough(page);
        await page.screenshot({ path: path.join(OUT, 'screenshots', `${slug}.${vp.name}.jpg`), fullPage: true, type: 'jpeg', quality: 72 });
        if (vp.name === 'desktop') {
          const data = await page.evaluate(extract);
          data.media.forEach((u) => { const o = wixOriginal(u); if (o) media.add(o); });
          data.documents.forEach((u) => docs.add(u));
          data.videos.forEach((u) => videos.add(u));
          await fs.writeFile(path.join(OUT, 'pages', `${slug}.json`), JSON.stringify(data, null, 2));
          await fs.writeFile(path.join(OUT, 'html', `${slug}.html`), await page.content());
          index.push({ url, slug, title: data.title, description: data.meta.description || '', height: data.pageHeight });
        }
        console.log('ok', vp.name, url);
      } catch (e) {
        console.warn('failed', vp.name, url, e.message);
      }
      await sleep(300);
    }
    await ctx.close();
  }
  await browser.close();

  const manifest = { images: [], documents: [], videos: [] };
  for (const u of media) {
    if (!/^https?:/.test(u) || u.startsWith('data:')) continue;
    manifest.images.push(await download(u, path.join(OUT, 'assets/images')));
  }
  for (const u of docs) manifest.documents.push(await download(u, path.join(OUT, 'assets/docs')));
  for (const u of videos) manifest.videos.push(await download(u, path.join(OUT, 'assets/video')));

  await fs.writeFile(path.join(OUT, 'index.json'), JSON.stringify({ origin: ORIGIN, capturedAt: new Date().toISOString(), pages: index }, null, 2));
  await fs.writeFile(path.join(OUT, 'assets/manifest.json'), JSON.stringify(manifest, null, 2));
  await fs.writeFile(path.join(OUT, 'fonts.json'), JSON.stringify([...fontRequests], null, 2));
  console.log(`Done: ${index.length} pages, ${manifest.images.length} images, ${manifest.documents.length} documents, ${manifest.videos.length} videos`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
