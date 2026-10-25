# Archived: /medical-iso (Medical Device ISO page)

Removed from the live site on 2026-10-24 at the owner's request. Kept here so it can be restored.

`/medical-iso` now 301-redirects to `/iso-13485-medical-devices-quality-management-system`.

## To restore
1. Move `medical-iso.astro` back to `site/src/pages/` and `hero-medical-bg.webp` to `site/public/images/medical-iso/`.
2. Remove the `/medical-iso` entry from `redirects` in `site/astro.config.mjs`.
3. Add the links back in `site/src/data/site.ts`: Services menu `{ label: 'Medical Device iso', href: '/medical-iso' }` and footer Services `{ label: 'Medical', href: '/medical-iso' }`.
4. Optionally point the "Medical Devices" card in `site/src/pages/industries.astro` back to `/medical-iso`.
