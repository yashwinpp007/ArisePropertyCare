import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions | Arise Property Care",
  description:
    "Answers to common questions about pricing, booking, insurance and what to expect from Arise Property Care's cleaning services across Sydney.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 sm:py-20">
        <div className="container-premium">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              Everything you need to know about booking, pricing and what to expect. Can&apos;t
              find your answer? Get in touch and we&apos;ll respond the same business day.
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={homepageFaqs} title="All questions" className="bg-brand-grey-50" />
      <CtaSection />
    </div>
  );
}
