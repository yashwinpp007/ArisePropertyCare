import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { FullBleedImage } from "@/components/shared/full-bleed-image";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { QualityGuarantee } from "@/components/sections/quality-guarantee";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Industries } from "@/components/sections/industries";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { BeforeAfter } from "@/components/sections/before-after";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreas } from "@/components/sections/service-areas";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Arise Property Care | Professional Cleaning Services Sydney",
  description:
    "Premium residential, commercial and end of lease cleaning across Sydney. Fully insured, police-checked cleaners with a 100% satisfaction guarantee. Get a free quote today.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceAreas />
      <BeforeAfter />
      <SocialProof />
      <ServicesGrid carousel />
      <FullBleedImage
        src="/photos/team-members.jpg"
        alt="The Arise Property Care team — fully insured, uniformed and police-checked cleaners"
        heightClass="h-[42vh] min-h-[280px] sm:h-[54vh] sm:max-h-[560px]"
        objectPosition="center 22%"
      />
      <WhyChooseUs />
      <QualityGuarantee />
      <ProcessTimeline />
      <Industries />
      <FeaturedProjects />
      <Testimonials />
      <FaqSection faqs={homepageFaqs} />
      <CtaSection showMap />
    </>
  );
}
