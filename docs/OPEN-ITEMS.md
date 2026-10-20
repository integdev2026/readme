# Open items

Decisions parked for later. Ask the owner before changing these on the live site.

## Client names, logos and testimonials (deferred)
- Home "Our Clients" strip, "Proven Result Across Industries" cards (home and /industries), and testimonial attributions use placeholders.
- If approved: confirm client consent, store names/logos/quotes in a Wix CMS collection and load them at request time. Keep them out of this repository (company policy).
- Home logo strip: done. Owner confirmed client consent (2026-10-05); the logos live in CMS collection `ClientLogos` (fields `title`, `logo`, `order`; read "Anyone") and the page shows placeholders only if it can't read them. Manage logos in the Wix CMS, not here.
- Home testimonials: in CMS collection `Testimonials` (fields `title` reviewer, `role`, `quote`, `client`, `logo`, `order`). Reviewer names approved by owner (2026-10-05). Still needed: which client each testimonial belongs to, to fill `client` and `logo`.

## Facts reviewed (2026-10-20)
- Fixed: ISO 45001 and ISO 13485 eyebrows; ISO 13485 intro cards that reused ISO 45001 wording; "Official ISO/BSI certification achieved" on /iso-disp-services.
- Owner reviewed and chose to keep as is: founding year ("Since 1998" / "Since 2019" / "25+ years"), client counts, project/year stats, "100% first-audit success", /iso-service-australia FAQ, About page "Why Choose" cards, standard edition references.

## Other
- Google Maps embed on /free-consultation: keep or remove (third-party cookies).
- Contact forms replaced by the LeadConnector booking widget (iframe + form_embed.js): check privacy policy covers this third party and its cookies.
- Blog post "What is ISO?" on the headless site: set category "ISO Certification" and first published date 2025-05-09.
- Go-live: done. `noindex` removed (2026-10-05); the headless site is live at https://www.integpro.com.au/ (2026-10-20).
- After go-live: submit the sitemap in Google Search Console and check that old Wix URLs redirect or resolve.

## Google Ads readiness (2026-10-20)
- Duplicate head tags: Wix's STATIC_PAGE SEO pattern now has its title, canonical, og:* and twitter title/description tags disabled (code renders them). Undo: Wix SEO API "Reset SEO Pattern To Default" for STATIC_PAGE.
- Sitemap: Wix reserves `/sitemap.xml` (404 on this headless site), so `/sitemap-integpro.xml` is served by `site/src/pages/sitemap-integpro.xml.ts`; robots.txt points to it (pages, blog categories, posts; slash-less canonical URLs). `@astrojs/sitemap` removed. Submit `/sitemap-integpro.xml` in Search Console.
- Tracking: set `gtmId` in `site/src/data/site.ts`; configure GA4 and the Google Ads conversion in GTM. Set the LeadConnector booking widget to redirect to `/thank-you` and use that page view as the conversion. Booking widget messages are also pushed to the dataLayer as `booking_widget`.
