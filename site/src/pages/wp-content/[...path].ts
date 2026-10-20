import type { APIRoute } from 'astro';

// Leftovers from the old WordPress site still get hits; tell crawlers they are gone for good.
export const GET: APIRoute = () => new Response('Gone', { status: 410 });
