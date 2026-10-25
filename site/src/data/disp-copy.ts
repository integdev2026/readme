// Long-form copy for the DISP level, industry, role, hub and process pages, kept apart from the
// structured data in disp.ts so the page templates stay short. Same rules as disp.ts: no ISO
// keyword targeting here, and every statement about Defence requirements (DSPF, Essential Eight,
// AGSVA, reporting) must be checked against the current Defence DISP pages before it is relied on.

export interface CopySection { h: string; p: string[]; list?: string[] }
export interface PageCopy { sections: CopySection[]; faqs?: { q: string; a: string }[] }

// Level, industry and role pages, keyed by slug.
export const pageCopy: Record<string, PageCopy> = {
  'entry-level': {
    sections: [
      {
        h: 'What Entry Level membership covers',
        p: [
          'Entry Level is the first tier of the Defence Industry Security Program. It shows Defence and primes that your business meets a baseline across the four DISP categories: governance, personnel security, physical security, and information and cyber security.',
          'It covers work involving information up to OFFICIAL: Sensitive. For most small and medium suppliers, that is all a contract needs. Many primes now ask subcontractors for Entry Level membership as a condition of joining their supply chain, even where no classified information changes hands.',
        ],
      },
      {
        h: 'What Defence will look for',
        p: [
          'Defence assesses whether your security arrangements are real and working, not just written down. Expect questions on the following areas during the application and any follow-up interview.',
        ],
        list: [
          'A nominated Chief Security Officer (CSO) and Security Officer (SO) who understand their responsibilities.',
          'Security policies and plans that match how your business actually operates.',
          'Pre-employment screening and security awareness training for staff.',
          'Physical controls over the areas where Defence information is handled.',
          'Cyber security controls aligned with the Essential Eight requirements set for your level.',
          'Full disclosure of ownership, control and any foreign interest.',
        ],
      },
      {
        h: 'Common sticking points',
        p: [
          'The cyber requirements are usually the longest piece of work. Businesses running unpatched systems, shared admin accounts or no application control often need several months of IT uplift before they can apply with confidence.',
          'The second is governance. A CSO who is too junior, or an SO who has no time set aside for the role, causes problems during assessment and after membership. We help you pick the right people and set realistic time for the role.',
        ],
      },
      {
        h: 'After you are granted membership',
        p: [
          'Membership is an ongoing commitment. You must keep controls in place, report relevant changes and security incidents to Defence, and submit an annual security report. We can stay on to support these obligations so the program does not lapse once the application is done.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a small business get Entry Level DISP membership?', a: 'Yes. Business size is not a barrier. What matters is that you can nominate a CSO and SO and put the required controls in place. Many Entry Level members are businesses with fewer than 20 staff.' },
      { q: 'Do we need Entry Level before applying for Level 1?', a: 'Not necessarily. You can apply for the level your work requires. Many businesses start at Entry Level and step up later because it spreads the effort over time.' },
    ],
  },
  'level-1': {
    sections: [
      {
        h: 'When Level 1 is the right level',
        p: [
          'Level 1 applies when your Defence work involves PROTECTED information, or when you need to sponsor security clearances for your own staff. It is also common for businesses that want to bid for work further up the supply chain, where primes expect PROTECTED handling.',
          'If you are unsure, start with the contract. The security classification guide or security requirements in a tender usually make the information level clear. We can review these documents in your first consult.',
        ],
      },
      {
        h: 'How Level 1 differs from Entry Level',
        p: [
          'The four DISP categories stay the same, but each one goes deeper. Governance needs more formal plans and records. Physical security moves from a general review to floor plans, access control zones and, often, CCTV. Information systems that hold PROTECTED data need stronger controls and better documentation.',
          'Personnel security changes the most. Sponsoring clearances means managing applications through the Australian Government Security Vetting Agency (AGSVA), keeping a clearance register and reporting changes in circumstances for cleared staff.',
        ],
      },
      {
        h: 'Planning the time and budget',
        p: [
          'Our typical timeline from gap analysis to submission is 6–8 months, plus Defence’s assessment time, which Defence controls. The largest costs are usually IT uplift and physical security works, not consulting.',
          'We scope Level 1 after an initial consult and site review, because the effort depends on your premises, your systems and how many people will need clearances. You get a fixed scope before work starts.',
        ],
      },
      {
        h: 'Keeping Level 1 membership',
        p: [
          'Level 1 members carry more ongoing obligations: maintaining the clearance register, reporting incidents and changes, keeping physical and cyber controls current, and the annual security report. Plan for the Security Officer role to take regular, scheduled time each month.',
        ],
      },
    ],
    faqs: [
      { q: 'Does Level 1 let us sponsor security clearances?', a: 'Level 1 and above are the levels associated with sponsoring personnel security clearances. Confirm the exact eligibility for your situation with Defence or in your consult, as the rules are set by Defence and can change.' },
    ],
  },
  'level-2-3': {
    sections: [
      {
        h: 'Who needs Level 2 or Level 3',
        p: [
          'Levels 2 and 3 apply to businesses handling SECRET or TOP SECRET information, usually on major Defence programs or sensitive technologies. Few suppliers need them, and they are almost always driven by a specific contract requirement.',
          'If you are considering these levels because a prime has mentioned them, check the contract’s security requirements first. Some suppliers on large programs only need Entry Level or Level 1 for the part of the work they do.',
        ],
      },
      {
        h: 'What changes at these levels',
        p: [
          'Physical security becomes a major project. Areas where SECRET or TOP SECRET material is handled need certified security zones, approved containers and controlled access, and Defence will inspect the site.',
          'Information systems that process classified data must be accredited and are usually separated from your corporate network. Personnel need higher clearances, and governance has to cover the full life of the program, not just the application.',
        ],
      },
      {
        h: 'How we scope a custom program',
        p: [
          'Every Level 2 and 3 engagement is scoped to your sites, systems and people. We start with a requirements review and site walk-through, then build a staged plan covering physical works, system accreditation, clearances and governance.',
          'Our typical timeline is 12 months or more before Defence’s own assessment and inspection time. We are open about which parts of the work need specialist trades or accredited assessors, and we coordinate with them.',
        ],
      },
    ],
    faqs: [
      { q: 'Can we apply for Level 2 or 3 without a contract that needs it?', a: 'Defence grants these levels where there is a genuine need, usually a contract or program requiring SECRET or TOP SECRET access. Talk to the prime or Defence contact first, then scope the program around that requirement.' },
      { q: 'Who inspects our site at Level 2 or 3?', a: 'Defence arranges the inspection of security zones and facilities. We help you prepare, but the inspection and its outcome are Defence’s decision.' },
    ],
  },
  manufacturing: {
    sections: [
      {
        h: 'Why primes ask manufacturers for DISP',
        p: [
          'If you machine, fabricate or assemble parts for Defence platforms, you probably hold drawings, specifications and part data that a prime considers sensitive. DISP membership gives the prime evidence that this information is protected in your office, on your shop floor and in your systems.',
          'Primes are under their own pressure to show Defence that their supply chain is secure. That is why requests for DISP often arrive in a supplier questionnaire or a contract renewal, rather than from Defence directly.',
        ],
      },
      {
        h: 'Where manufacturers usually have gaps',
        list: [
          'CAD files and drawings saved on shared drives anyone can open, or emailed between sites without control.',
          'Production areas open to visitors, delivery drivers and contractors with no sign-in or escort.',
          'Machine controllers and shop-floor PCs running old operating systems that cannot be patched.',
          'No clear record of who has handled Defence documents or where printed copies are kept.',
        ],
        p: [
          'None of these are unusual. Most can be fixed with practical changes to access, storage and IT, rather than major capital works.',
        ],
      },
      {
        h: 'How we work with manufacturers',
        p: [
          'We spend time on the floor, not just in the office. The gap analysis covers how drawings move from the prime to your CAM software, to the operator and back, so the controls fit your production process and do not slow it down.',
          'Where old machine controllers cannot meet cyber requirements, we help you isolate them and document the risk rather than replacing equipment that still does its job.',
        ],
      },
    ],
    faqs: [
      { q: 'Do we need to replace old CNC machines or controllers?', a: 'Usually not. Older equipment that cannot be patched can often be isolated from the rest of the network, with the remaining risk documented and accepted by management.' },
      { q: 'A prime sent us a security questionnaire. Is that DISP?', a: 'Not on its own. Many primes use questionnaires to check supplier security, and DISP membership is one way to answer them. The questionnaire often shows which level the prime expects.' },
    ],
  },
  engineering: {
    sections: [
      {
        h: 'Why engineering firms need DISP',
        p: [
          'Engineering and design consultancies work early in a Defence project, often with the most detailed technical information. Primes and Defence want to know that models, reports and design data are protected across every tool and person that touches them.',
          'DISP membership is increasingly a pre-qualification for Defence panels and prime subcontracts. Without it, firms can be excluded from tenders they are otherwise well placed to win.',
        ],
      },
      {
        h: 'Common challenges for engineering firms',
        list: [
          'Project data spread across cloud platforms, local drives, email and personal devices.',
          'Contractors and subconsultants who join for one project and keep access after it ends.',
          'Collaboration tools set up for convenience, with external sharing turned on by default.',
          'Staff working from home or client sites with no clear rules for handling Defence information.',
        ],
        p: [],
      },
      {
        h: 'How we approach engineering projects',
        p: [
          'We map where Defence project data lives and who can reach it, then set controls by project rather than locking down the whole firm. This keeps commercial work moving while Defence work meets the standard.',
          'We also cover personnel checks and briefings for project teams, including contractors, and set up secure ways to exchange files with primes and Defence.',
        ],
      },
    ],
    faqs: [
      { q: 'Can we keep Defence projects on our normal cloud platform?', a: 'Often yes for Entry Level work, with the right access controls, multi-factor authentication and sharing settings. PROTECTED information brings stricter hosting requirements, which we confirm during the gap analysis.' },
      { q: 'Do our subconsultants need to be DISP members?', a: 'It depends on what they access. If they handle Defence information, your contract or security plan may require them to meet set controls or hold membership.' },
    ],
  },
  construction: {
    sections: [
      {
        h: 'DISP on Defence estate projects',
        p: [
          'Builders, trades and facilities contractors working on Defence bases and estate projects handle site plans, layouts and service drawings that reveal how a facility is protected. Head contractors and Defence increasingly ask the supply chain to hold DISP membership before they share this information.',
          'Construction brings its own security problems: temporary site offices, a changing workforce and documents that move between the office, the site and subcontractors every day.',
        ],
      },
      {
        h: 'Where construction businesses usually have gaps',
        list: [
          'Printed plans left in site sheds or vehicles.',
          'Subcontractors and labour hire workers who start on site before any screening or briefing.',
          'Project documents shared through public file-sharing links.',
          'No process to recover documents and access cards when a worker leaves the project.',
        ],
        p: [],
      },
      {
        h: 'How we help construction and facilities contractors',
        p: [
          'We build simple document control and site security routines that site managers can actually run: secure storage for plans, sign-out registers, visitor controls and close-out checks at the end of a project.',
          'For the workforce, we set up screening and induction steps that fit your existing site induction, so security briefings do not add a separate process for every new worker.',
        ],
      },
    ],
    faqs: [
      { q: 'Do all workers on a Defence site need security clearances?', a: 'Not usually. Site access rules are set by Defence and the head contractor. DISP covers how your business screens, briefs and controls its own workforce and documents.' },
      { q: 'We only work on Defence sites occasionally. Is DISP worth it?', a: 'If Defence estate work is a small part of your business, check whether your head contractors require it. Membership carries ongoing obligations, so weigh those against the work it secures.' },
    ],
  },
  'it-managed-services': {
    sections: [
      {
        h: 'Why IT providers are in scope',
        p: [
          'Managed service providers and IT contractors often hold administrator access to their clients’ systems. If a client is a Defence supplier, your access is part of their security risk. Many DISP members now ask their IT providers to hold membership themselves or to show equivalent controls.',
          'For MSPs, DISP membership can open work with Defence suppliers who need a provider that already meets the standard.',
        ],
      },
      {
        h: 'What Defence and clients expect from you',
        list: [
          'Tight control of privileged accounts, with named admin accounts and multi-factor authentication.',
          'Your own environment meeting the Essential Eight requirements for your level, not just your clients’ environments.',
          'Secure remote access tools with logging that clients can review.',
          'Screening and security briefings for technicians who access Defence supplier systems.',
          'Incident response arrangements that tell clients quickly when something goes wrong.',
        ],
        p: [],
      },
      {
        h: 'How we work with MSPs',
        p: [
          'IT providers usually have strong technical controls but weaker governance and documentation. We focus on the policies, registers and evidence Defence expects, and align them with the tools you already use.',
          'We also help you package your DISP position for clients, so you can answer their supplier security questionnaires consistently.',
        ],
      },
    ],
    faqs: [
      { q: 'Do we need DISP if only one client is a Defence supplier?', a: 'Not always. Some clients accept evidence of equivalent controls. Others require membership in their contract. Check the requirement with the client before committing.' },
      { q: 'Does DISP membership cover our clients’ systems?', a: 'No. Your membership covers your own business and environment. Each client remains responsible for their own DISP obligations, although your controls support theirs.' },
    ],
  },
  'security-officer': {
    sections: [
      {
        h: 'The CSO and SO roles in practice',
        p: [
          'The Chief Security Officer is a senior person who is accountable for security across the business and has the authority to make decisions about it. The Security Officer runs the program day to day: policies, registers, training, incidents and reporting.',
          'In a small business the SO is often an operations manager or office manager taking on the role alongside their existing job. That works, as long as time is set aside and they have support.',
        ],
      },
      {
        h: 'What the Security Officer actually does',
        list: [
          'Keeps security policies and plans up to date.',
          'Runs security awareness briefings for new and existing staff.',
          'Maintains registers of Defence information, assets and, where relevant, clearances.',
          'Records and reports security incidents and relevant changes to Defence.',
          'Prepares the annual security report.',
          'Acts as the main contact with Defence on security matters.',
        ],
        p: [],
      },
      {
        h: 'How we support new Security Officers',
        p: [
          'We brief your CSO and SO on what Defence expects, then give the SO practical templates for registers, incident reports and training records. During the first year we can review the program with them, help with the first annual security report and be on call when an unusual situation comes up.',
        ],
      },
    ],
    faqs: [
      { q: 'How much time does the Security Officer role take?', a: 'It varies with your level and size. Expect more time during the application, then a regular block each month for registers, training and reporting, with extra time when incidents or changes occur.' },
      { q: 'Can the CSO and SO be the same person?', a: 'Check the current Defence requirements for your situation. In practice, separating the accountable senior role from the day-to-day role works better and avoids gaps when someone is away.' },
    ],
  },
  directors: {
    sections: [
      {
        h: 'Deciding whether DISP is worth it',
        p: [
          'Start with your pipeline. If current or likely contracts require DISP, the decision is simple. If not, weigh the cost of membership against the Defence work it could open, and the prime relationships that depend on it.',
          'DISP membership does not guarantee contracts. It removes a barrier to bidding and to staying in a prime’s supply chain.',
        ],
      },
      {
        h: 'What it will ask of the business',
        p: [
          'Directors usually underestimate the internal time, not the consulting fee. Expect the CSO and SO to give the program regular time during the application and after it. Your IT provider will also need budget for any cyber uplift.',
          'You will need to disclose ownership, control and any foreign interest. If there are overseas shareholders, directors or finance arrangements, raise them early, because they can affect the assessment and the timeline.',
        ],
      },
      {
        h: 'Your responsibilities as a director or owner',
        p: [
          'Membership sits with the business, and the board or owners carry ultimate accountability for it. That means appointing a capable CSO, making sure security has resources, and treating security incidents and changes as matters that reach senior management.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does DISP cost?', a: 'Defence does not charge a membership fee. Costs come from consulting support, internal staff time, and any IT or physical security works. We give you a fixed scope after the gap analysis.' },
      { q: 'What happens if we stop doing Defence work?', a: 'You can withdraw from membership. Until you do, the obligations continue, including reporting and the annual security report.' },
    ],
  },
  'it-managers': {
    sections: [
      {
        h: 'Why cyber is usually the biggest workstream',
        p: [
          'DISP requires controls aligned with the Australian Signals Directorate’s Essential Eight, with the target set by your membership level. For many businesses, especially those that grew without a formal IT function, closing these gaps is the largest piece of DISP work.',
        ],
      },
      {
        h: 'The Essential Eight areas you will be assessed against',
        list: [
          'Application control.',
          'Patching applications.',
          'Configuring Microsoft Office macro settings.',
          'User application hardening.',
          'Restricting administrative privileges.',
          'Patching operating systems.',
          'Multi-factor authentication.',
          'Regular backups.',
        ],
        p: [
          'Check the current Essential Eight Maturity Model before planning work: the Australian Signals Directorate updates it, and Defence sets which maturity applies to each DISP level.',
        ],
      },
      {
        h: 'How we help IT managers',
        p: [
          'We assess your current maturity against each strategy, then produce a technical plan that prioritises the controls with the biggest gap. We also write the system security documentation and gather the evidence Defence will ask for, so your team can focus on implementation.',
          'Where you use an MSP, we work with them directly, so responsibilities are clear and nothing falls between the two of you.',
        ],
      },
    ],
    faqs: [
      { q: 'Do we need to reach a specific Essential Eight maturity level?', a: 'Defence sets the cyber requirements for each DISP level, and they change over time. We confirm the current target for your level during the gap analysis.' },
      { q: 'What evidence will Defence ask for?', a: 'Typically system security documentation, configuration evidence, patching and backup records, and proof that controls such as multi-factor authentication are enforced.' },
    ],
  },
};

// Intro copy below the cards on the Levels, Industries and Roles hub pages.
export const hubCopy: Record<'levels' | 'industries' | 'roles', CopySection[]> = {
  levels: [
    {
      h: 'How to work out which level you need',
      p: [
        'Your DISP level is set by the most sensitive information your business will handle, store or create for Defence. Look at the security requirements in your contract or tender, or ask the prime. If it says OFFICIAL or OFFICIAL: Sensitive, Entry Level is usually enough. PROTECTED points to Level 1, and SECRET or TOP SECRET to Level 2 or 3.',
        'Other triggers can lift the level, such as needing to sponsor security clearances or to store weapons or explosive ordnance. If you are unsure, apply for the level your current work needs and step up later.',
      ],
    },
    {
      h: 'Stepping up between levels',
      p: [
        'Most businesses start at Entry Level and move to Level 1 when a contract requires it. The controls from the lower level carry over, so stepping up is an extension of your existing program, not a restart. Plan for the extra time: physical security and personnel clearance work at Level 1 and above usually set the pace.',
      ],
    },
  ],
  industries: [
    {
      h: 'Same requirements, different starting points',
      p: [
        'Every DISP member is assessed against the same Defence requirements at their level. What changes between industries is where the information sits and where the gaps usually are. A manufacturer’s risk is on the shop floor and in CAD files. A builder’s is in site offices and printed plans. An MSP’s is in privileged access to other businesses’ systems.',
        'Our industry pages explain the common gaps for each sector and how we adjust the work to fit. If your industry is not listed, the same approach applies: we start with where your Defence information goes and who can reach it.',
      ],
    },
    {
      h: 'Working across the supply chain',
      p: [
        'Primes increasingly pass security requirements down to their suppliers, and DISP members often ask the same of their own subcontractors and IT providers. Understanding where you sit in that chain helps you decide which level you need and what evidence your customers will ask for.',
      ],
    },
  ],
  roles: [
    {
      h: 'DISP is a business-wide program',
      p: [
        'DISP is not just an IT project or a compliance form. Directors make the decision and carry the accountability. The Chief Security Officer and Security Officer run the program. IT managers deliver the cyber controls that are usually the largest piece of work. Every staff member needs to know their part.',
        'Each role page explains what DISP asks of that person, the common problems we see and how we support them through the application and after membership.',
      ],
    },
    {
      h: 'Getting the roles right early',
      p: [
        'Choose your CSO and SO before the gap analysis starts. They will own the program, and Defence expects them to understand it. Bring your IT manager or MSP in from the first meeting, because cyber requirements often set the timeline.',
      ],
    },
  ],
};

// Detail for each step on /disp/process, in the same order as processSteps.
export const processDetail: { h: string; p: string }[] = [
  { h: 'Step 1: Gap analysis', p: 'We review your governance, personnel, physical and cyber security against the requirements for your target level. This includes a site visit, interviews with key staff and a look at your IT environment with your IT team or provider. You get a clear picture of what is already in place and what is missing.' },
  { h: 'Step 2: Action plan', p: 'Gaps are turned into a prioritised plan with owners, effort and target dates. Cyber and physical works that take longest are scheduled first. The plan also shows which items need budget, so directors can approve it with a realistic view of cost.' },
  { h: 'Step 3: Implementation', p: 'We write the security policies and plans, set up registers and training, and guide physical security changes. We work with your IT team or MSP on the cyber uplift, and track progress against the plan in regular check-ins.' },
  { h: 'Step 4: Governance', p: 'Your CSO and SO are briefed on their responsibilities and run the program with our support. We check that the controls work in practice, not just on paper, before anything is submitted to Defence.' },
  { h: 'Step 5: Submission and assessment', p: 'We prepare the application, help gather supporting evidence and get your team ready for any Defence interview or follow-up questions. Defence controls the assessment timeline, and we support you through requests for further information.' },
  { h: 'Step 6: Ongoing support', p: 'After membership is granted, we can help with the annual security report, reporting changes and incidents, refresher training and preparing to step up to a higher level when your contracts require it.' },
];

export const processIntro: CopySection[] = [
  {
    h: 'What affects the timeline',
    p: [
      'The biggest factors are your starting cyber maturity, whether physical works are needed, the availability of your CSO, SO and IT team, and the level you are targeting. Businesses with a managed IT environment and clear governance can move quickly. Businesses that need new systems or office changes take longer.',
      'Our timelines cover the work up to submission. Defence’s own assessment time is set by Defence and is not included.',
    ],
  },
];

// Extra DISP FAQ entries, appended to the shared FAQ list on /disp/faq.
export const moreFaq = [
  { q: 'Where are the DISP requirements set out?', a: 'DISP requirements sit within the Defence Security Principles Framework (DSPF), which Defence maintains and updates. Always check requirements against the current version published by Defence.' },
  { q: 'Can we use a consultant as our Security Officer?', a: 'Defence expects the CSO and SO to be part of, or accountable to, your business. A consultant can support them, prepare documents and run training, but the roles themselves should sit with people inside your organisation.' },
  { q: 'What if we have foreign owners or directors?', a: 'Foreign ownership, control or influence does not automatically rule you out, but it must be disclosed and may affect the assessment. Raise it early so it can be managed as part of the application.' },
  { q: 'Do our subcontractors need DISP membership?', a: 'It depends on what they do. If subcontractors handle Defence information or access your systems, your contract or your own security plan may require them to meet set controls or hold membership. Check the requirements your prime passes down.' },
  { q: 'Can DISP membership be suspended or cancelled?', a: 'Yes. Defence can suspend or cancel membership if a member stops meeting the requirements, fails to report or does not cooperate with Defence. Keeping the program running after approval matters as much as getting it.' },
];
