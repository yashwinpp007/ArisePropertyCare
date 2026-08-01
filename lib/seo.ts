import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    // `absolute` bypasses the root layout's title template — our per-page
    // titles already include the brand name, so the template would duplicate it.
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
