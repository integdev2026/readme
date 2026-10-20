export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/iso-disp-services',
    children: [
      { label: 'ISO', href: '/iso-service-australia' },
      { label: 'DISP', href: '/disp' },
      { label: 'Medical Device iso', href: '/medical-iso' },
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
      { label: 'What we do', href: '/iso-disp-services' },
      { label: 'ISO', href: '/iso-service-australia' },
      { label: 'DISP', href: '/disp' },
      { label: 'Medical', href: '/medical-iso' },
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
      { label: 'Services', href: '/iso-disp-services' },
      { label: 'About', href: '/about-us-iso-team' },
      { label: 'Contact', href: '/free-consultation' },
      { label: 'DISP', href: '/disp' },
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
