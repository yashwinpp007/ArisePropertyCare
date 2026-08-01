export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTimeMinutes: number;
  quickAnswer: string;
  sections: BlogSection[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-carpets-be-professionally-cleaned",
    title: "How Often Should Carpets Be Professionally Cleaned?",
    excerpt:
      "Vacuuming only removes surface dirt. Here's how often Sydney homes and offices should book a professional carpet steam clean — and why it matters.",
    category: "Cleaning Tips",
    date: "2026-06-02",
    readTimeMinutes: 5,
    quickAnswer:
      "Most Sydney homes should have carpets professionally steam cleaned every 6–12 months. Households with pets, young children or allergy sufferers benefit from cleaning every 6 months, while low-traffic homes can often stretch to once a year.",
    sections: [
      {
        heading: "Why vacuuming alone isn't enough",
        paragraphs: [
          "Vacuuming removes loose surface dirt, but it can't reach the dust mites, allergens and embedded grime that settle deep in the carpet pile over time. Professional hot water extraction — commonly called steam cleaning — uses high-temperature water and commercial extraction to lift what regular vacuuming leaves behind.",
          "Over months of foot traffic, carpet fibres trap skin cells, pollen, pet dander and airborne dust. Left untreated, this buildup can affect indoor air quality and shorten the life of the carpet itself.",
        ],
      },
      {
        heading: "Recommended cleaning frequency",
        paragraphs: [
          "As a general rule for Sydney households:",
        ],
        list: [
          "Every 6 months — homes with pets, young children, or anyone with allergies or asthma",
          "Every 6–12 months — average family households with normal foot traffic",
          "Every 12 months — low-traffic homes, spare rooms or formal living areas",
          "Before every new tenancy — for landlords and property managers between leases",
        ],
      },
      {
        heading: "Signs your carpet needs cleaning sooner",
        paragraphs: [
          "Beyond the calendar, watch for visible traffic lane discolouration, persistent odours that return after vacuuming, or a noticeable increase in dust and allergy symptoms at home. Any of these are a sign it's time to book a clean regardless of when the last one happened.",
        ],
      },
      {
        heading: "What to expect from a professional clean",
        paragraphs: [
          "Arise Property Care's carpet cleaning service uses commercial-grade hot water extraction, with pre-treatment for stains and high-traffic zones before steam cleaning. Most rooms are dry within 3–6 hours using our fast-drying technique, so you're not left waiting days to use the space again.",
        ],
      },
    ],
    metaTitle: "How Often Should Carpets Be Professionally Cleaned? | Arise Property Care",
    metaDescription:
      "Learn how often Sydney homes and offices should book professional carpet steam cleaning, and the signs that mean it's time to book sooner.",
  },
  {
    slug: "end-of-lease-cleaning-checklist-sydney",
    title: "The Ultimate End of Lease Cleaning Checklist for Sydney Tenants",
    excerpt:
      "Everything Sydney tenants need to cover for a bond-back clean, room by room, based on real estate exit condition standards.",
    category: "End of Lease Guide",
    date: "2026-05-18",
    readTimeMinutes: 7,
    quickAnswer:
      "A bond-back end of lease clean covers every room to the same standard as the entry condition report — kitchen appliances, bathroom descaling, interior windows, skirting boards, and cupboard interiors are the areas most commonly flagged by property managers if missed.",
    sections: [
      {
        heading: "Why a standard clean isn't enough",
        paragraphs: [
          "Property managers assess your exit clean against the original entry condition report, not against how clean the property looks day-to-day. That means areas most households rarely touch — oven interiors, window tracks, skirting boards — are exactly where bond disputes tend to happen.",
        ],
      },
      {
        heading: "Kitchen",
        paragraphs: ["The kitchen is the single most scrutinised room on an exit report."],
        list: [
          "Oven interior, racks and rangehood degreased",
          "Stovetop, splashback and benchtops",
          "Inside and outside of all cupboards and drawers",
          "Sink, taps and dishwasher (if included)",
          "Exhaust fan and light fittings",
        ],
      },
      {
        heading: "Bathroom",
        paragraphs: ["Mould and soap scum buildup are the two most common issues found here."],
        list: [
          "Shower screen, tiles and grout descaled",
          "Toilet, vanity and mirror cleaned and sanitised",
          "Exhaust fan dust removed",
          "Mould treatment in silicone seals if present",
        ],
      },
      {
        heading: "Living areas and bedrooms",
        paragraphs: ["These rooms are usually the fastest to clean but easy to under-detail."],
        list: [
          "Skirting boards, light switches and door frames wiped down",
          "Wardrobe interiors vacuumed and wiped",
          "Carpets vacuumed or steam cleaned (check your lease for requirements)",
          "Interior windows, sills and tracks cleaned",
        ],
      },
      {
        heading: "Should you hire a professional?",
        paragraphs: [
          "Most Sydney tenants find it's more cost-effective — and less stressful — to book a professional end of lease clean than risk a bond deduction for a missed detail. Arise Property Care backs every end of lease clean with a 72-hour re-clean guarantee: if your agent flags anything on the condition report, we return and fix it at no charge.",
        ],
      },
    ],
    metaTitle: "End of Lease Cleaning Checklist Sydney | Arise Property Care",
    metaDescription:
      "A room-by-room end of lease cleaning checklist for Sydney tenants, covering the exact areas property managers check on exit condition reports.",
  },
  {
    slug: "office-cleaning-checklist",
    title: "Office Cleaning Checklist: Daily, Weekly and Monthly Tasks",
    excerpt:
      "What should actually be on your office cleaning scope of works? Here's how to structure daily, weekly and monthly tasks for a hygienic, presentable workplace.",
    category: "Office Cleaning",
    date: "2026-05-04",
    readTimeMinutes: 6,
    quickAnswer:
      "A well-run office cleaning schedule splits tasks into three tiers: daily tasks like bins, kitchens and high-touch surfaces; weekly tasks like floor care and glass cleaning; and monthly tasks like deep-dusting vents and detailed carpet care.",
    sections: [
      {
        heading: "Daily tasks",
        paragraphs: ["These directly affect hygiene and first impressions and shouldn't be skipped."],
        list: [
          "Bin removal and liner replacement",
          "Kitchen and breakroom bench and sink cleaning",
          "Bathroom cleaning and consumable restocking",
          "High-touch surface wipe-down (door handles, switches, shared equipment)",
          "Vacuuming high-traffic entry areas",
        ],
      },
      {
        heading: "Weekly tasks",
        paragraphs: ["Weekly servicing maintains presentation across the whole floor plan."],
        list: [
          "Full vacuuming and mopping of all areas",
          "Glass partition and mirror cleaning",
          "Desk and workstation dusting",
          "Boardroom and meeting room presentation check",
        ],
      },
      {
        heading: "Monthly tasks",
        paragraphs: ["These are easy to overlook but matter for long-term hygiene and air quality."],
        list: [
          "Air vent and light fitting dusting",
          "Detailed carpet spot treatment",
          "Skirting board and window sill detailing",
          "Deep clean of kitchen appliances (microwave, fridge)",
        ],
      },
      {
        heading: "Matching frequency to your office",
        paragraphs: [
          "Headcount and foot traffic should drive your schedule more than a generic template. A 10-person studio might only need cleaning twice a week, while a 100-person floor with client visitors often needs daily servicing. When you request a quote from Arise Property Care, we assess your space and recommend a realistic frequency — not the most expensive one.",
        ],
      },
    ],
    metaTitle: "Office Cleaning Checklist: Daily, Weekly, Monthly | Arise Property Care",
    metaDescription:
      "A practical office cleaning checklist broken into daily, weekly and monthly tasks to keep your Sydney workplace hygienic and presentable.",
  },
  {
    slug: "commercial-cleaning-standards-sydney-businesses",
    title: "Commercial Cleaning Standards: What Sydney Businesses Should Expect",
    excerpt:
      "From insurance to reporting, here's what a genuinely professional commercial cleaning contract should include — and the questions to ask before signing one.",
    category: "Commercial Cleaning",
    date: "2026-04-20",
    readTimeMinutes: 6,
    quickAnswer:
      "A professional commercial cleaning contract should include public liability insurance, police-checked staff, a documented scope of works, consistent scheduling, and a reporting or audit process — not just a verbal agreement on price and frequency.",
    sections: [
      {
        heading: "Insurance and vetting",
        paragraphs: [
          "Any commercial cleaning provider working in your business should carry comprehensive public liability insurance and conduct police checks on all staff. Ask for evidence of both before signing a contract — a reputable provider will have this ready to share.",
        ],
      },
      {
        heading: "A documented scope of works",
        paragraphs: [
          "Vague agreements lead to inconsistent results. A proper commercial cleaning scope of works lists exactly what's cleaned, how often, and to what standard — down to specific rooms and surfaces — so there's no ambiguity about what you're paying for.",
        ],
      },
      {
        heading: "Consistent scheduling and staffing",
        paragraphs: [
          "High staff turnover on your contract usually shows up as inconsistent quality. Ask whether the same cleaning team will be assigned to your site, and how scheduling changes (public holidays, staff leave) are handled.",
        ],
      },
      {
        heading: "Quality reporting",
        paragraphs: [
          "For multi-site or larger contracts especially, look for a provider offering digital service logs or regular quality audits, so facility managers have visibility over what was actually completed — not just an invoice at the end of the month.",
        ],
      },
      {
        heading: "What Arise Property Care includes as standard",
        paragraphs: [
          "Every commercial cleaning client receives a documented scope of works, consistent staffing where possible, and access to a digital service log with regular quality audits — all backed by full insurance and police-checked staff.",
        ],
      },
    ],
    metaTitle: "Commercial Cleaning Standards Sydney | Arise Property Care",
    metaDescription:
      "What every Sydney business should expect from a commercial cleaning contract — insurance, scope of works, staffing and quality reporting explained.",
  },
  {
    slug: "benefits-of-professional-cleaning",
    title: "5 Benefits of Professional Cleaning for Your Home or Business",
    excerpt:
      "Beyond a tidy space — the real, measurable reasons regular professional cleaning pays for itself at home and at work.",
    category: "Cleaning Tips",
    date: "2026-04-06",
    readTimeMinutes: 4,
    quickAnswer:
      "Professional cleaning improves indoor air quality, reduces allergens, extends the life of surfaces and carpets, saves significant time, and creates a stronger first impression for visitors, clients or prospective tenants.",
    sections: [
      {
        heading: "1. Better indoor air quality",
        paragraphs: [
          "Dust, pollen and pet dander accumulate in carpets, vents and soft furnishings. Regular professional cleaning — especially carpet steam cleaning — removes buildup that regular vacuuming and dusting miss.",
        ],
      },
      {
        heading: "2. Fewer allergens and less illness",
        paragraphs: [
          "High-touch surface disinfection and consistent hygiene standards reduce the spread of common allergens and germs, particularly valuable in offices, medical practices and households with young children.",
        ],
      },
      {
        heading: "3. Longer-lasting surfaces and carpets",
        paragraphs: [
          "Built-up dirt acts like sandpaper on carpet fibres and hard flooring over time. Routine professional cleaning protects your investment in flooring, benchtops and fixtures, extending their usable life.",
        ],
      },
      {
        heading: "4. Real time saved",
        paragraphs: [
          "A 3-bedroom home takes most people 3–4 hours to clean properly on a weekend. Outsourcing that time back gives families and business owners hours back every week for the things that actually need their attention.",
        ],
      },
      {
        heading: "5. A stronger first impression",
        paragraphs: [
          "Whether it's a client walking into your office or a prospective tenant inspecting a rental, presentation standards directly affect how a space — and the business or landlord behind it — is perceived.",
        ],
      },
    ],
    metaTitle: "5 Benefits of Professional Cleaning | Arise Property Care",
    metaDescription:
      "The real benefits of professional cleaning for Sydney homes and businesses — air quality, allergen reduction, surface longevity and more.",
  },
  {
    slug: "mould-prevention-tips-sydney-humidity",
    title: "Mould Prevention Tips for Sydney's Humid Climate",
    excerpt:
      "Sydney's humidity makes bathrooms, laundries and poorly ventilated rooms prone to mould. Here's how to prevent it before it becomes a bigger problem.",
    category: "Mould Prevention",
    date: "2026-03-22",
    readTimeMinutes: 5,
    quickAnswer:
      "Preventing mould in Sydney homes comes down to controlling moisture: ventilate bathrooms and laundries during and after use, fix leaks promptly, wipe down wet surfaces, and have silicone seals and grout professionally cleaned before mould has a chance to establish.",
    sections: [
      {
        heading: "Why Sydney homes are prone to mould",
        paragraphs: [
          "Sydney's humid, temperate climate — especially over summer — creates ideal conditions for mould in poorly ventilated bathrooms, laundries and window sills. Once established in grout or silicone seals, it's far harder to remove than to prevent.",
        ],
      },
      {
        heading: "Ventilation matters most",
        paragraphs: [
          "Run exhaust fans during and for at least 20 minutes after showers. Open windows where possible, and avoid drying clothes indoors in enclosed rooms without airflow — it's one of the most common causes of household mould in units and apartments.",
        ],
      },
      {
        heading: "Everyday habits that help",
        paragraphs: ["Small habits make a measurable difference over months:"],
        list: [
          "Wipe down shower screens and tiles after use",
          "Fix dripping taps and leaking seals promptly",
          "Clean window condensation regularly, especially in winter",
          "Avoid overfilling wardrobes and cupboards to allow airflow",
        ],
      },
      {
        heading: "When to call in professional cleaning",
        paragraphs: [
          "If mould has already established in grout, silicone seals or fabric, household products often aren't enough for a full, lasting treatment. Arise Property Care's deep cleaning and end of lease services include bathroom descaling and mould treatment in affected seals as standard — book a clean before the problem spreads further.",
        ],
      },
    ],
    metaTitle: "Mould Prevention Tips for Sydney Homes | Arise Property Care",
    metaDescription:
      "Practical mould prevention tips for Sydney's humid climate, plus when it's time to call in professional cleaning for bathroom and laundry mould.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
