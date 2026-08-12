export const siteConfig = {
  name: "Arise Property Care",
  legalName: "Arise Property Care Pty Ltd",
  shortName: "Arise Property Care",
  tagline: "Professional Cleaning Services You Can Trust",
  description:
    "Arise Property Care delivers premium residential, commercial and end of lease cleaning across Sydney. Fully insured, police-checked cleaners, satisfaction guaranteed.",
  url: "https://www.arisepropertycare.com.au",
  email: "info@ariseproperty.com.au",
  phone: "0469 864 885",
  phoneHref: "tel:+61469864885",
  emailHref: "mailto:info@ariseproperty.com.au",
  abnPlaceholder: "Available on request",
  foundedYear: 2010,
  yearsExperience: 15,
  primaryRegion: "Sydney",
  state: "NSW",
  country: "Australia",
  streetAddress: "1/169 Cornelia Road",
  addressLocality: "Seven Hills",
  addressRegion: "NSW",
  postalCode: "2147",
  fullAddress: "1/169 Cornelia Road, Seven Hills NSW 2147",
  geo: {
    latitude: -33.7784,
    longitude: 150.9406,
  },
  social: {
    facebook: "https://www.facebook.com/arisepropertycare",
    instagram: "https://www.instagram.com/arisepropertycare",
    linkedin: "https://www.linkedin.com/company/arise-property-care",
    google: "https://g.page/r/arise-property-care",
  },
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed (emergency clean-ups available)" },
  ],
  stats: {
    googleRating: 4.9,
    googleReviewCount: 187,
    yearsExperience: 15,
    jobsCompleted: 12000,
    satisfactionRate: 100,
    publicLiabilityMillions: 20,
  },
  trustBadges: [
    "Fully Insured",
    "Police Checked Cleaners",
    "100% Satisfaction Guarantee",
    "Eco-Friendly Products",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Commercial Cleaning", href: "/services", megaMenu: "commercial" },
  { label: "Industrial Cleaning", href: "/services/builders-cleaning" },
  { label: "Domestic Cleaning", href: "/services", megaMenu: "domestic" },
  { label: "Service area", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;

/** Slugs (from lib/data/services.ts) shown under each navbar mega-menu category. */
export const navMegaMenus = {
  commercial: [
    "commercial-cleaning",
    "office-cleaning",
    "strata-cleaning",
    "airbnb-cleaning",
    "medical-centre-cleaning",
    "ndis-cleaning",
    "dental-clinics-cleaning",
    "aged-care-cleaning",
    "childcare-cleaning",
    "gyms-fitness-cleaning",
    "government-buildings-cleaning",
    "community-centres-cleaning",
    "event-venues-cleaning",
    "church-cleaning",
  ],
  domestic: [
    "residential-cleaning",
    "deep-cleaning",
    "moving-in-out-cleaning",
    "once-off-cleaning",
    "end-of-lease-cleaning",
    "carpet-cleaning",
    "window-cleaning",
    "oven-cleaning",
    "pressure-cleaning",
  ],
} as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;
