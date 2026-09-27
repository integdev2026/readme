# integPRO website

Rebuild of the integPRO website as a Wix-managed headless project, maintained through code.

## Layout
- `tools/capture/` — Playwright script that captures the live site (screenshots, text, layout, design tokens, media).
- `.github/workflows/capture-live-site.yml` — runs the capture on GitHub's runners and commits results to `capture/`.
- `capture/` — generated snapshot of the live site used as the design reference (do not edit by hand).
