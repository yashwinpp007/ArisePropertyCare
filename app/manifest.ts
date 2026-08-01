import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#002050",
    icons: [
      {
        src: "/brand/logo-mark-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/logo-mark-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
