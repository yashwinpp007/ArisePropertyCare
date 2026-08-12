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
    name: "Regular Home Cleaning",
    shortName: "Regular Home",
    icon: "Home",
    image: "/photos/service-residential.jpg",
    tagline: "Reliable, recurring house cleaning for busy Sydney households.",
    heroSubtitle:
      "Consistent, recurring house cleaning across Sydney, tailored to your home and schedule so mess never gets the chance to build up.",
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
    metaTitle: "Regular Home Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Trusted regular home cleaning across Sydney. Weekly, fortnightly or one-off cleans from fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["once-off-cleaning", "deep-cleaning", "carpet-cleaning"],
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
    name: "Offices & Corporate Buildings Cleaning",
    shortName: "Offices & Corporate",
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
    metaTitle: "Offices & Corporate Buildings Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Professional office and corporate building cleaning across Sydney with flexible daily, weekly or fortnightly contracts. Fully insured, police-checked cleaners.",
    relatedSlugs: ["commercial-cleaning", "medical-centre-cleaning", "government-buildings-cleaning"],
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
    name: "Deep Cleaning & Spring Cleaning",
    shortName: "Deep Clean & Spring",
    icon: "Sparkles",
    image: "/photos/service-deep-clean.jpg",
    tagline: "Intensive top-to-bottom cleaning and seasonal spring cleans.",
    heroSubtitle:
      "A thorough reset for properties that need more than a standard clean — seasonal spring cleans, post-renovation resets and first-time cleans.",
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
      {
        question: "Is spring cleaning different from a deep clean?",
        answer:
          "Spring cleaning is essentially a deep clean timed to the season — it uses the same thorough, room-by-room process to remove winter buildup, dust and allergens and leave your home genuinely refreshed, not just tidied.",
      },
    ],
    metaTitle: "Deep Cleaning & Spring Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Intensive deep cleaning and spring cleaning for Sydney homes and offices — appliances, grout, skirting boards and more. Book a thorough reset clean today.",
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
      "NDIS household cleaning support across Sydney, delivered by police-checked cleaners experienced in working respectfully in participants' homes. Get in touch to discuss your plan.",
    relatedSlugs: ["residential-cleaning", "deep-cleaning", "medical-centre-cleaning"],
  },
  {
    slug: "medical-centre-cleaning",
    name: "Medical Centres & GP Clinics Cleaning",
    shortName: "Medical Centres",
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
      "Pathology and specialist clinics",
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
    metaTitle: "Medical Centres & GP Clinics Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Infection-control-aware medical centre and GP clinic cleaning across Sydney. Flexible scheduling for clinics and allied health practices.",
    relatedSlugs: ["dental-clinics-cleaning", "office-cleaning", "aged-care-cleaning"],
  },
  {
    slug: "childcare-cleaning",
    name: "Childcare Cleaning",
    shortName: "Childcare",
    icon: "Baby",
    image: "/photos/service-childcare.jpg",
    tagline: "Safe, thorough cleaning for childcare centres and early learning services.",
    heroSubtitle:
      "Hygiene-focused cleaning for childcare centres and early learning services across Sydney, scheduled around the children in your care.",
    quickAnswer:
      "Arise Property Care provides childcare centre cleaning across Sydney covering playrooms, sleep areas, nappy-change stations and bathrooms, scheduled before opening, after close or on weekends so cleaning never interrupts the children's day.",
    description: [
      "Childcare centres carry hygiene demands beyond a typical commercial space — from nappy-change areas to shared toys and sleep mats, every surface needs to be genuinely clean, not just tidy. We work to a documented checklist covering high-contact surfaces, washrooms and food preparation areas, using child-safe, non-toxic products throughout.",
      "Cleaning is scheduled around your centre's operating hours — early morning, after the children go home, or weekends — so it never disrupts learning or nap time.",
    ],
    features: [
      "Playroom and activity area cleaning",
      "Nappy-change area and bathroom sanitisation",
      "Sleep room and cot area cleaning",
      "Kitchen and food preparation area hygiene",
      "Child-safe, non-toxic cleaning products",
      "Scheduling around centre operating hours",
    ],
    idealFor: [
      "Long day care and early learning centres",
      "Family day care premises",
      "Before and after school care services",
      "Preschools and kindergartens",
    ],
    faqs: [
      {
        question: "Are your cleaning products safe for a childcare environment?",
        answer:
          "Yes, we use non-toxic, child-safe cleaning products throughout childcare centres, and every cleaner is police-checked before working on-site.",
      },
      {
        question: "Can cleaning be scheduled outside centre hours?",
        answer:
          "Yes, most childcare cleaning is scheduled before opening, after the last child leaves, or on weekends so it never disrupts the children's routine.",
      },
    ],
    metaTitle: "Childcare Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Hygiene-focused childcare centre cleaning across Sydney. Child-safe products, police-checked cleaners, flexible scheduling. Get a free quote today.",
    relatedSlugs: ["commercial-cleaning", "ndis-cleaning", "office-cleaning"],
  },
  {
    slug: "church-cleaning",
    name: "Church Cleaning",
    shortName: "Church",
    icon: "Church",
    image: "/photos/service-church.jpg",
    tagline: "Respectful, reliable cleaning for churches and places of worship.",
    heroSubtitle:
      "Scheduled cleaning for churches, chapels and places of worship across Sydney, built around your services and events.",
    quickAnswer:
      "Arise Property Care provides church cleaning across Sydney covering worship spaces, halls, kitchens and bathrooms, scheduled around your service times and community events so the space is presentation-ready without disrupting your congregation.",
    description: [
      "Churches and places of worship are more than a single room — most host services, community groups, functions and everyday visitors throughout the week. We clean worship areas, halls, kitchens and shared facilities with the same care and respect the space deserves.",
      "We work around your service times and events, whether that means a midweek clean, a pre-service tidy, or servicing after a function, so the building is always ready to welcome your community.",
    ],
    features: [
      "Worship area, pews and aisle cleaning",
      "Community halls and shared rooms",
      "Kitchen and food service area cleaning",
      "Bathroom cleaning and consumable restocking",
      "Window, glass and fixture cleaning",
      "Scheduling around services and events",
    ],
    idealFor: [
      "Churches and chapels",
      "Places of worship of all denominations",
      "Community halls attached to religious sites",
      "Function and event spaces used for services",
    ],
    faqs: [
      {
        question: "Can you work around our service times?",
        answer:
          "Yes, we schedule around your services and events — including midweek cleans, pre-service preparation, or a clean after a function — so cleaning never gets in the way of your congregation.",
      },
      {
        question: "Do you clean community halls attached to the church as well?",
        answer:
          "Yes, we clean any shared spaces on-site, including halls, kitchens and meeting rooms used for community groups and events.",
      },
    ],
    metaTitle: "Church Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Respectful, scheduled cleaning for churches and places of worship across Sydney. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["community-centres-cleaning", "commercial-cleaning", "event-venues-cleaning"],
  },
  {
    slug: "community-centres-cleaning",
    name: "Community Centres Cleaning",
    shortName: "Community Centres",
    icon: "Users",
    image: "/photos/service-community-centres.jpg",
    tagline: "Flexible cleaning for busy, multi-use community facilities.",
    heroSubtitle:
      "Cleaning for community centres and multi-purpose facilities across Sydney, built around a full calendar of bookings and events.",
    quickAnswer:
      "Arise Property Care provides community centre cleaning across Sydney covering halls, kitchens, bathrooms and shared spaces, with flexible scheduling that fits around back-to-back bookings and events.",
    description: [
      "Community centres rarely sit still — a single day might see a playgroup, a fitness class and an evening function all use the same hall. We clean around your bookings, prioritising high-traffic areas and turning rooms around quickly between uses.",
      "Every job follows a documented checklist covering halls, kitchens, bathrooms and entry areas, so your facility is presentation-ready for whoever walks through the door next.",
    ],
    features: [
      "Main hall and multi-purpose room cleaning",
      "Kitchen and tea-making area cleaning",
      "Bathroom cleaning and consumable restocking",
      "Entry area and glass surface cleaning",
      "Quick turnaround between bookings",
      "Flexible scheduling around your calendar",
    ],
    idealFor: [
      "Council and community centres",
      "Multi-purpose halls and function rooms",
      "Youth and seniors' centres",
      "Sporting clubs and recreation facilities",
    ],
    faqs: [
      {
        question: "Can you clean between back-to-back bookings?",
        answer:
          "Yes, we can schedule quick turnaround cleans between bookings so your hall or facility is ready for the next group without delay.",
      },
      {
        question: "Do you offer regular contracts or one-off cleans?",
        answer:
          "Both — we can set up a recurring schedule around your typical bookings, or provide one-off cleans after larger events.",
      },
    ],
    metaTitle: "Community Centre Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Flexible cleaning for community centres and multi-purpose facilities across Sydney. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["church-cleaning", "event-venues-cleaning", "commercial-cleaning"],
  },
  {
    slug: "dental-clinics-cleaning",
    name: "Dental Clinics Cleaning",
    shortName: "Dental Clinics",
    icon: "Smile",
    image: "/photos/service-dental-clinics.jpg",
    tagline: "Infection-control-aware cleaning for dental practices.",
    heroSubtitle:
      "Scheduled cleaning for dental clinics across Sydney, respecting clinical boundaries and appointment schedules.",
    quickAnswer:
      "Arise Property Care provides dental clinic cleaning across Sydney covering reception, treatment rooms and staff areas, scheduled around appointment times with cleaners briefed on clinical hygiene boundaries.",
    description: [
      "Dental clinics need a cleaner who understands the difference between a waiting room and a treatment room. We clean reception and common areas to the same presentation standard as any commercial fit-out, while respecting clinical boundaries, restricted zones and waste handling protocols in treatment areas.",
      "Cleaning is scheduled around your appointment book — before opening, between sessions or after the last patient — so it never disrupts your clinic's day.",
    ],
    features: [
      "Reception and waiting area cleaning",
      "Treatment room and clinical surface cleaning",
      "High-touch surface disinfection",
      "Staff area and hallway cleaning",
      "Bathroom cleaning and restocking",
      "Scheduling around appointment times",
    ],
    idealFor: [
      "Dental practices and clinics",
      "Orthodontic practices",
      "Allied dental and specialist suites",
      "Multi-chair dental clinics",
    ],
    faqs: [
      {
        question: "Do your cleaners understand clinical boundaries in a dental practice?",
        answer:
          "Yes, our teams are briefed on working respectfully around treatment rooms, clinical waste and restricted areas, focusing general cleaning on reception, staff and common areas.",
      },
      {
        question: "Can cleaning be scheduled between patient appointments?",
        answer:
          "Yes, we can schedule around your appointment book, including before opening, during quieter periods, or after the clinic closes.",
      },
    ],
    metaTitle: "Dental Clinic Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Infection-control-aware cleaning for dental clinics across Sydney. Flexible scheduling around appointments. Get a free quote today.",
    relatedSlugs: ["medical-centre-cleaning", "office-cleaning", "commercial-cleaning"],
  },
  {
    slug: "event-venues-cleaning",
    name: "Event Venues & Function Centres Cleaning",
    shortName: "Event Venues",
    icon: "PartyPopper",
    image: "/photos/service-event-venues.jpg",
    tagline: "Fast turnaround cleaning before, during and after your event.",
    heroSubtitle:
      "Pre-event, during-event and post-event cleaning for function centres and event venues across Sydney.",
    quickAnswer:
      "Arise Property Care provides event venue cleaning across Sydney covering pre-event presentation, high-traffic areas during functions, and full post-event turnarounds — including early morning, late-night and short-notice bookings.",
    description: [
      "Function centres and event venues run on tight schedules, and presentation matters the moment guests walk in. We prepare venues before doors open, manage high-traffic pressure points like bars, dance floors and dining areas during multi-day bookings, and handle the full post-event turnaround once the last guest leaves.",
      "We understand events don't always run to a predictable calendar — we're available for early morning, overnight and short-notice bookings to fit around your event schedule.",
    ],
    features: [
      "Pre-event presentation cleaning",
      "High-traffic area servicing during events",
      "Post-event cleanup and floor restoration",
      "Restroom cleaning and restocking",
      "Table, chair and decoration removal support",
      "Early morning, late-night and short-notice availability",
    ],
    idealFor: [
      "Function centres and reception venues",
      "Conference and event spaces",
      "Wedding and party venues",
      "Venue managers needing fast turnarounds",
    ],
    faqs: [
      {
        question: "Can you clean on short notice?",
        answer:
          "Yes, we accommodate short-notice and emergency bookings where possible — get in touch and we'll do our best to fit your event timeline.",
      },
      {
        question: "Do you handle post-event pack-down?",
        answer:
          "We handle the cleaning side of pack-down, including debris removal and floor restoration; let us know if you also need help with table and chair removal.",
      },
    ],
    metaTitle: "Event Venue & Function Centre Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Pre and post-event cleaning for function centres and event venues across Sydney. Fast turnarounds, flexible scheduling. Get a free quote today.",
    relatedSlugs: ["community-centres-cleaning", "church-cleaning", "commercial-cleaning"],
  },
  {
    slug: "government-buildings-cleaning",
    name: "Government Buildings Cleaning",
    shortName: "Government Buildings",
    icon: "Landmark",
    image: "/photos/service-government-buildings.jpg",
    tagline: "Compliant, security-aware cleaning for public and government sites.",
    heroSubtitle:
      "Scheduled cleaning for government buildings and public facilities across Sydney, delivered by police-checked, fully insured teams.",
    quickAnswer:
      "Arise Property Care provides government building cleaning across Sydney covering public areas, staff spaces and washrooms, with staff who follow site access protocols and work respectfully around restricted or secure areas.",
    description: [
      "Government and public buildings come with their own access rules, sign-in procedures and security considerations. Our teams follow your site's protocols, respect restricted areas, and communicate clearly about what's off-limits before a single job starts.",
      "From public-facing reception and waiting areas to staff offices and shared facilities, every job runs to a documented checklist and is backed by full public liability insurance and police-checked staff.",
    ],
    features: [
      "Public area and reception cleaning",
      "Staff office and meeting room cleaning",
      "Washroom cleaning and restocking",
      "Site access and sign-in compliance",
      "Respect for restricted and secure areas",
      "Fully insured, police-checked staff",
    ],
    idealFor: [
      "Local and state government buildings",
      "Public service offices",
      "Libraries and civic centres",
      "Council-managed facilities",
    ],
    faqs: [
      {
        question: "Can your staff follow our site's security and sign-in requirements?",
        answer:
          "Yes, our cleaners follow site access rules, sign-in procedures and any restricted-area instructions provided for your building.",
      },
      {
        question: "Are your cleaners police-checked?",
        answer: "Yes, every cleaner is police-checked before starting any job, government sites included.",
      },
    ],
    metaTitle: "Government Building Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Compliant, security-aware cleaning for government and public buildings across Sydney. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["office-cleaning", "commercial-cleaning", "community-centres-cleaning"],
  },
  {
    slug: "gyms-fitness-cleaning",
    name: "Gyms & Fitness Centres Cleaning",
    shortName: "Gyms & Fitness",
    icon: "Dumbbell",
    image: "/photos/service-gyms-fitness.jpg",
    tagline: "Hygiene-focused cleaning for gyms, studios and fitness facilities.",
    heroSubtitle:
      "Equipment sanitisation and facility cleaning for gyms and fitness centres across Sydney, scheduled around your peak hours.",
    quickAnswer:
      "Arise Property Care provides gym and fitness centre cleaning across Sydney covering equipment sanitisation, changerooms and common areas, with scheduling built around peak class times and after-hours servicing available.",
    description: [
      "Gyms see constant high-contact use — equipment, mats, benches and changerooms all need regular, thorough attention to stay genuinely hygienic, not just tidy. We sanitise training floors and equipment, keep moisture-prone changerooms and showers on top of grime, and manage odour control across the facility.",
      "We schedule around your peak hours and class timetable, with early morning and after-hours servicing available so cleaning never gets in the way of members.",
    ],
    features: [
      "Training equipment sanitisation",
      "Changeroom, shower and locker cleaning",
      "Reception and common area cleaning",
      "Mirror, glass and floor cleaning",
      "Odour control in high-use areas",
      "Scheduling around peak hours and classes",
    ],
    idealFor: [
      "Gyms and fitness studios",
      "Boutique and group fitness studios",
      "Recreation and leisure centres",
      "Multi-site fitness chains",
    ],
    faqs: [
      {
        question: "Do you sanitise gym equipment, not just floors?",
        answer:
          "Yes, equipment sanitisation is a core part of our gym cleaning service, alongside floors, mats, mirrors and changerooms.",
      },
      {
        question: "Can cleaning happen outside peak hours?",
        answer:
          "Yes, we schedule around your class timetable and peak periods, with early morning and after-hours options available.",
      },
    ],
    metaTitle: "Gym & Fitness Centre Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Equipment sanitisation and hygiene-focused cleaning for gyms and fitness centres across Sydney. Flexible scheduling. Get a free quote today.",
    relatedSlugs: ["commercial-cleaning", "medical-centre-cleaning", "community-centres-cleaning"],
  },
  {
    slug: "aged-care-cleaning",
    name: "Aged Care Facilities Cleaning",
    shortName: "Aged Care",
    icon: "HeartPulse",
    image: "/photos/service-aged-care.jpg",
    tagline: "Considerate, high-standard cleaning for aged care environments.",
    heroSubtitle:
      "Scheduled cleaning for aged care facilities across Sydney, delivered with care around residents and shared living spaces.",
    quickAnswer:
      "Arise Property Care provides aged care facility cleaning across Sydney covering resident areas, dining rooms and shared spaces, with police-checked staff briefed on working respectfully around residents and their belongings.",
    description: [
      "Aged care facilities are home for the people who live there, not just a building to be cleaned. Our teams are briefed on working respectfully around residents, their belongings and daily routines, paying close attention to high-touch shared surfaces like handrails, door handles and common room furniture.",
      "We work with facility management to schedule around resident routines and any restricted or clinical areas, backed by full insurance and police-checked staff.",
    ],
    features: [
      "Resident room and corridor cleaning",
      "Dining room and common area cleaning",
      "High-touch surface disinfection",
      "Bathroom and wash area cleaning",
      "Respectful conduct around residents",
      "Scheduling around facility routines",
    ],
    idealFor: [
      "Aged care and residential care facilities",
      "Independent and assisted living communities",
      "Retirement villages with shared facilities",
      "Facility and care managers",
    ],
    faqs: [
      {
        question: "Are your cleaners briefed on working around residents?",
        answer:
          "Yes, our teams are briefed on working respectfully and quietly around residents, their belongings and daily routines.",
      },
      {
        question: "Can you work around clinical or restricted areas?",
        answer:
          "Yes, we work with facility management to understand any restricted or clinical zones before starting, and follow the instructions provided for each site.",
      },
    ],
    metaTitle: "Aged Care Facility Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Considerate, high-standard cleaning for aged care facilities across Sydney. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["ndis-cleaning", "medical-centre-cleaning", "commercial-cleaning"],
  },
  {
    slug: "moving-in-out-cleaning",
    name: "Moving In & Out Cleaning",
    shortName: "Moving In & Out",
    icon: "Truck",
    image: "/photos/service-moving-in-out.jpg",
    tagline: "Detailed cleaning for a fresh start, whichever direction you're moving.",
    heroSubtitle:
      "Thorough cleaning for homes changing hands across Sydney — ready for the people moving in, and left spotless by the people moving out.",
    quickAnswer:
      "Arise Property Care provides moving in and moving out cleaning across Sydney, covering kitchens, bathrooms, cupboards and every surface so a new home is genuinely ready to live in, or a vacated one is left spotless for its next owner or tenant.",
    description: [
      "Moving changes how a home looks. Once the furniture is gone, hidden dust, marks and grime that were hidden behind wardrobes and appliances suddenly become obvious — and a home you're moving into deserves the same attention before your own boxes arrive.",
      "Whether you're handing a property over or walking into a new one, we work to a documented checklist covering kitchens, bathrooms, cupboards, skirting boards and fixtures, so the property is genuinely ready for its next chapter.",
    ],
    features: [
      "Full kitchen clean, including cabinet interiors",
      "Bathroom descaling and sanitisation",
      "Wardrobe, cupboard and drawer interiors",
      "Skirting boards, light switches and door frames",
      "Window sills, tracks and interior glass",
      "Flexible scheduling around settlement and moving dates",
    ],
    idealFor: [
      "Homeowners moving into a new property",
      "Tenants and owners vacating a property",
      "Property managers coordinating handovers",
      "Buyers wanting a fresh start before unpacking",
    ],
    faqs: [
      {
        question: "What's the difference between this and end of lease cleaning?",
        answer:
          "End of lease cleaning is built specifically around real estate exit condition reports for renters. Moving in and out cleaning covers the same thorough standard but suits any property changing hands — including owner-occupied homes being bought, sold or simply moved into.",
      },
      {
        question: "Can you schedule around a tight settlement date?",
        answer:
          "Yes, we understand moving dates can shift at short notice, and we do our best to accommodate tight or changing settlement and handover timeframes.",
      },
    ],
    metaTitle: "Moving In & Out Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Thorough moving in and moving out cleaning across Sydney for homes changing hands. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["end-of-lease-cleaning", "once-off-cleaning", "deep-cleaning"],
  },
  {
    slug: "once-off-cleaning",
    name: "Once Off Cleaning",
    shortName: "Once Off",
    icon: "Repeat1",
    image: "/photos/service-once-off.jpg",
    tagline: "One solid clean, no ongoing commitment required.",
    heroSubtitle:
      "A single, thorough clean for Sydney homes that need a reset — no recurring contract required.",
    quickAnswer:
      "Arise Property Care provides once-off home cleaning across Sydney covering kitchens, bathrooms and living areas in a single visit, with no ongoing commitment — ideal before guests arrive, after an event, or whenever a home just needs to be brought back under control.",
    description: [
      "Not every home needs a cleaner every week. Sometimes you just need one solid clean to get things back under control — before guests arrive, after a busy few months, or simply for a fresh start with no strings attached.",
      "We treat a once-off clean with the same care as any recurring job, working through a full room-by-room checklist covering kitchens, bathrooms, living areas and the hard-to-reach spots that get missed in the day-to-day.",
    ],
    features: [
      "Kitchen surface and appliance exterior cleaning",
      "Bathroom cleaning and sanitising",
      "Vacuuming and mopping of all floors",
      "Dusting furniture, fixtures and skirting boards",
      "Interior window and glass cleaning",
      "No lock-in contract or ongoing commitment",
    ],
    idealFor: [
      "Homes needing a reset with no recurring plan",
      "Pre-guest or pre-event tidy-ups",
      "Post-renovation or post-party cleans",
      "Anyone trying a clean before committing to a schedule",
    ],
    faqs: [
      {
        question: "Is a once-off clean as thorough as a regular clean?",
        answer:
          "Yes, every clean follows the same detailed checklist regardless of whether it's a one-time visit or part of a recurring plan — there's no difference in the standard of work.",
      },
      {
        question: "Can I switch to a recurring schedule later?",
        answer:
          "Yes, plenty of clients start with a once-off clean and move to a weekly, fortnightly or monthly plan afterwards — just let us know and we'll set it up.",
      },
    ],
    metaTitle: "Once Off Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Thorough once-off home cleaning across Sydney with no ongoing commitment. Fully insured, police-checked cleaners. Get a free quote today.",
    relatedSlugs: ["residential-cleaning", "deep-cleaning", "moving-in-out-cleaning"],
  },
  {
    slug: "oven-cleaning",
    name: "Oven Cleaning",
    shortName: "Oven",
    icon: "Flame",
    image: "/photos/service-oven.jpg",
    tagline: "Professional oven cleaning that actually shifts baked-on grime.",
    heroSubtitle:
      "Detailed oven cleaning across Sydney, removing built-up grease and baked-on residue that a regular kitchen wipe-down can't touch.",
    quickAnswer:
      "Arise Property Care provides professional oven cleaning across Sydney, removing baked-on grease and residue from racks, trays, doors and interior surfaces using safe, effective products suited to your oven type.",
    description: [
      "An oven is one of the hardest things in a kitchen to clean properly — baked-on grease and residue build up in places a regular wipe-down never reaches. We treat racks, trays, doors and interior surfaces with products and techniques suited to your specific oven type, without damaging its finish.",
      "Oven cleaning is available as a standalone service or as an add-on to a broader home clean, end of lease clean or deep clean — whichever suits what you need done.",
    ],
    features: [
      "Interior oven cavity degreasing",
      "Racks and trays soaked and scrubbed",
      "Oven door glass, inside and out",
      "Stovetop and rangehood cleaning available",
      "Safe for a range of oven types and finishes",
      "Available standalone or as an add-on service",
    ],
    idealFor: [
      "Households with heavy oven buildup",
      "End of lease and rental handovers",
      "Landlords and property managers",
      "Anyone adding oven care to another clean",
    ],
    faqs: [
      {
        question: "Will oven cleaning damage the surface or coating?",
        answer:
          "No, we use products and techniques suited to your oven's specific finish, so grease and residue are removed safely without damaging the surface.",
      },
      {
        question: "Can I book oven cleaning on its own?",
        answer:
          "Yes, oven cleaning is available as a standalone service, or bundled with a regular home clean, deep clean or end of lease clean.",
      },
    ],
    metaTitle: "Oven Cleaning Sydney | Arise Property Care",
    metaDescription:
      "Professional oven cleaning across Sydney, removing baked-on grease and residue safely. Available standalone or as an add-on. Get a free quote today.",
    relatedSlugs: ["deep-cleaning", "residential-cleaning", "end-of-lease-cleaning"],
  },
  {
    slug: "pressure-cleaning",
    name: "Pressure Cleaning",
    shortName: "Pressure Clean",
    icon: "SprayCan",
    image: "/photos/service-pressure.jpg",
    tagline: "Restore driveways, paths and exteriors with high-pressure cleaning.",
    heroSubtitle:
      "High-pressure cleaning for driveways, paths, decks and building exteriors across Sydney.",
    quickAnswer:
      "Arise Property Care provides high-pressure cleaning across Sydney for driveways, paths, decks and building exteriors, removing built-up dirt, mould, mildew and stains to restore the surface's appearance.",
    description: [
      "External surfaces take a beating from weather, foot traffic and everyday grime, and a standard hose simply can't shift what builds up over time. Our high-pressure cleaning removes dirt, mould, mildew and stains from driveways, pathways, decks and building exteriors, restoring the surface underneath.",
      "We assess each surface before starting, choosing the right pressure and technique for the material, so the clean is thorough without causing damage.",
    ],
    features: [
      "Driveway and pathway cleaning",
      "Deck and outdoor entertaining area cleaning",
      "Building exterior and wall washdowns",
      "Mould, mildew and stain removal",
      "Surface assessment before every job",
      "Suitable for residential and commercial properties",
    ],
    idealFor: [
      "Homeowners restoring driveways and paths",
      "Pre-sale or pre-listing presentation",
      "Landlords and property managers",
      "Businesses maintaining exterior curb appeal",
    ],
    faqs: [
      {
        question: "Is pressure cleaning safe for all surfaces?",
        answer:
          "We assess your surface first and adjust pressure and technique accordingly, so pavers, concrete, timber decking and rendered walls are all cleaned safely and effectively.",
      },
      {
        question: "How often should driveways and paths be pressure cleaned?",
        answer:
          "Most Sydney properties benefit from pressure cleaning once or twice a year, though this varies depending on surface type, shade, and exposure to weather.",
      },
    ],
    metaTitle: "Pressure Cleaning Sydney | Arise Property Care",
    metaDescription:
      "High-pressure cleaning for driveways, paths, decks and exteriors across Sydney. Removes dirt, mould and stains safely. Get a free quote today.",
    relatedSlugs: ["deep-cleaning", "residential-cleaning", "strata-cleaning"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
