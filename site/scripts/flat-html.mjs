// Wix headless hosting does not resolve /page to /page/index.html, so also emit /page.html.
import { readdir, copyFile, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve(process.argv[2] ?? 'dist');
let count = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const sub = path.join(dir, entry.name);
    const index = path.join(sub, 'index.html');
    try {
      await stat(index);
      await copyFile(index, `${sub}.html`);
      count++;
    } catch {}
    await walk(sub);
  }
}

await walk(dist);
console.log(`[flat-html] wrote ${count} flat .html copies`);

// Point internal links at the flat files so navigation works on Wix hosting.
// Canonical URLs and the sitemap keep the clean paths.
const linkRe = /href="\/(?!_astro\/|images\/)([^"#?.]+?)\/?((?:[?#][^"]*)?)"/g;
let rewritten = 0;
async function rewrite(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) { await rewrite(p); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const html = await readFile(p, 'utf8');
    const out = html.replace(linkRe, (_, route, rest) => { rewritten++; return `href="/${route}.html${rest}"`; });
    if (out !== html) await writeFile(p, out);
  }
}
await rewrite(dist);
console.log(`[flat-html] rewrote ${rewritten} internal links to .html`);
