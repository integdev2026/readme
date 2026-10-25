// Structured data (schema.org JSON-LD) shared by every page. Base.astro emits one @graph per page:
// the business, the website and the page itself, plus any page-specific nodes passed in `schema`.
// Nodes reference each other by @id so search engines see one connected entity.

export type PageType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
export type Node = Record<string, unknown>;

export const orgId = (site: URL) => new URL('/#organization', site).href;
export const websiteId = (site: URL) => new URL('/#website', site).href;

// A consulting service offered on a page, linked to the business as provider.
export const service = (site: URL, s: { name: string; description: string; path: string; serviceType: string; audience?: string }): Node => ({
  '@type': 'Service',
  '@id': new URL(`${s.path}#service`, site).href,
  name: s.name,
  description: s.description,
  serviceType: s.serviceType,
  url: new URL(s.path, site).href,
  provider: { '@id': orgId(site) },
  areaServed: { '@type': 'Country', name: 'Australia' },
  ...(s.audience && { audience: { '@type': 'BusinessAudience', audienceType: s.audience } }),
});

// An ordered list, e.g. the steps of a process.
export const itemList = (name: string, items: { name: string; description: string }[]): Node => ({
  '@type': 'ItemList',
  name,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, description: it.description })),
});
