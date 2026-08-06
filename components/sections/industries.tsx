import { industries } from "@/lib/data/industries";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const badgeStyles = [
  "bg-brand-emerald-50 text-brand-emerald-600 group-hover:bg-brand-emerald-600",
  "bg-brand-navy-900/5 text-brand-navy-800 group-hover:bg-brand-navy-800",
  "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
  "bg-sky-50 text-sky-600 group-hover:bg-sky-500",
  "bg-rose-50 text-rose-500 group-hover:bg-rose-500",
];

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-brand-grey-50 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(0,112,72,0.06),transparent)]" />
      <div className="container-premium relative">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across every sector of Sydney property"
          subtitle="Wherever presentation and hygiene matter, our teams have the experience to deliver."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <StaggerItem key={industry.name}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-brand-grey-200 bg-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg">
                <span
                  className={`flex size-12 items-center justify-center rounded-full transition-colors group-hover:text-white ${badgeStyles[index % badgeStyles.length]}`}
                >
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
