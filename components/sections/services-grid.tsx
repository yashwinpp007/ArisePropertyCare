import Link from "next/link";
import Image from "next/image";
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-grey-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-[0_24px_50px_-20px_rgba(0,32,80,0.18)]"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-brand-navy-800 backdrop-blur-sm transition-colors group-hover:bg-brand-emerald-600 group-hover:text-white">
                    <DynamicIcon name={service.icon} className="size-5" />
                  </span>
                  <ArrowUpRight className="absolute right-3 top-3 size-5 text-white/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-navy-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey-500">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
