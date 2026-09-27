// Shared data for the ISO 27001 / ISO 13485 / Medical ISO pages (components/iso-standard-2).
export const iconBase = '/images/iso-standard-2';
export const icon = (name: string) => `${iconBase}/${name}.webp`;

// Headline figures shown in the hero stat card and the closing CTA on the live pages.
export const headlineStats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '20+', label: 'Years' },
  { value: '100%', label: 'Success' },
];

export interface Feature { icon: string; title: string; text: string }
export interface Detail { icon: string; title: string; text: string; bullets?: string[] }
