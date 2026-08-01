import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="bg-brand-grey-50 py-24 sm:py-32">
      <div className="container-premium">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Offer"
            title="A cleaning service for every property"
            subtitle="From weekly house cleans to strata contracts and construction handovers — one trusted team across Sydney."
          />
        )}

        <StaggerGroup className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-brand-grey-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-[0_24px_50px_-20px_rgba(0,32,80,0.18)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-navy-900/[0.04] text-brand-navy-800 transition-colors group-hover:bg-brand-emerald-600 group-hover:text-white">
                    <DynamicIcon name={service.icon} className="size-5.5" />
                  </span>
                  <ArrowUpRight className="size-5 text-brand-grey-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-emerald-600" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-brand-navy-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-grey-500">
                  {service.tagline}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
