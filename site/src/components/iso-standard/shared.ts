// Shared data for the ISO standard pages (ISO 9001 / 14001 / 45001).
export interface Stat { value: string; label: string }
export interface Feature { icon: string; title: string; text: string }
export interface Deliverable { icon: string; title: string; text: string; bullets?: string[] }

/** Stats shown in the hero card and the closing CTA card on every ISO standard page. */
export const standardStats: Stat[] = [
  { value: '120+', label: 'Projects Completed' },
  { value: '20+', label: 'Years' },
  { value: '100%', label: 'Success' },
];

/** Icon paths in /public/images/iso-standard/ (original Wix icon artwork, converted to WebP). */
const dir = '/images/iso-standard';
export const icons = {
  globe: `${dir}/globe.webp`,
  trend: `${dir}/trend.webp`,
  clipboard: `${dir}/clipboard.webp`,
  people: `${dir}/people.webp`,
  checkbox: `${dir}/checkbox.webp`,
  target: `${dir}/target.webp`,
  award: `${dir}/award.webp`,
  lock: `${dir}/lock.webp`,
  bank: `${dir}/bank.webp`,
  search: `${dir}/search.webp`,
  defence: `${dir}/ind-defence.webp`,
  healthcare: `${dir}/ind-healthcare.webp`,
  manufacturing: `${dir}/ind-manufacturing.webp`,
  professional: `${dir}/ind-professional.webp`,
  construction: `${dir}/ind-construction.webp`,
  education: `${dir}/ind-education.webp`,
};
