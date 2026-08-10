import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServiceAreas } from "@/components/sections/service-areas";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas | Arise Property Care Sydney",
  description:
    "Arise Property Care services Greater Sydney from our Seven Hills base — including Parramatta, Blacktown, Castle Hill, Norwest and 16+ surrounding suburbs.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <div className="pt-24 xl:pt-[8.5rem]">
      <section className="bg-white py-16 sm:py-20">
        <div className="container-premium">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }]} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
              Where we clean across Sydney
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              Based in Seven Hills, our teams service the entire Sydney metro — find your
              suburb below for local service details.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreas />
      <CtaSection />
    </div>
  );
}
