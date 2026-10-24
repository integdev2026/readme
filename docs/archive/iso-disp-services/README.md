# Archived: /iso-disp-services (combined ISO & DISP services page)

Retired 2026-10-24 at the owner's request to keep ISO and DISP as separate services. `/iso-disp-services` now 301-redirects to `/iso-service-australia`.

Where its content went:
- ISO service packages → `site/src/components/iso-service-australia/ServicePackages.astro` (on /iso-service-australia)
- Service ecosystem, add-ons, six-step journey → `ServiceEcosystem.astro` (on /iso-service-australia). Dropped: duplicate "Extra Consulting Hours" add-on, "No Fee" add-on, and "ISO/BSI" in the certification outcome.
- DISP level timelines → `site/src/data/disp.ts` (`timeline` on each level).
- Not carried over: the DISP level cards' other text (covered more accurately by /disp level pages).

The page's images stay in `site/public/images/iso-disp-services/` because the moved sections use them.
