import { siteConfig } from "@/lib/site-config";
import type { Service } from "@/lib/data/services";
import type { Faq } from "@/lib/data/faqs";
import { testimonials } from "@/lib/data/testimonials";
import { suburbs } from "@/lib/data/locations";
import { sydneyRegions } from "@/lib/data/regions";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-mark-512.png`,
    image: `${siteConfig.url}/brand/logo-mark-512.png`,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    foundingDate: String(siteConfig.foundedYear),
    sameAs: Object.values(siteConfig.social),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: "AU",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    image: `${siteConfig.url}/brand/logo-mark-512.png`,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Sydney" },
      ...sydneyRegions.map((r) => ({ "@type": "AdministrativeArea" as const, name: r.name })),
      ...suburbs
        .filter((s) => !s.isHub)
        .map((s) => ({ "@type": "Place" as const, name: `${s.name} NSW ${s.postcode}` })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.googleRating,
      reviewCount: siteConfig.stats.googleReviewCount,
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-AU",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[] | { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service, areaName = "Sydney") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} ${areaName}`,
    description: service.metaDescription,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: areaName,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function reviewSchema() {
  return testimonials.slice(0, 5).map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.quote,
    itemReviewed: { "@id": `${siteConfig.url}/#organization` },
  }));
}

export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  metaDescription: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.image ? { image: `${siteConfig.url}${post.image}` } : {}),
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

export function jsonLdScript(data: object | object[]) {
  return JSON.stringify(Array.isArray(data) ? data : [data]);
}
