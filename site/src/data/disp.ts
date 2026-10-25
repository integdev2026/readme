// DISP section content. DISP is a separate service from ISO: keep ISO standards out of this file
// and keep DISP terms out of the ISO pages, so the two never compete for the same searches.
// Level classifications, eligibility and Defence process statements must be checked against the
// current Defence DISP pages before go-live (see docs/OPEN-ITEMS.md).

export interface Crumb { label: string; href: string }

// Photos come from the site's Wix Media library, resized by Wix's image service.
export const wixImage = (id: string, w = 960, h = 720) => `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80/${id.replace(/~mv2.*/, '')}.webp`;

// Icon names from src/components/Icon.astro.
export type IconName = 'shield' | 'shieldCheck' | 'lock' | 'factory' | 'gear' | 'helmet' | 'server' | 'user' | 'briefcase' | 'laptop' | 'search' | 'list' | 'wrench' | 'users' | 'send' | 'refresh' | 'check';

// In-section menu shown on every DISP page.
export const dispNav = [
  { label: 'Overview', href: '/disp' },
  { label: 'Levels', href: '/disp/levels' },
  { label: 'Industries', href: '/disp/industries' },
  { label: 'Roles', href: '/disp/roles' },
  { label: 'Process', href: '/disp/process' },
  { label: 'FAQ', href: '/disp/faq' },
];

export const dispCta = { label: 'Book a free DISP consult', href: '#contact' };

// The four DISP security categories (Defence's own grouping).
export const categories = [
  { icon: '878bb3', title: 'Governance', text: 'Security policies, a nominated Chief Security Officer and Security Officer, and annual reporting to Defence.' },
  { icon: '187f81', title: 'Personnel Security', text: 'Pre-employment checks, security awareness training and, at higher levels, managing security clearances.' },
  { icon: '24d773', title: 'Physical Security', text: 'Controlling access to the sites and areas where Defence information is handled or stored.' },
  { icon: 'c67d3c', title: 'Information & Cyber Security', text: 'Protecting systems and data, including the Essential Eight controls set for your membership level.' },
];

export interface Level {
  slug: string;
  label: string;
  short: string;
  classification: string;
  timeline: string;
  title: string;
  description: string;
  heroTitle: string;
  heroText: string;
  fit: string[];
  scope: string[];
  notes: string[];
}

// Card icon for each level page, in the same order as `levels`.
export const levelIcons: IconName[] = ['shield', 'shieldCheck', 'lock'];

