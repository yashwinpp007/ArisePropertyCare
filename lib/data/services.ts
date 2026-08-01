export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  image: string;
  tagline: string;
  heroSubtitle: string;
  quickAnswer: string;
  description: string[];
  features: string[];
  idealFor: string[];
  faqs: ServiceFaq[];
  metaTitle: string;
  metaDescription: string;
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    name: "Residential Cleaning",
    shortName: "Residential",
    icon: "Home",
    image: "/photos/service-residential.jpg",
    tagline: "Reliable house cleaning for busy Sydney households.",
    heroSubtitle:
      "Recurring and one-off house cleaning across Sydney, tailored to your home and schedule.",
    quickAnswer:
      "Arise Property Care provides fully insured residential house cleaning across Sydney from $45 per hour, with weekly, fortnightly, monthly and one-off visits available. Every clean includes kitchens, bathrooms, living areas and bedrooms using eco-friendly, family-safe products.",
    description: [
      "Our residential cleaning service is built around the way real Sydney households actually live — school runs, home offices, pets and weekend guests included. You choose the frequency, we bring a consistent, police-checked cleaning team who get to know your home over time.",
      "Every visit follows a detailed room-by-room checklist covering kitchens, bathrooms, living areas, bedrooms and high-touch surfaces, so nothing gets missed whether it's your first clean or your fiftieth.",
    ],
    features: [
      "Kitchen degreasing, splashback and appliance exteriors",
      "Bathroom sanitisation, tapware and grout detailing",
      "Dusting, vacuuming and mopping of all living areas",
      "Bedroom tidy, linen change on request",
      "Eco-friendly, non-toxic products safe for kids and pets",
      "Consistent cleaner assigned to your home where possible",
    ],
    idealFor: [
      "Busy families and professionals",
      "Weekly, fortnightly or monthly recurring cleans",
      "Pre- and post-event tidy-ups",
      "Elderly or NDIS-supported households",
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Sydney?",
        answer:
          "Standard residential cleaning with Arise Property Care starts from $45 per hour, with most 2–3 bedroom homes taking 2–3 hours per visit. Final pricing depends on property size, condition and frequency — request a free, no-obligation quote for an exact figure.",
      },
      {
        question: "Do I need to be home during the clean?",
        answer:
          "No. Many clients provide secure key access, a lockbox code or building entry instructions and go about their day. Our cleaners are police-checked and fully insured, and we always lock up and notify you when the job is complete.",
      },
      {
        question: "Do you bring your own equipment and products?",
        answer:
          "Yes, our teams arrive fully equipped with commercial-grade, eco-friendly cleaning products and equipment at no extra cost. If you prefer we use specific products already in your home, just let us know when booking.",
      },
      {
        question: "Can I set up a recurring cleaning schedule?",
        answer:
          "Yes. Weekly, fortnightly and monthly recurring cleans are our most popular option and include a small loyalty discount. You can pause, reschedule or adjust frequency at any time with 24 hours' notice.",
      },
    ],
    metaTitle: "Residential House Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Trusted residential house cleaning across Sydney. Weekly, fortnightly or one-off cleans from fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["deep-cleaning", "carpet-cleaning", "window-cleaning"],
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial",
    icon: "Building2",
    image: "/photos/service-commercial.jpg",
    tagline: "Scheduled cleaning for retail, hospitality and industrial sites.",
    heroSubtitle:
      "Flexible after-hours and scheduled commercial cleaning for businesses across Sydney.",
    quickAnswer:
      "Arise Property Care delivers commercial cleaning for retail stores, warehouses, gyms, hospitality venues and industrial sites across Sydney, with flexible after-hours scheduling, fully insured teams and customised checklists to suit your industry and compliance requirements.",
    description: [
      "Every commercial space has different traffic patterns, compliance obligations and presentation standards. We build a cleaning scope around your business — whether that's a single retail fit-out or a multi-site contract — and deliver it on a schedule that doesn't interrupt trading hours.",
      "Our supervisors run regular quality audits and keep a digital service log, so facility managers always have visibility over what was cleaned, when, and by whom.",
    ],
    features: [
      "After-hours and weekend scheduling available",
      "Custom cleaning checklists per site",
      "Consumable restocking (paper, soap, sanitiser)",
      "Floor care: mopping, buffing and scrubbing",
      "Waste and recycling management",
      "Digital service logs and quality audits",
    ],
    idealFor: [
      "Retail stores and shopping strips",
      "Warehouses and industrial facilities",
      "Gyms and fitness studios",
      "Hospitality venues",
    ],
    faqs: [
      {
        question: "Can you clean outside our trading hours?",
        answer:
          "Yes, after-hours, early-morning and weekend commercial cleaning is standard practice for our team, so your business is presentation-ready before staff or customers arrive without any disruption to trade.",
      },
      {
        question: "Do you offer contracts for multiple sites?",
        answer:
          "Yes, we manage multi-site commercial cleaning contracts across Sydney with a single point of contact, consolidated invoicing and consistent quality standards across every location.",
      },
      {
        question: "Are your commercial cleaners insured?",
        answer:
          "All Arise Property Care cleaners are covered by comprehensive public liability insurance and are police checked, so your business, staff and customers are fully protected.",
      },
    ],
    metaTitle: "Commercial Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Fully insured commercial cleaning across Sydney for retail, warehouses, gyms and hospitality. After-hours scheduling available. Request a free quote.",
    relatedSlugs: ["office-cleaning", "strata-cleaning", "builders-cleaning"],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office",
    icon: "Briefcase",
    image: "/photos/service-office.jpg",
    tagline: "Daily, weekly or fortnightly office cleaning contracts.",
    heroSubtitle:
      "Keep your workplace spotless with a scheduled office cleaning plan built around your business.",
    quickAnswer:
      "Arise Property Care provides office cleaning across Sydney on daily, weekly or fortnightly schedules, covering workstations, kitchens, bathrooms and communal areas. Most small-to-medium offices are professionally cleaned 2–3 times per week to maintain hygiene and presentation standards.",
    description: [
      "A clean office affects staff wellbeing, client impressions and even sick-day rates. We design a cleaning frequency and scope around your headcount, floor plan and industry — from boutique studios to multi-floor corporate tenancies.",
      "Our teams work discreetly around your business hours or after close, following a documented checklist that covers everything from kitchenette hygiene to boardroom presentation.",
    ],
    features: [
      "Workstation, desk and communal area cleaning",
      "Kitchen and breakroom sanitisation",
      "Bathroom cleaning and consumable restocking",
      "Glass partition and mirror cleaning",
      "Bin removal and recycling",
      "Boardroom presentation before meetings",
    ],
    idealFor: [
      "Corporate offices and coworking spaces",
      "Professional services firms",
      "Small business tenancies",
      "Multi-floor commercial buildings",
    ],
    faqs: [
      {
        question: "How often should offices be professionally cleaned?",
        answer:
          "Most Sydney offices are cleaned 2–3 times per week to maintain hygiene standards, though high-traffic offices or medical-adjacent workplaces often require daily servicing. We'll recommend a frequency based on staff numbers and foot traffic during your free quote.",
      },
      {
        question: "Will cleaning disrupt our working day?",
        answer:
          "No, most office cleaning is scheduled early morning, evenings or on weekends specifically to avoid disrupting staff and client meetings.",
      },
      {
        question: "Can you match our existing supplier's checklist?",
        answer:
          "Yes, if you're switching providers we're happy to review your existing scope of works and match or improve on it during onboarding.",
      },
    ],
    metaTitle: "Office Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Professional office cleaning across Sydney with flexible daily, weekly or fortnightly contracts. Fully insured, police-checked cleaners. Free quote available.",
    relatedSlugs: ["commercial-cleaning", "medical-centre-cleaning", "strata-cleaning"],
  },
  {
    slug: "end-of-lease-cleaning",
    name: "End of Lease Cleaning",
    shortName: "End of Lease",
    icon: "KeyRound",
    image: "/photos/service-end-of-lease.jpg",
    tagline: "Bond-back guaranteed vacate cleaning across Sydney.",
    heroSubtitle:
      "Comprehensive move-out cleaning designed to meet real estate and landlord inspection standards.",
    quickAnswer:
      "An end of lease clean with Arise Property Care typically takes 3–6 hours for a 2-bedroom unit and 5–8 hours for a 3–4 bedroom house, and includes a bond-back clean guarantee — if your agent flags an issue within 72 hours, we return to re-clean at no charge.",
    description: [
      "Getting your bond back shouldn't depend on guesswork. Our end of lease cleans follow the exact standard used in real estate exit condition reports, covering everything from oven interiors to skirting boards, tracks and cupboard interiors.",
      "We work to your settlement or inspection deadline and provide a checklist-based service so you — and your property manager — know precisely what's been covered.",
    ],
    features: [
      "Full kitchen detail, including oven and rangehood",
      "Bathroom descaling, mould treatment and grout cleaning",
      "Interior window and track cleaning",
      "Skirting boards, light switches and door frames",
      "Wardrobe, cupboard and drawer interiors",
      "Optional carpet steam cleaning add-on",
    ],
    idealFor: [
      "Tenants vacating a rental property",
      "Landlords preparing for new tenants",
      "Property managers coordinating exit cleans",
      "Real estate agencies",
    ],
    faqs: [
      {
        question: "How long does an end of lease clean take?",
        answer:
          "A 1–2 bedroom apartment typically takes 3–5 hours, while a 3–4 bedroom house takes 5–8 hours. Exact duration depends on the property's size and condition — we confirm timing when you book.",
      },
      {
        question: "Do you guarantee the bond back?",
        answer:
          "We provide a 72-hour re-clean guarantee: if your property manager identifies a cleaning issue on the exit condition report within 72 hours of your clean, we return and fix it at no extra cost.",
      },
      {
        question: "Is carpet steam cleaning included?",
        answer:
          "Carpet steam cleaning is available as an add-on and is highly recommended for lease agreements that require professional carpet cleaning evidence — we can provide an invoice for your property manager.",
      },
    ],
    metaTitle: "End of Lease Cleaning Sydney | Bond Back Guarantee",
    metaDescription:
      "End of lease cleaning across Sydney with a 72-hour bond-back guarantee. Full kitchen, bathroom, carpet and window cleaning. Get a free quote today.",
    relatedSlugs: ["carpet-cleaning", "deep-cleaning", "window-cleaning"],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortName: "Deep Clean",
    icon: "Sparkles",
    image: "/photos/service-deep-clean.jpg",
    tagline: "Intensive top-to-bottom cleaning for homes and offices.",
    heroSubtitle:
      "A thorough reset for properties that need more than a standard clean — spring cleans, post-renovation and first-time cleans.",
    quickAnswer:
      "Deep cleaning goes beyond a standard clean to cover areas not touched in routine visits — inside appliances, behind furniture, skirting boards, light fittings and built-up grime in bathrooms and kitchens. It's recommended every 3–6 months or before starting a recurring cleaning plan.",
    description: [
      "A deep clean is the reset point — often the first service we deliver before starting a recurring plan, after a renovation, or simply when a property needs more attention than time allows for.",
      "We work systematically through every room, addressing built-up grime, hard-to-reach areas and detail work that a standard clean doesn't cover, leaving the property genuinely reset.",
    ],
    features: [
      "Inside oven, fridge and cabinet detailing",
      "Behind and under furniture and appliances",
      "Skirting boards, light switches and vents",
      "Bathroom descaling and grout restoration",
      "Window sills, tracks and interior glass",
      "Full dust and cobweb removal, ceiling to floor",
    ],
    idealFor: [
      "Seasonal spring cleans",
      "Post-renovation or post-construction resets",
      "First clean before a recurring schedule",
      "Pre-sale or pre-listing presentation",
    ],
    faqs: [
      {
        question: "How is a deep clean different from a standard clean?",
        answer:
          "A standard clean maintains a property's presentation, while a deep clean addresses built-up grime and areas outside the normal rotation — inside appliances, behind furniture, grout and detailed edge work. Most clients book a deep clean before starting a recurring service.",
      },
      {
        question: "How often should I book a deep clean?",
        answer:
          "We recommend a deep clean every 3–6 months, or seasonally, even if you have a regular maintenance clean in place, to keep hidden buildup under control.",
      },
    ],
    metaTitle: "Deep Cleaning Services Sydney | Arise Property Care",
    metaDescription:
      "Intensive deep cleaning for homes and offices across Sydney — appliances, grout, skirting boards and more. Book a thorough reset clean today.",
    relatedSlugs: ["residential-cleaning", "carpet-cleaning", "end-of-lease-cleaning"],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpet",
    icon: "Waves",
    image: "/photos/service-carpet.jpg",
    tagline: "Professional steam and stain treatment for carpets and rugs.",
    heroSubtitle:
      "Hot water extraction carpet cleaning that lifts dirt, allergens and stains without over-wetting.",
    quickAnswer:
      "Arise Property Care uses commercial hot water extraction (steam cleaning) to remove embedded dirt, allergens and stains from carpets, with most rooms dry within 3–6 hours. We recommend professional carpet cleaning every 6–12 months for households, or as required for end of lease exits.",
    description: [
      "Vacuuming only removes surface debris — professional hot water extraction lifts embedded dirt, dust mites and allergens from deep within the carpet pile, extending its life and improving indoor air quality.",
      "We pre-treat high-traffic areas and stains before steam cleaning, and use fast-drying techniques so rooms are back in use the same day in most cases.",
    ],
    features: [
      "Commercial-grade hot water extraction",
      "Pre-treatment for stains and high-traffic zones",
      "Pet odour and stain treatment available",
      "Fast-drying technique (3–6 hours typical)",
      "Rug and upholstery cleaning available",
      "End of lease compliant service with invoice",
    ],
    idealFor: [
      "Households with pets or allergies",
      "End of lease carpet requirements",
      "Offices and commercial carpeted areas",
      "Pre-sale presentation",
    ],
    faqs: [
      {
        question: "How often should carpets be professionally cleaned?",
        answer:
          "For households, we recommend professional carpet cleaning every 6–12 months to remove embedded dirt and allergens vacuuming can't reach. Homes with pets or young children often benefit from cleaning every 6 months.",
      },
      {
        question: "How long does carpet take to dry?",
        answer:
          "Most carpets are dry within 3–6 hours using our fast-drying hot water extraction method, though this can vary with humidity and carpet thickness. We recommend good ventilation after the clean.",
      },
    ],
    metaTitle: "Carpet Cleaning Sydney | Steam Cleaning Experts",
    metaDescription:
      "Professional carpet steam cleaning across Sydney for homes, offices and end of lease. Stain and pet odour treatment available. Get a free quote.",
    relatedSlugs: ["end-of-lease-cleaning", "residential-cleaning", "deep-cleaning"],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    icon: "PanelsTopLeft",
    image: "/photos/service-window.jpg",
    tagline: "Streak-free interior and exterior window cleaning.",
    heroSubtitle:
      "Crystal-clear glass, frames and tracks for homes, offices and multi-storey buildings.",
    quickAnswer:
      "Arise Property Care provides streak-free interior and exterior window cleaning for houses, offices and multi-storey buildings across Sydney, including frames, sills and tracks. Standard residential window cleaning is typically completed within 1–3 hours depending on the number of windows.",
    description: [
      "Clean windows change how natural light moves through a property. Our window cleaners use purified water-fed pole systems for exterior glass and traditional squeegee techniques indoors, leaving glass streak-free without harsh chemical residue.",
      "We service single homes through to multi-storey commercial buildings, and can combine window cleaning with a broader clean for better value.",
    ],
    features: [
      "Interior and exterior glass cleaning",
      "Frame, sill and track detailing",
      "Purified water-fed pole system for exteriors",
      "Flyscreen cleaning available",
      "Multi-storey and commercial building access",
      "Streak-free finish guarantee",
    ],
    idealFor: [
      "Residential homes and townhouses",
      "Office buildings and shopfronts",
      "Strata and multi-storey properties",
      "Pre-sale and rental presentation",
    ],
    faqs: [
      {
        question: "Do you clean windows on multi-storey buildings?",
        answer:
          "Yes, we service multi-storey homes and commercial buildings using appropriate access equipment and purified water-fed pole systems, in line with relevant safety standards.",
      },
      {
        question: "Can window cleaning be bundled with another service?",
        answer:
          "Yes, window cleaning is commonly bundled with end of lease cleans, deep cleans or recurring residential and commercial cleaning contracts for better overall value.",
      },
    ],
    metaTitle: "Window Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Streak-free interior and exterior window cleaning for homes, offices and multi-storey buildings across Sydney. Frames, sills and tracks included.",
    relatedSlugs: ["residential-cleaning", "commercial-cleaning", "end-of-lease-cleaning"],
  },
  {
    slug: "builders-cleaning",
    name: "Builders Cleaning",
    shortName: "Builders Clean",
    icon: "HardHat",
    image: "/photos/service-builders.jpg",
    tagline: "Post-construction cleaning for handover-ready properties.",
    heroSubtitle:
      "Dust, debris and residue removal after construction, renovation or fit-out work.",
    quickAnswer:
      "Builders cleaning removes construction dust, adhesive residue, paint spatter and debris left after a build, renovation or fit-out, preparing the property for handover or occupation. Arise Property Care typically completes a builders clean in two stages: a rough clean followed by a final detail clean.",
    description: [
      "New builds and renovations leave behind fine dust, adhesive residue, paint overspray and packaging debris that standard cleaning isn't equipped for. Our builders cleaning teams handle both the initial rough clean and the final presentation clean before handover.",
      "We coordinate directly with builders, project managers and site supervisors to fit cleaning into your handover timeline without holding up occupation.",
    ],
    features: [
      "Construction dust and debris removal",
      "Adhesive, paint and sticker residue removal",
      "Window and glass cleaning post-construction",
      "Cabinet, fixture and fitting detail clean",
      "Floor scrubbing and polishing",
      "Two-stage rough and final clean options",
    ],
    idealFor: [
      "Builders and construction companies",
      "Renovation and fit-out projects",
      "Property developers",
      "New home handovers",
    ],
    faqs: [
      {
        question: "What is included in a builders clean?",
        answer:
          "A builders clean removes construction dust, adhesive and paint residue, packaging debris and fine particles from all surfaces, fixtures, cabinetry and glass, preparing the property for final handover or occupation.",
      },
      {
        question: "Can you work to a tight handover deadline?",
        answer:
          "Yes, we regularly coordinate with builders and site managers to schedule cleaning around handover dates, including short-notice bookings where required.",
      },
    ],
    metaTitle: "Builders Cleaning Sydney | Post-Construction Clean",
    metaDescription:
      "Post-construction and builders cleaning across Sydney for new builds, renovations and fit-outs. Rough and final clean stages available.",
    relatedSlugs: ["deep-cleaning", "commercial-cleaning", "window-cleaning"],
  },
  {
    slug: "strata-cleaning",
    name: "Strata Cleaning",
    shortName: "Strata",
    icon: "Building",
    image: "/photos/service-strata.jpg",
    tagline: "Common area cleaning contracts for strata and body corporate.",
    heroSubtitle:
      "Reliable, scheduled cleaning for lobbies, stairwells, car parks and shared facilities.",
    quickAnswer:
      "Arise Property Care provides scheduled strata cleaning for apartment buildings and body corporate common areas across Sydney, including lobbies, stairwells, car parks, corridors and shared facilities, with reporting available for strata managers and committees.",
    description: [
      "Common areas are the first impression for residents, buyers and visitors — and a routine maintenance obligation for strata committees. We deliver scheduled, reliable cleaning contracts tailored to your building's foot traffic and facilities.",
      "Our teams work with strata managers and building committees to set a scope of works, service frequency and reporting cadence that fits budget and compliance needs.",
    ],
    features: [
      "Lobby, stairwell and corridor cleaning",
      "Car park sweeping and pressure washing",
      "Bin room and waste area management",
      "Glass entry doors and directory cleaning",
      "Handrail and high-touch surface sanitisation",
      "Reporting for strata managers and committees",
    ],
    idealFor: [
      "Apartment buildings and strata schemes",
      "Body corporate committees",
      "Residential complexes",
      "Mixed-use developments",
    ],
    faqs: [
      {
        question: "Can you provide a quote directly to our strata manager?",
        answer:
          "Yes, we regularly liaise directly with strata managers and committees to scope, quote and report on common area cleaning contracts, and can attend committee meetings if required.",
      },
      {
        question: "How often are common areas typically cleaned?",
        answer:
          "This depends on building size and foot traffic — most mid-size apartment buildings are serviced 2–5 times per week, while larger complexes may require daily servicing.",
      },
    ],
    metaTitle: "Strata Cleaning Sydney | Body Corporate Cleaning",
    metaDescription:
      "Scheduled strata and body corporate cleaning across Sydney for lobbies, stairwells, car parks and common areas. Request a strata cleaning quote.",
    relatedSlugs: ["commercial-cleaning", "window-cleaning", "office-cleaning"],
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb & Short-Stay Cleaning",
    shortName: "Airbnb",
    icon: "BedDouble",
    image: "/photos/service-airbnb.jpg",
    tagline: "Fast, reliable turnaround cleaning between guest stays.",
    heroSubtitle:
      "Same-day turnaround cleaning that keeps your short-stay listing five-star ready.",
    quickAnswer:
      "Arise Property Care offers same-day turnaround cleaning for Airbnb and short-stay properties across Sydney, including linen changes, restocking and presentation styling, typically completed within 2–3 hours between guest checkout and the next check-in.",
    description: [
      "Guest reviews live and die on presentation. We work to tight, guest-driven turnaround windows, resetting your property between stays so it's photo-ready and consistent for every arrival.",
      "Optional add-ons include linen laundering, consumable restocking (toiletries, coffee, welcome items) and light styling to match your listing photos.",
    ],
    features: [
      "Same-day checkout-to-checkin turnaround",
      "Bed making and linen change",
      "Bathroom and kitchen full reset",
      "Consumable and toiletry restocking",
      "Presentation styling to match listing photos",
      "Damage and maintenance issue reporting",
    ],
    idealFor: [
      "Airbnb and Stayz hosts",
      "Short-stay property managers",
      "Serviced apartment operators",
      "Holiday rental owners",
    ],
    faqs: [
      {
        question: "Can you guarantee same-day turnaround?",
        answer:
          "Yes, same-day turnaround between guest checkout and the next check-in is our standard service for short-stay properties, and we coordinate directly with your booking calendar or property manager.",
      },
      {
        question: "Do you supply linen and toiletries?",
        answer:
          "We can manage linen laundering and toiletry restocking as an add-on, or work with linen and supplies you already have on-site — whichever suits your operation.",
      },
    ],
    metaTitle: "Airbnb Cleaning Sydney | Short-Stay Turnover Cleaning",
    metaDescription:
      "Same-day Airbnb and short-stay turnaround cleaning across Sydney. Linen changes, restocking and presentation styling. Book your cleaning partner today.",
    relatedSlugs: ["residential-cleaning", "carpet-cleaning", "window-cleaning"],
  },
  {
    slug: "ndis-cleaning",
    name: "NDIS Cleaning",
    shortName: "NDIS",
    icon: "HeartHandshake",
    image: "/photos/service-ndis.jpg",
    tagline: "Respectful, reliable cleaning support for NDIS participants.",
    heroSubtitle:
      "Household cleaning and domestic assistance for NDIS participants across Sydney.",
    quickAnswer:
      "Arise Property Care provides household cleaning support for NDIS participants across Sydney as part of Core Supports for household tasks, delivered by police-checked cleaners experienced in working respectfully in participants' homes, on a schedule agreed with the participant or support coordinator.",
    description: [
      "We work with NDIS participants, families, support coordinators and plan managers to provide consistent, respectful household cleaning support that fits within a participant's plan and daily routine.",
      "Our cleaners are police checked and briefed on working sensitively in a participant's home, communicating clearly and keeping to agreed routines and preferences.",
    ],
    features: [
      "Household cleaning aligned to Core Supports",
      "Consistent, familiar cleaner where possible",
      "Flexible scheduling around participant routine",
      "Coordination with support coordinators and plan managers",
      "Police-checked, experienced support staff",
      "Invoicing compatible with plan-managed and self-managed funding",
    ],
    idealFor: [
      "NDIS participants and their families",
      "Support coordinators",
      "Plan managers",
      "Supported independent living (SIL) homes",
    ],
    faqs: [
      {
        question: "Can Arise Property Care invoice my plan manager directly?",
        answer:
          "Yes, we can invoice plan managers directly for plan-managed participants, or provide compliant invoices for self-managed participants to submit to the NDIA.",
      },
      {
        question: "Do your cleaners have experience working with NDIS participants?",
        answer:
          "Yes, our team is briefed on respectful, participant-led household support, and we're happy to introduce a consistent cleaner to build familiarity and trust over time.",
      },
    ],
    metaTitle: "NDIS Cleaning Services Sydney | Arise Property Care",
    metaDescription:
      "NDIS household cleaning support across Sydney. Police-checked cleaners, flexible scheduling and plan-managed invoicing. Get in touch to discuss your plan.",
    relatedSlugs: ["residential-cleaning", "deep-cleaning", "medical-centre-cleaning"],
  },
  {
    slug: "medical-centre-cleaning",
    name: "Medical Centre Cleaning",
    shortName: "Medical",
    icon: "Stethoscope",
    image: "/photos/service-medical.jpg",
    tagline: "Compliant hygiene standards for medical and allied health sites.",
    heroSubtitle:
      "Infection-control-aware cleaning for medical centres, clinics and allied health practices.",
    quickAnswer:
      "Arise Property Care provides medical centre cleaning across Sydney following infection-control-aware protocols for clinics, allied health practices and consulting rooms, with daily or after-hours scheduling and colour-coded equipment to prevent cross-contamination.",
    description: [
      "Medical and allied health environments carry hygiene obligations well beyond general commercial cleaning. Our teams follow infection-control-aware cleaning protocols, using colour-coded equipment and hospital-grade disinfectants suited to clinical settings.",
      "We work around appointment schedules with early-morning, evening or after-hours servicing to keep waiting rooms, consulting rooms and shared facilities presentation-ready and hygienic.",
    ],
    features: [
      "Infection-control-aware cleaning protocols",
      "Colour-coded equipment to prevent cross-contamination",
      "Waiting room and reception presentation",
      "Consulting room and treatment area cleaning",
      "High-touch surface disinfection",
      "Flexible before/after-hours scheduling",
    ],
    idealFor: [
      "Medical centres and GP clinics",
      "Allied health and physiotherapy practices",
      "Dental practices",
      "Specialist consulting suites",
    ],
    faqs: [
      {
        question: "Are your cleaners trained in infection control?",
        answer:
          "Our medical centre cleaning teams follow infection-control-aware protocols including colour-coded equipment and hospital-grade disinfectants appropriate for clinical environments.",
      },
      {
        question: "Can cleaning be scheduled outside clinic hours?",
        answer:
          "Yes, most medical centre cleaning is scheduled before opening, in the evening after the last appointment, or overnight to avoid any disruption to patients and staff.",
      },
    ],
    metaTitle: "Medical Centre Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Infection-control-aware medical centre and clinic cleaning across Sydney. Flexible scheduling for GP clinics, allied health and dental practices.",
    relatedSlugs: ["office-cleaning", "commercial-cleaning", "ndis-cleaning"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
