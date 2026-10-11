# SEO transition: move head tags to the Wix dashboard

Status: to do before go-live. Owner: site admin.

Wix injects title, meta description, canonical and social (OG) tags on main pages from the dashboard. `site/src/layouts/Base.astro` sets the same tags in code, so each page renders two of each. The dashboard should own them for main pages.
Source: Wix docs, "About SEO Support" (Wix-managed headless, Astro integration). Recheck before relying on it; the platform changes.

## Step 1: enter page SEO in the dashboard (no code)
Wix Dashboard > SEO & GEO > SEO Settings > Main Pages. For each page below, open it and set the title tag and meta description. Leave "Let search engines index this page" on, except where noted.
The pages appear there only after the site has been built and published once with the current code.

| Route | Title tag (current) | Meta description (current) | Fix before entering |
|---|---|---|---|
| `/` | integPRO \| Cost Effective ISO & DISP Certification | integPRO simplifies management systems: ISO 9001, 14001, 45001, 27001, 13485 and DISP consulting, auditing, documentation and training across Australia. | |
| `/about-us-iso-team` | ISO Certification and Integrated Management Systems \| integPRO Services | Discover expert support for ISO certifications and integrated management systems. Explore how integPRO can help your business succeed. | Same as `/iso-disp-services`: write an About-specific title and description |
| `/iso-disp-services` | ISO Certification and Integrated Management Systems \| integPRO Services | Discover expert support for ISO certifications and integrated management systems. Explore how integPRO can help your business succeed. | |
| `/iso-service-australia` | ISO \| integPRO | Streamline compliance with expert ISO auditing, gap analysis, and integrated management systems support. Boost efficiency, reduce risk, Partner with integPRO. | Title too thin; "Partner" should be lowercase after a comma |
| `/iso-9001-compliance-certification-sydney` | ISO 9001 Compliance & Certification Sydn \| integPRO | Improve your business performance with ISO 9001 certification services in Sydney. integPRO provides expert quality management system consulting, compliance support, audits, and certification assistance for Australian businesses. | Title truncated ("Sydn"); description over ~160 characters |
| `/iso-14001-compliance-certification` | ISO 14001 Environmental Management \| integPRO | ISO 14001 environmental management consulting for Australian businesses. Reduce costs, manage risk, improve compliance. Talk to an expert today. | |
| `/iso-45001-occupational-health-safety` | ISO 45001 OH&S Certification for Austral \| integPRO | Achieve ISO 45001 compliance and build a safer workplace. Expert OH&S management system consulting for Australian businesses. Book a free consultation. | Title truncated ("Austral") |
| `/iso-27001-information-security-management-system` | ISO 27001 Compliance & Information \| integPRO | ISO 27001 certification services in Australia. Implement an Information Security Management System (ISMS), improve cybersecurity, and protect business information. | Title incomplete ("Information …") |
| `/iso-13485-medical-devices-quality-management-system` | ISO 13485 Medical Devices Quality Manage \| integPRO | ISO 13485 certification and consulting for Australian medical device businesses. Build a compliant QMS, manage risk, and meet TGA requirements. | Title truncated ("Manage") |
| `/medical-iso` | Medical Device iso \| integPRO | Specialised ISO 13485 consulting for medical device manufacturers – ensure TGA & EU MDR compliance, streamlined QMS implementation, and first-time certification success. | "iso" → "ISO" |
| `/disp` | DISP Certification for Australian Defence Contractors \| integPRO | DISP compliance for defence contractors. Expert guidance on Defence Industry Security Program. ISO 27001 + DISP integration. Win defence contracts confidently. Free consultation. | Description over ~160 characters |
| `/industries` | Industries \| integPRO | Discover integPRO's compliance solutions for renewable energy standards, ensuring efficiency and standards adherence. | Description mentions only renewable energy; page covers all industries |
| `/free-consultation` | Contact Us \| Free Business Consultation for ISO Certification - integPRO | Discover expert ISO consulting and auditing services at integPRO. Book your free business consultation today to achieve ISO certification! | |
| `/privacy-policy` | Privacy Policy \| integPRO | Explore integPRO's privacy policy outlining our commitment to data protection while offering expert ISO consulting and auditing services across Australia. Trust us for secure, compliant, and reliable management systems solutions. | Description over ~160 characters |
| `/blog` | Explore What is ISO with integPRO \| Academic Insights and Strategies | Discover what is iso and how it enhances compliance and performance with integPRO. Explore insights and tips on ISO standards. | "what is iso" → "what ISO is"; "Academic" reads oddly |

Also in SEO Settings:
- Social share: set the default share image and confirm OG title/description per page.
- Robots.txt editor: review contents; keep the sitemap line.
- Site-wide: indexability on.
- Business info (Settings > Business Info): name and address, so Wix generates `LocalBusiness`/`WebSite` structured data on the home page.

## Step 2: remove the duplicate tags from code (ask Claude/dev)
After Step 1 is saved:
- In `site/src/layouts/Base.astro`, remove `<title>`, `meta name="description"`, `link rel="canonical"` and the `og:*` tags for main pages.
- Keep code-rendered tags on item pages (`/post/[slug]`, `/blog/categories/[slug]`, `/blog/page/[page]`); Wix does not inject them there. Move these to the `@wix/seo` package per the Wix doc "Add SEO Support to Item Pages".
- Pick one sitemap: Wix `/sitemap.xml` (recommended) and remove `@astrojs/sitemap` from `astro.config.mjs`, or keep it and submit only `/sitemap-index.xml`.

## Step 3: verify on the live site
- View source on each route: exactly one `<title>`, one description, one canonical. Wix-injected tags carry `wix-seo-tag="true"`.
- `/robots.txt` and `/sitemap.xml` load.
- Google Rich Results Test on the home page shows `LocalBusiness`.