export const levels: Level[] = [
  {
    slug: 'entry-level',
    label: 'Entry Level',
    short: 'The starting point for most businesses in the Defence supply chain.',
    classification: 'OFFICIAL: Sensitive',
    timeline: '3–6 months',
    title: 'Entry Level DISP Membership Consultants | integPRO',
    description: 'Get ready for Entry Level DISP membership: Security Officer set-up, gap analysis, security policies, cyber controls and application support from integPRO.',
    heroTitle: 'Entry Level <span class="gold">DISP Membership</span>',
    heroText: 'A defined scope of work that takes your business from first gap analysis to a submitted Entry Level application, with support through Defence’s assessment.',
    fit: [
      'You supply goods or services into Defence projects or primes for the first time.',
      'A prime or Defence contract has asked for DISP membership.',
      'You handle information up to OFFICIAL: Sensitive.',
    ],
    scope: [
      'Nominate and brief your Chief Security Officer (CSO) and Security Officer (SO)',
      'Gap analysis against the Entry Level requirements, with a prioritised action plan',
      'Security policy and governance documents written for your business',
      'Physical security review of your premises',
      'Cyber security uplift support against the Essential Eight requirements for Entry Level',
      'Application preparation and interview readiness',
      'Responding to Defence requests during assessment',
      'Support after membership: annual security report and ongoing obligations',
    ],
    notes: [
      'Entry Level suits most suppliers. Move to Level 1 only when a contract needs PROTECTED information or you need to sponsor security clearances.',
    ],
  },
  {
    slug: 'level-1',
    label: 'Level 1',
    short: 'For businesses that handle PROTECTED information or sponsor clearances.',
    classification: 'PROTECTED',
    timeline: '6–8 months',
    title: 'Level 1 DISP Membership Consultants | integPRO',
    description: 'Level 1 DISP support for businesses handling PROTECTED information: expanded gap analysis, cyber controls, physical security and clearance sponsorship.',
    heroTitle: 'Level 1 <span class="gold">DISP Membership</span>',
    heroText: 'Level 1 builds on Entry Level with a larger scope across all four DISP categories. We assess your risk profile first, then scope the work.',
    fit: [
      'Your contract involves PROTECTED information.',
      'You want to sponsor personnel security clearances for your own staff.',
      'You already hold Entry Level and need to step up.',
    ],
    scope: [
      'Everything in the Entry Level scope, adjusted to Level 1 requirements',
      'Expanded gap analysis and action plan',
      'Additional governance provisions and cyber security policies',
      'Higher Essential Eight maturity targets',
      'Physical security review: floor plans, access control and CCTV',
      'Personnel security processes for clearance sponsorship',
    ],
    notes: [
      'Level 1 takes more time and effort than Entry Level. We scope it after an initial consult, once we understand your risk profile.',
    ],
  },
  {
    slug: 'level-2-3',
    label: 'Levels 2 & 3',
    short: 'Custom programs for businesses handling SECRET or TOP SECRET information.',
    classification: 'SECRET / TOP SECRET',
    timeline: '12 months +',
    title: 'Level 2 & Level 3 DISP Consultants | integPRO',
    description: 'Custom DISP programs for Level 2 (SECRET) and Level 3 (TOP SECRET) membership, including site inspection readiness and higher-assurance security controls.',
    heroTitle: 'Level 2 & 3 <span class="gold">DISP Membership</span>',
    heroText: 'Levels 2 and 3 apply to businesses working on highly classified Defence programs. Each engagement is scoped to your sites, systems and people.',
    fit: [
      'You work on highly classified Defence programs or technologies.',
      'A contract requires SECRET or TOP SECRET information handling.',
    ],
    scope: [
      'Everything in the Entry Level and Level 1 scopes, adjusted to Level 2 or 3 requirements',
      'Readiness for Defence site inspection',
      'Higher-assurance physical, personnel and information security controls',
      'Program governance and reporting for the life of your membership',
    ],
    notes: [
      'Levels 2 and 3 are always custom packages. Book a consult to scope them.',
    ],
  },
];

export interface Topic {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroTitle: string;
  heroText: string;
  points: { title: string; text: string }[];
  level: string;
  icon: IconName;
  image?: { src: string; alt: string };
}

