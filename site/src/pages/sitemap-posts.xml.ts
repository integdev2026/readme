// Blog post sitemap. Posts come from Wix at request time, so the build-time sitemap can't list them.
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/wix';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const urls = posts
    .map((p) => `<url><loc>${new URL(`/post/${p.slug}`, site).href}</loc><lastmod>${p.firstPublishedDate}</lastmod></url>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};
