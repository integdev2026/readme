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

## Google Ads review (after launch)
- Owner chose to review ads after the new site launches.
- Before the domain switch: the new site has no Google tag. The old site loads GTM-W52J525F (with Google Ads AW-10996724305); add it to every page or ads/GA4 tracking stops at launch.
- Conversion action "Submit lead form (1)" counts ~63% of clicks (1,139 conversions / 1,817 clicks, 90 days to 2026-10-05): fix its trigger. Plan: booking widget redirects to a /thank-you page; count that URL only.
- GA4 connected in Windsor is dispco.com.au (295741463); connect integpro.com.au's GA4 property and link it to Google Ads.
- Done 2026-10-05: negatives added to DISP Landing Page (incl. ppwr, food-safety, course) and ISO Performance Max (jobs, free, template, pdf, training, course, ...); Dynamic Search ad group paused; broad keywords cybersecurity / defence industry / defence security paused. Re-check search terms ~2 weeks after launch.