export const industries: Topic[] = [
  {
    slug: 'manufacturing',
    image: { src: wixImage('6d9105_8f8caa02509e4d91a5ff0f61f3b5d783~mv2.png'), alt: 'Modern factory floor with production lines and staff at work' },
    icon: 'factory',
    label: 'Manufacturing',
    title: 'DISP for Manufacturers | integPRO',
    description: 'DISP membership for Australian manufacturers supplying Defence primes: protecting drawings and specifications and securing the shop floor and systems.',
    heroTitle: 'DISP for <span class="gold">Manufacturers</span>',
    heroText: 'Manufacturers often hold Defence drawings, specifications and part data. DISP shows primes that this information is protected on the shop floor and in your systems.',
    points: [
      { title: 'Technical data', text: 'Controls for drawings, CAD files and specifications shared by primes, including who can access them and where they are stored.' },
      { title: 'Shop-floor access', text: 'Physical security for production areas where Defence parts or documents are present.' },
      { title: 'Supply chain', text: 'Handling requirements primes pass down to you, and what you need from your own suppliers.' },
    ],
    level: 'Most manufacturers start with Entry Level.',
  },
  {
    slug: 'engineering',
    image: { src: wixImage('6d9105_c2b4253cf77346b7b0d8a5140d7ec8c3~mv2.png'), alt: 'Engineer marking up technical drawings' },
    icon: 'gear',
    label: 'Engineering',
    title: 'DISP for Engineering Firms | integPRO',
    description: 'DISP membership for engineering and design consultancies working on Defence projects: securing design data, project teams and collaboration tools.',
    heroTitle: 'DISP for <span class="gold">Engineering Firms</span>',
    heroText: 'Engineering and design teams work with sensitive project data across many tools and people. DISP sets the security baseline Defence expects.',
    points: [
      { title: 'Design data', text: 'Protecting models, reports and project files across shared drives, cloud platforms and email.' },
      { title: 'Project teams', text: 'Personnel checks and briefings for staff and contractors who work on Defence projects.' },
      { title: 'Collaboration', text: 'Secure ways to share information with primes, subcontractors and Defence.' },
    ],
    level: 'Entry Level suits most firms. Level 1 applies when projects involve PROTECTED information.',
  },
  {
    slug: 'construction',
    image: { src: wixImage('6d9105_88bb689011dc44e49dcc6f42a2a0ba71~mv2.png'), alt: 'Site supervisor in high-visibility gear on a construction site with a crane' },
    icon: 'helmet',
    label: 'Construction',
    title: 'DISP for Construction & Facilities | integPRO',
    description: 'DISP membership for builders and facilities contractors on Defence estate projects: site security, document control and workforce screening.',
    heroTitle: 'DISP for <span class="gold">Construction & Facilities</span>',
    heroText: 'Defence estate projects bring security obligations to site offices, plans and workforces. DISP membership helps you meet them.',
    points: [
      { title: 'Plans and documents', text: 'Controlling access to site plans, layouts and other sensitive project documents.' },
      { title: 'Site security', text: 'Physical security for site offices and areas where project information is kept.' },
      { title: 'Workforce', text: 'Screening and security awareness for employees and subcontractors.' },
    ],
    level: 'Requirements depend on the project. We confirm the right level in your consult.',
  },
  {
    slug: 'it-managed-services',
    image: { src: wixImage('6d9105_53e731139f624f17904215112052f2d5~mv2.png'), alt: 'Managed IT services team monitoring network and security dashboards' },
    icon: 'server',
    label: 'IT & Managed Services',
    title: 'DISP for IT & Managed Service Providers | integPRO',
    description: 'DISP membership for IT providers and MSPs supporting Defence suppliers: securing client environments, privileged access and service delivery.',
    heroTitle: 'DISP for <span class="gold">IT & Managed Services</span>',
    heroText: 'IT providers often have privileged access to Defence suppliers’ systems. DISP membership shows you protect that access and the data behind it.',
    points: [
      { title: 'Privileged access', text: 'Controls over administrator accounts and remote access into client environments.' },
      { title: 'Cyber controls', text: 'Meeting the Essential Eight requirements for your level in your own environment.' },
      { title: 'Service delivery', text: 'Security processes for support staff, incidents and changes.' },
    ],
    level: 'Usually Entry Level or Level 1, depending on the information your clients handle.',
  },
];

