import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Cleaning Services Sydney | Arise Property Care",
  description:
    "Explore all Arise Property Care cleaning services — residential, commercial, office, end of lease, deep cleaning, carpet, windows, NDIS and more across Sydney.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <div className="pt-24">
      <section className="bg-white py-16 sm:py-20">
        <div className="container-premium">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
              Cleaning services for every Sydney property
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              From weekly house cleans to strata contracts, construction handovers and NDIS
              support — twelve dedicated services, one trusted team.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid showHeading={false} />
      <FaqSection faqs={homepageFaqs.slice(0, 6)} />
      <CtaSection />
    </div>
  );
}
