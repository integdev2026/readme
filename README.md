# integPRO website

The integPRO website, a Wix-managed headless project maintained through code.

Live: https://www.integpro.com.au/ (headless site, live since 2026-10-20).

## Layout
- `tools/capture/` — Playwright script that captures the live site (screenshots, text, layout, design tokens, media).
- `.github/workflows/capture-live-site.yml` — runs the capture on GitHub's runners and commits results to `capture/`.
- `capture/` — snapshot of the old Wix Editor site, taken before go-live and used as the design reference (do not edit by hand). Re-running the capture now records the headless site, not the old one.
- `site/` — the Astro headless site; `.github/workflows/deploy-wix.yml` deploys it and `smoke-check.yml` checks key pages on the live domain.
- `docs/WRITING-STYLE.md` — writing rules for all site and blog copy.