export const roles: Topic[] = [
  {
    slug: 'security-officer',
    image: { src: wixImage('6d9105_cf1086a2f7434459ac568d3b002dc89d~mv2.png'), alt: 'Security officer reviewing security policies at a desk' },
    icon: 'user',
    label: 'Security Officers',
    title: 'DISP Security Officer & CSO Support | integPRO',
    description: 'Support for DISP Security Officers and Chief Security Officers: understanding the role, running the security program and meeting reporting obligations.',
    heroTitle: 'Support for <span class="gold">Security Officers & CSOs</span>',
    heroText: 'DISP membership needs a nominated Chief Security Officer (CSO) and Security Officer (SO). We help them understand the role and run the program.',
    points: [
      { title: 'Understand the role', text: 'What Defence expects from the CSO and SO, and how the two roles divide responsibilities.' },
      { title: 'Run the program', text: 'Practical tools for policies, registers, training and incident reporting.' },
      { title: 'Stay compliant', text: 'Preparing the annual security report and reporting changes to Defence.' },
    ],
    level: 'Applies to every DISP level.',
  },
  {
    slug: 'directors',
    image: { src: wixImage('6d9105_2ec20a59be3845ecbf2fd28e84585285~mv2.png'), alt: 'Director leading a boardroom meeting with the leadership team' },
    icon: 'briefcase',
    label: 'Directors & Owners',
    title: 'DISP for Directors & Business Owners | integPRO',
    description: 'What DISP means for directors and owners: why primes ask for it, the commitment involved and how to plan time, people and budget.',
    heroTitle: 'DISP for <span class="gold">Directors & Owners</span>',
    heroText: 'DISP is a business decision before it is a security project. We help you decide which level you need and what it will take.',
    points: [
      { title: 'Is it needed?', text: 'When contracts and primes require DISP, and which level fits your work.' },
      { title: 'Commitment', text: 'Time, people and ongoing obligations that come with membership.' },
      { title: 'Disclosure', text: 'Ownership, control and foreign interest information Defence will ask for.' },
    ],
    level: 'Most businesses start with Entry Level.',
  },
  {
    slug: 'it-managers',
    image: { src: wixImage('6d9105_3fb62e9d995d4c09bf0736e99e327d35~mv2.png'), alt: 'IT manager with a laptop in a server room' },
    icon: 'laptop',
    label: 'IT Managers',
    title: 'DISP for IT Managers | integPRO',
    description: 'DISP cyber security requirements for IT managers: Essential Eight controls, system documentation and evidence for the Defence assessment.',
    heroTitle: 'DISP for <span class="gold">IT Managers</span>',
    heroText: 'Information and cyber security is often the largest part of a DISP project. We turn the requirements into a clear technical plan.',
    points: [
      { title: 'Essential Eight', text: 'Assessing current maturity and closing gaps to the level your membership needs.' },
      { title: 'Documentation', text: 'System security documents and evidence Defence will review.' },
      { title: 'Ongoing operation', text: 'Keeping controls working and reportable after membership is granted.' },
    ],
    level: 'Cyber requirements increase with each DISP level.',
  },
];

export const processSteps: { title: string; icon: IconName; text: string }[] = [
  { title: 'Gap Analysis', icon: 'search', text: 'We assess where you stand against the requirements of your target level.' },
  { title: 'Action Plan', icon: 'list', text: 'A prioritised list of the work, owners and timing.' },
  { title: 'Implementation', icon: 'wrench', text: 'Policies, physical controls, personnel processes and cyber uplift.' },
  { title: 'Governance', icon: 'users', text: 'Your CSO and SO are briefed and the security program is in place.' },
  { title: 'Submission', icon: 'send', text: 'We prepare your application and support you through Defence’s assessment.' },
  { title: 'Ongoing Support', icon: 'refresh', text: 'Annual reporting, changes and maintaining your membership.' },
];

export const eligibility = [
  { k: 'Australian entity:', v: 'Your business must be an Australian entity with an ABN.' },
  { k: 'Security commitment:', v: 'You must nominate a CSO and SO and put the required security controls in place.' },
  { k: 'Transparency:', v: 'You must disclose your ownership, control and any foreign interest.' },
];

