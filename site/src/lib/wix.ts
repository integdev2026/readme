// Build-time access to Wix Headless data (blog) using an anonymous visitor token.
// Docs: https://dev.wix.com/docs/go-headless/authentication/visitors/authenticate-visitors-rest
import config from '../../wix.config.json';

const API = 'https://www.wixapis.com';

export interface WixImage { id: string; url?: string; width?: number; height?: number; altText?: string }
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  firstPublishedDate: string;
  minutesToRead: number;
  categoryIds: string[];
  media?: { wixMedia?: { image?: WixImage }; displayed?: boolean };
  richContent?: { nodes: any[] };
  seoData?: { tags?: { type: string; props?: Record<string, string>; children?: string }[] };
}
export interface Category { id: string; label: string; slug: string; description?: string; displayPosition?: number }

let tokenPromise: Promise<string> | undefined;
function token() {
  tokenPromise ??= fetch(`${API}/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientId: config.appId, grantType: 'anonymous' }),
  }).then(async (r) => {
    if (!r.ok) throw new Error(`Wix token ${r.status}`);
    return (await r.json()).access_token as string;
  });
  return tokenPromise;
}

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', Authorization: await token(), ...(init.headers ?? {}) },
  });
  if (!res.ok) throw new Error(`Wix ${path} ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json() as Promise<T>;
}

// Pages render on request in Wix's hosting worker; keep Wix data briefly in memory per worker.
const TTL_MS = 60 * 1000;

/** Blog pages must reflect Wix changes quickly, so they are not cached by the hosting CDN. */
export const BLOG_CACHE_CONTROL = 'no-store';
const cache = new Map<string, { at: number; value: Promise<unknown> }>();
function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL_MS) return hit.value as Promise<T>;
  const value = load().catch((err) => { cache.delete(key); throw err; });
  cache.set(key, { at: Date.now(), value });
  return value;
}

/** All published posts, newest first, without rich content (for listings). */
export function getPosts(): Promise<Post[]> {
  return cached('posts', async () => {
    const all: Post[] = [];
    for (let offset = 0; ; offset += 100) {
      const page = await call<{ posts: Post[] }>('/blog/v3/posts/query', {
        method: 'POST',
        body: JSON.stringify({ query: { paging: { limit: 100, offset } } }),
      });
      all.push(...(page.posts ?? []));
      if ((page.posts ?? []).length < 100) break;
    }
    return all.sort((a, b) => b.firstPublishedDate.localeCompare(a.firstPublishedDate));
  });
}

/** One post with rich content and SEO data, or undefined if the slug doesn't exist. */
export function getPost(slug: string): Promise<Post | undefined> {
  return cached(`post:${slug}`, async () => {
    const res = await call<{ posts: Post[] }>('/blog/v3/posts/query', {
      method: 'POST',
      body: JSON.stringify({ fieldsets: ['RICH_CONTENT', 'SEO'], query: { filter: { slug }, paging: { limit: 1 } } }),
    });
    return res.posts?.[0];
  });
}

export function getCategories(): Promise<Category[]> {
  return cached('categories', () =>
    call<{ categories: Category[] }>('/blog/v3/categories?paging.limit=100').then((r) =>
      (r.categories ?? []).sort((a, b) => (b.displayPosition ?? 0) - (a.displayPosition ?? 0)),
    ),
  );
}

/** CMS collection holding the home page client logos (names and logos live in Wix, not this repository). */
export const CLIENT_LOGOS_COLLECTION = 'ClientLogos';

export interface ClientLogo { name: string; src: string }

// CMS image fields come back as `wix:image://v1/<mediaId>/<file>#...` or as a plain URL.
function imageSrc(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value) return undefined;
  const m = value.match(/^wix:image:\/\/v1\/([^/#]+)/);
  if (m) return `https://static.wixstatic.com/media/${m[1]}`;
  return /^https:\/\//.test(value) ? value : undefined;
}

// Reads up to 50 items of a CMS collection in `order` order; [] if missing, empty or unreadable,
// so pages fall back to their placeholders.
function getCollection(collection: string): Promise<Record<string, unknown>[]> {
  return cached(`cms:${collection}`, async () => {
    try {
      const res = await call<{ dataItems?: { data?: Record<string, unknown> }[] }>('/wix-data/v2/items/query', {
        method: 'POST',
        body: JSON.stringify({
          dataCollectionId: collection,
          query: { sort: [{ fieldName: 'order', order: 'ASC' }], paging: { limit: 50 } },
        }),
      });
      return (res.dataItems ?? []).map(({ data = {} }) => data);
    } catch (err) {
      console.error(`CMS collection ${collection} unavailable:`, err);
      return [];
    }
  });
}

/** Client logos for the home page strip. Fields: `title` (client name, alt text), `logo` (image), `order`. */
export async function getClientLogos(): Promise<ClientLogo[]> {
  return (await getCollection(CLIENT_LOGOS_COLLECTION)).flatMap((data) => {
    const src = imageSrc(data.logo);
    return src ? [{ name: String(data.title ?? ''), src }] : [];
  });
}

/** CMS collection holding home page testimonials (reviewer names and client logos live in Wix). */
export const TESTIMONIALS_COLLECTION = 'Testimonials';

export interface Testimonial { quote: string; name: string; role: string; client?: string; logo?: string }

/**
 * Home page testimonials. Fields: `quote`, `title` (reviewer name), `role`, `client` (company name,
 * logo alt text), `logo` (image, optional), `order`.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return (await getCollection(TESTIMONIALS_COLLECTION)).flatMap((data) =>
    typeof data.quote === 'string' && data.quote
      ? [{
          quote: data.quote,
          name: String(data.title ?? ''),
          role: String(data.role ?? ''),
          client: typeof data.client === 'string' ? data.client : undefined,
          logo: imageSrc(data.logo),
        }]
      : [],
  );
}

export function mediaUrl(id: string, width?: number) {
  const base = `https://static.wixstatic.com/media/${id}`;
  if (!width) return base;
  const ext = id.split('.').pop();
  return `${base}/v1/fill/w_${width},h_${Math.round(width * 0.66)},al_c,q_80/cover.${ext}`;
}

export function coverUrl(post: Post, width = 640) {
  const img = post.media?.wixMedia?.image;
  return img?.id ? mediaUrl(img.id, width) : undefined;
}

export function metaDescription(post: Post) {
  return post.seoData?.tags?.find((t) => t.type === 'meta' && t.props?.name === 'description')?.props?.content ?? post.excerpt;
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Australia/Sydney' });

export const POSTS_PER_PAGE = 9;
