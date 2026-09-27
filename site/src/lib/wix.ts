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

// In CI a failed fetch must fail the build so an empty blog is never published.
// Locally (no network to Wix) the blog renders empty with a warning.
function soft<T>(what: string, fallback: T) {
  return (err: unknown): T => {
    if (process.env.CI) throw err;
    console.warn(`[wix] ${what} unavailable, using empty data: ${(err as Error).message}`);
    return fallback;
  };
}

let postsPromise: Promise<Post[]> | undefined;
export function getPosts(): Promise<Post[]> {
  postsPromise ??= (async () => {
    const all: Post[] = [];
    for (let offset = 0; ; offset += 100) {
      const page = await call<{ posts: Post[] }>('/blog/v3/posts/query', {
        method: 'POST',
        body: JSON.stringify({ fieldsets: ['RICH_CONTENT', 'SEO'], query: { paging: { limit: 100, offset } } }),
      });
      all.push(...(page.posts ?? []));
      if ((page.posts ?? []).length < 100) break;
    }
    return all.sort((a, b) => b.firstPublishedDate.localeCompare(a.firstPublishedDate));
  })().catch(soft('blog posts', [] as Post[]));
  return postsPromise;
}

let catsPromise: Promise<Category[]> | undefined;
export function getCategories(): Promise<Category[]> {
  catsPromise ??= call<{ categories: Category[] }>('/blog/v3/categories?paging.limit=100')
    .then((r) => (r.categories ?? []).sort((a, b) => (b.displayPosition ?? 0) - (a.displayPosition ?? 0)))
    .catch(soft('blog categories', [] as Category[]));
  return catsPromise;
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
