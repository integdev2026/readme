// Sitemap index at /sitemap.xml, where Wix's SEO dashboard and most crawlers look first.
// Lists the build-time page sitemap and the request-time blog post sitemap.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const maps = ['/sitemap-0.xml', '/sitemap-posts.xml']
    .map((p) => `<sitemap><loc>${new URL(p, site).href}</loc></sitemap>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps}</sitemapindex>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};
