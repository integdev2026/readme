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
    ],
  },
  {
    label: 'DISP',
    href: '/disp',
    children: [
      { label: 'DISP Levels', href: '/disp/levels' },
      { label: 'Industries', href: '/disp/industries' },
      { label: 'Roles', href: '/disp/roles' },
      { label: 'Our Process', href: '/disp/process' },
      { label: 'DISP FAQ', href: '/disp/faq' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about-us-iso-team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export const cta = { label: 'Free Meeting', href: '/free-consultation' };

export const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'ISO', href: '/iso-service-australia' },
      { label: 'DISP', href: '/disp' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Academy', href: '/blog/categories/iso-certification' },
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/industries' },
      { label: 'Industries', href: '/industries' },
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
  location: 'Sydney, Australia',
  abn: '23 633 745 516',
};
