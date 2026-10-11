# Open items

Decisions parked for later. Ask the owner before go-live.

## Client names, logos and testimonials (deferred)
- Home "Our Clients" strip, "Proven Result Across Industries" cards (home and /industries), and testimonial attributions use placeholders.
- If approved: confirm client consent, store names/logos/quotes in a Wix CMS collection and load them at request time. Keep them out of this repository (company policy).
- Home logo strip: done. Owner confirmed client consent (2026-10-05); the logos live in CMS collection `ClientLogos` (fields `title`, `logo`, `order`; read "Anyone") and the page shows placeholders only if it can't read them. Manage logos in the Wix CMS, not here.
- Home testimonials: in CMS collection `Testimonials` (fields `title` reviewer, `role`, `quote`, `client`, `logo`, `order`). Reviewer names approved by owner (2026-10-05). Still needed: which client each testimonial belongs to, to fill `client` and `logo`.

## Facts to confirm
- Founding year: "Since 1998" vs "Since 2019" vs "25+ years".
- Client count: "72 Unique Customers" vs "122+ Successful Clients".
- Stats: "5+ Years / 200+ Projects" (ISO, DISP) vs "7+ Years / 1,000+ Projects" (Industries).
- /iso-service-australia FAQ contains the ISO 13485 question set.
- ISO 45001 and ISO 13485 eyebrows read "THE ENVIRONMENTAL STANDARD"; 13485 cards reuse ISO 45001 wording.
- About page: two "Why Choose" cards reuse other cards' text.
- Services: "Official ISO/BSI certification achieved" names a certification body.
- Check standard edition references (ISO 27001:2022, ISO 14971, EU MDR) against current editions.

## Other
- Google Maps embed on /free-consultation: keep or remove (third-party cookies).
- Contact forms replaced by the LeadConnector booking widget (iframe + form_embed.js): check privacy policy covers this third party and its cookies.
- Blog post "What is ISO?" on the headless site: set category "ISO Certification" and first published date 2025-05-09.
- Go-live: `noindex` removed (2026-10-05). Switch the integpro.com.au domain to the headless site in Wix.

## Domain transition (SEO)
Do before switching integpro.com.au to the headless site:
- Premium plan active on the headless project (needed to connect integpro.com.au).
- URL parity: every live Wix URL (see `capture/pages`) resolves on the new site or 301-redirects to its replacement, including blog posts and category pages. Set redirects in Dashboard > SEO > URL Redirect Manager (SEO Redirects API); verify they fire on the headless site after the switch.
- robots.txt and sitemap.xml: the `wix()` Astro integration serves both from the dashboard (Robots.txt editor; `/sitemap.xml` index). Do not add `public/robots.txt`. `@astrojs/sitemap` also emits `/sitemap-index.xml`: pick one and submit only that to Search Console.
- Duplicate head tags: follow `docs/SEO-TRANSITION.md` (dashboard entries, then code clean-up, then verify).
- Confirm site indexability is on in the dashboard and no page sets `noindex`; canonicals resolve to `https://www.integpro.com.au`.
- Structured data: Wix auto-generates `LocalBusiness`/`WebSite` on the home page when business name and address are set in the dashboard.

Do after go-live:
- Submit the sitemap in Google Search Console; monitor crawl errors and 404s for 2–4 weeks.
- Compare rankings against the Wix baseline and fix pages that drop.
- Then content/SEO work: page copy, keywords, internal links, using Search Console data.
- Content is in Australian English and the brand is written "integPRO"; keep both in new copy.
