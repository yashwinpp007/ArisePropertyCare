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
  image: string;
  imageAlt: string;
  quickAnswer: string;
  sections: BlogSection[];
  metaTitle: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-professional-cleaning",
    title: "5 Benefits of Professional Cleaning for Your Home or Business",
    excerpt:
      "Beyond a tidy space — the real, measurable reasons regular professional cleaning pays for itself at home and at work.",
    category: "Cleaning Tips",
    date: "2026-08-11",
    readTimeMinutes: 4,
    image: "/photos/service-residential.jpg",
    imageAlt: "An Arise Property Care cleaner tidying a Sydney home",
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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
