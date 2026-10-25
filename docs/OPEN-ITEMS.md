# Open items

Decisions parked for later. Ask the owner before changing these on the live site.

## Client names, logos and testimonials (deferred)
- Home "Our Clients" strip, "Proven Result Across Industries" cards (home and /industries), and testimonial attributions use placeholders.
- If approved: confirm client consent, store names/logos/quotes in a Wix CMS collection and load them at request time. Keep them out of this repository (company policy).
- Home logo strip: done. Owner confirmed client consent (2026-10-05); the logos live in CMS collection `ClientLogos` (fields `title`, `logo`, `order`; read "Anyone") and the page shows placeholders only if it can't read them. Manage logos in the Wix CMS, not here.
- Home testimonials: in CMS collection `Testimonials` (fields `title` reviewer, `role`, `quote`, `client`, `logo`, `order`). Reviewer names approved by owner (2026-10-05). Still needed: which client each testimonial belongs to, to fill `client` and `logo`.

## Facts reviewed (2026-10-20)
- Fixed: ISO 45001 and ISO 13485 eyebrows; ISO 13485 intro cards that reused ISO 45001 wording; "Official ISO/BSI certification achieved" on /iso-disp-services.
- Owner reviewed and chose to keep as is: client counts, project/year stats, "100% first-audit success", /iso-service-australia FAQ, About page "Why Choose" cards, standard edition references.
- Founding year: owner confirmed 2019 (2026-10-24); "Since 1998" removed from the home page.

## Other
- Google Maps embed on /free-consultation: keep or remove (third-party cookies).
- Contact forms replaced by the LeadConnector booking widget (iframe + form_embed.js): check privacy policy covers this third party and its cookies.
- Blog post "What is ISO?" on the headless site: set category "ISO Certification" and first published date 2025-05-09.
- Go-live: done. `noindex` removed (2026-10-05); the headless site is live at https://www.integpro.com.au/ (2026-10-20).
- After go-live: submit the sitemap in Google Search Console and check that old Wix URLs redirect or resolve.

## DISP section (/disp and child pages)
- Wording is integPRO's own and no longer shares copy with the DISP Co site (owner confirmed same ownership, 2026-10-24). Keep it unique; don't paste DISP Co text.
- DISP pages carry no company stats (years, projects, success rate) and no prices, by owner decision. Add stats only once the owner approves them for DISP pages.
- DISP and ISO are separate services: keep ISO standards off DISP pages and DISP terms off ISO pages.
- Before go-live, check against the current Defence DISP pages: level-to-classification mapping (Entry = OFFICIAL: Sensitive, L1 = PROTECTED, L2 = SECRET, L3 = TOP SECRET), eligibility, CSO/SO roles, Essential Eight requirements by level, annual security report, "no membership fee", and who needs membership (FAQ).
- "Typical timeline 4–6 months" is carried over from the old /disp page: confirm it still holds.
- Not built yet: /disp/case-studies (needs client-approved cases) and /disp/guides (DISP blog category and articles).
- Sitemap: the plugin lists fixed pages with a trailing slash, but canonicals have none (site-wide). Align one way.
- Footer "Since 2019" is site-wide and still unconfirmed.

## Google Search Console (connected 2026-10-24)
- Connected via Wix with the integpro.com.au Google account; ownership verified (META).
- Sitemaps: `sitemap-index.xml` (pages) and `sitemap-posts.xml` (blog posts, built from Wix at request time). Old Wix editor sitemaps (`sitemap-integpro.xml`, `pages-sitemap.xml`) 301 to `sitemap-index.xml`.
- `site/public/robots.txt` replaces the Wix-generated one. Check after deploy that the live /robots.txt is ours.

## Bing Webmaster Tools (done 2026-10-25)
- Verification meta tags (`msvalidate.01` and `google-site-verification`, same codes as the old Wix site) restored in `site/src/layouts/Base.astro`. Owner confirmed Bing set-up done.

## Blog clean-up (2026-10-24)
- Duplicate posts redirected (see `site/src/data/retired-posts.ts`); they can also be deleted in the Wix blog dashboard.
- Rename in Wix: "specialised-industry-solutions-for-iso-and-disp-compliance" shares its title with another post. Suggested: "Specialised Industry Solutions for ISO and DISP Compliance".
- DISP posts now show a box linking to the /disp pages.
