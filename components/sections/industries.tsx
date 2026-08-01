import { industries } from "@/lib/data/industries";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

export function Industries() {
  return (
    <section className="bg-brand-grey-50 py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across every sector of Sydney property"
          subtitle="Wherever presentation and hygiene matter, our teams have the experience to deliver."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-brand-grey-200 bg-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-emerald-50 text-brand-emerald-600 transition-colors group-hover:bg-brand-emerald-600 group-hover:text-white">
                  <DynamicIcon name={industry.icon} className="size-5.5" />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold text-brand-navy-900">
                  {industry.name}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
