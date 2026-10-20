import type { APIRoute } from 'astro';
import { getCategories, getPosts } from '../lib/wix';

// The sitemap robots.txt points to (Wix reserves /sitemap.xml on headless sites, so it lives here): every page route plus live blog posts and categories,
// at the same slash-less URLs the pages declare as canonical.
const pages = import.meta.glob('./**/*.astro');
const staticPaths = Object.keys(pages)
  .filter((f) => !f.includes('['))
  .map((f) => f.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/?index$/, '') || '/')
  .filter((p) => p !== '/thank-you');

export const GET: APIRoute = async ({ site }) => {
  const [posts, categories] = await Promise.all([getPosts().catch(() => []), getCategories().catch(() => [])]);
  const urls = [
    ...staticPaths.map((p) => ({ loc: new URL(p, site).href })),
    ...categories.map((c) => ({ loc: new URL(`/blog/categories/${c.slug}`, site).href })),
    ...posts.map((p) => ({ loc: new URL(`/post/${p.slug}`, site).href, lastmod: p.firstPublishedDate })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod.slice(0, 10)}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
