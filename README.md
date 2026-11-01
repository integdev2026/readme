# integPRO website

The integPRO website, a Wix-managed headless project maintained through code.

Live: https://www.integpro.com.au/ (headless site, live since 2026-10-20).

## Layout
- `tools/capture/` — Playwright script that captures the live site (screenshots, text, layout, design tokens, media).
- `.github/workflows/capture-live-site.yml` — runs the capture on GitHub's runners and commits results to `capture/` (re-creates the folder if run).
- `capture/` — removed from `main` on 2026-11-01 (745 MB snapshot of the old Wix Editor site). It is still in Git history: `git checkout b2a027b -- capture` restores it.
- `site/` — the Astro headless site.
  - `src/pages/` — one file per URL; `src/components/` grouped by section (`disp/`, `iso-standard/`, `blog/` …); `src/data/` — copy, menus and site settings (`site.ts` holds the GA4 and GTM IDs); `public/images/` — WebP images, one folder per page.
- `docs/` — open items, archived page content, and `BOOKING-EMBED.md` (the booking form embed code).

## Deploying
- **Only `main` deploys.** Merge a pull request into `main`; `.github/workflows/deploy-wix.yml` releases it to the live site. Feature branches never touch the live site.
- `smoke-check.yml` runs after each deploy: it checks the key pages and Google Ads landing pages return 200 and that the GA4 tag is on the home page, and fails if not.

## Google Ads tracking
- GA4 `G-8HG19XQE77` loads on every page (`site/src/layouts/Base.astro`).
- `/thank-you` sends `booking_complete`; the booking widget must redirect there. Import `booking_complete` into Google Ads as the conversion.
- GTM is off (`gtmId` empty) so GA4 hits are not counted twice. If you turn it on, remove any GA4 tag for the same ID inside the container.
