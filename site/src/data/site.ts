// ISO section menu (section bar on ISO pages and the ISO dropdown).
export const isoNav = [
  { label: 'Overview', href: '/iso-service-australia' },
  { label: 'ISO 9001', href: '/iso-9001-compliance-certification-sydney' },
  { label: 'ISO 14001', href: '/iso-14001-compliance-certification' },
  { label: 'ISO 45001', href: '/iso-45001-occupational-health-safety' },
  { label: 'ISO 27001', href: '/iso-27001-information-security-management-system' },
  { label: 'ISO 13485', href: '/iso-13485-medical-devices-quality-management-system' },
  { label: 'Industries', href: '/industries' },
];

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'ISO',
    href: '/iso-service-australia',
    children: [
      { label: 'ISO Services', href: '/iso-service-australia' },
      { label: 'ISO 9001 Quality', href: '/iso-9001-compliance-certification-sydney' },
      { label: 'ISO 14001 Environmental', href: '/iso-14001-compliance-certification' },
      { label: 'ISO 45001 Health & Safety', href: '/iso-45001-occupational-health-safety' },
      { label: 'ISO 27001 Information Security', href: '/iso-27001-information-security-management-system' },
      { label: 'ISO 13485 Medical Devices', href: '/iso-13485-medical-devices-quality-management-system' },
      { label: 'ISO by Industry', href: '/industries' },
    ],
  },
  {
    label: 'DISP',
    href: '/disp',
    children: [
      { label: 'DISP Levels', href: '/disp/levels' },
      { label: 'DISP by Industry', href: '/disp/industries' },
      { label: 'Roles', href: '/disp/roles' },
      { label: 'Our Process', href: '/disp/process' },
      { label: 'DISP FAQ', href: '/disp/faq' },
    ],
  },
  {
    label: 'About Us',
    href: '/about-us-iso-team',
    children: [
      { label: 'About integPRO', href: '/about-us-iso-team' },
      { label: 'Our Services', href: '/services' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  { label: 'Blog', href: '/blog' },
];

export const cta = { label: 'Free Meeting', href: '/free-consultation' };

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'All services', href: '/services' },
      { label: 'ISO', href: '/iso-service-australia' },
      { label: 'DISP', href: '/disp' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Academy', href: '/blog/categories/iso-certification' },
      { label: 'Blog', href: '/blog' },
      { label: 'ISO by Industry', href: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about-us-iso-team' },
      { label: 'Contact', href: '/free-consultation' },
    ],
  },
];

export const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/integ-pro/posts/?feedView=all', icon: '/images/linkedin.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/integpro.iso/', icon: '/images/instagram.png' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574845131374', icon: '/images/facebook.png' },
  { label: 'YouTube', href: 'https://www.youtube.com/@integPRO-ISO/', icon: '/images/youtube.png' },
];

export const company = {
  name: 'integPRO',
  email: 'info@integpro.com.au',
  phone: '1300 60 50 22',
  phones: [
    { label: 'Australia-wide', number: '1300 60 50 22' },
    { label: 'Sydney', number: '02 9080 4633' },
  ],
  address: 'Level 35/252 Pitt St, Sydney NSW 2000',
  founded: '2019',
  abn: '23 633 745 516',
};

/**
 * Google Tag Manager container ID (GTM-XXXXXXX). Empty means no tag is loaded.
 * Left empty on purpose: Google Ads conversions come from GA4 (import booking_complete).
 * If GTM is turned on later, make sure it does not also send to the GA4 ID below, or hits are counted twice.
 */
export const gtmId = '';

/** Google Analytics 4 measurement ID, loaded on every page with gtag.js. Empty means no tag is loaded. */
export const gaId = 'G-8HG19XQE77';

export const telHref = (n: string) => `tel:${n.startsWith('0') ? '+61' + n.slice(1) : n}`.replace(/\s/g, '');
