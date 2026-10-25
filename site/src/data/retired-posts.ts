// Duplicate blog posts: old slug → the post that replaces it. Each old slug 301-redirects (astro.config.mjs)
// and is left out of blog listings and the post sitemap. The posts can also be deleted in the Wix blog.
export const retiredPosts: Record<string, string> = {
  'iso-14001-environmental-management-building-sustainability-into-your-business-1':
    'iso-14001-environmental-management-building-sustainability-into-your-business',
  'understanding-iso-compliance-a-guide-to-key-international-standards': 'understanding-iso-compliance-key-standards',
};