export const faq = [
  { q: 'What is DISP?', a: 'The Defence Industry Security Program (DISP) is run by the Department of Defence. It sets the security standards Australian businesses must meet to work on Defence projects, contracts and tenders that involve security requirements.' },
  { q: 'Who needs DISP membership?', a: 'Businesses whose Defence contracts or prime contractors require it, businesses that handle classified Defence information, and businesses that need to store Defence weapons or explosive ordnance or sponsor security clearances.' },
  { q: 'Which DISP level do I need?', a: 'It depends on the information you handle. Entry Level covers up to OFFICIAL: Sensitive, Level 1 covers PROTECTED, Level 2 covers SECRET and Level 3 covers TOP SECRET. Most suppliers start with Entry Level.' },
  { q: 'Does DISP membership cost anything?', a: 'Defence does not charge a membership fee. The costs come from putting the required security measures in place and keeping them running.' },
  { q: 'How long does it take?', a: 'It depends on your starting point and target level. Our typical timeline from gap analysis to submission is 3–6 months for Entry Level, 6–8 months for Level 1 and 12 months or more for Levels 2 and 3.\nDefence’s assessment time is set by Defence and is not part of that estimate.' },
  { q: 'What are the CSO and SO roles?', a: 'The Chief Security Officer (CSO) is a senior person accountable for security in your business. The Security Officer (SO) runs the security program day to day. Both are required for membership.' },
  { q: 'What is the Essential Eight and why does it matter for DISP?', a: 'The Essential Eight is a set of cyber security strategies published by the Australian Signals Directorate. DISP members must meet the Essential Eight requirements set for their membership level.' },
  { q: 'Does DISP membership guarantee Defence contracts?', a: 'No. Membership shows you meet Defence’s security requirements. It can be a condition of a contract or tender, but it does not guarantee one.' },
  { q: 'What happens after membership is granted?', a: 'Members must keep their controls in place, report changes to Defence and submit an annual security report. We can support you with these ongoing obligations.' },
];

// Breadcrumbs plus BreadcrumbList structured data for a DISP page.
export const crumbs = (...trail: Crumb[]): Crumb[] => [{ label: 'Home', href: '/' }, { label: 'DISP', href: '/disp' }, ...trail];

// Level, industry and role pages come from one dynamic route, which the sitemap integration can't
// list on its own; the fixed DISP pages are picked up automatically.
export const dispPaths = [...levels, ...industries, ...roles].map((p) => `/disp/${p.slug}`);

// Level staircase (Levels 2 and 3 share one page).
export const ladder = [
  { label: 'Entry Level', classification: 'OFFICIAL: Sensitive', timeline: '3–6 months', href: '/disp/entry-level' },
  { label: 'Level 1', classification: 'PROTECTED', timeline: '6–8 months', href: '/disp/level-1' },
  { label: 'Level 2', classification: 'SECRET', timeline: '12 months +', href: '/disp/level-2-3' },
  { label: 'Level 3', classification: 'TOP SECRET', timeline: '12 months +', href: '/disp/level-2-3' },
];

// What each level adds, as shown on the levels comparison table (Entry, Level 1, Level 2, Level 3).
export const comparison: { row: string; levels: [boolean, boolean, boolean, boolean] }[] = [
  { row: 'CSO and SO nominated and briefed', levels: [true, true, true, true] },
  { row: 'Gap analysis and action plan', levels: [true, true, true, true] },
  { row: 'Security policies and governance documents', levels: [true, true, true, true] },
  { row: 'Physical security review', levels: [true, true, true, true] },
  { row: 'Essential Eight cyber controls', levels: [true, true, true, true] },
  { row: 'Annual security report to Defence', levels: [true, true, true, true] },
  { row: 'Higher Essential Eight maturity targets', levels: [false, true, true, true] },
  { row: 'Floor plan, access control and CCTV review', levels: [false, true, true, true] },
  { row: 'Personnel security clearance sponsorship', levels: [false, true, true, true] },
  { row: 'Defence site inspection', levels: [false, false, true, true] },
  { row: 'Custom package scoped to your sites and systems', levels: [false, false, true, true] },
];
