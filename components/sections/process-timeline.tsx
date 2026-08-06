import Image from "next/image";
import { processSteps } from "@/lib/data/industries";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="How It Works"
          title="From quote to a spotless space in five simple steps"
          subtitle="A straightforward process designed to make booking a clean effortless."
        />

        <StaggerGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-brand-grey-200 lg:block" />
          {processSteps.map((step) => (
            <StaggerItem key={step.step} className="relative flex flex-col items-start">
              <div className="relative z-10 size-[76px]">
                <div className="size-full overflow-hidden rounded-2xl border-2 border-white shadow-[0_4px_20px_-4px_rgba(0,32,80,0.25)]">
                  <Image src={step.image} alt="" fill sizes="76px" className="object-cover" />
                </div>
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-brand-navy-900 text-[0.7rem] font-bold text-white ring-2 ring-white">
                  {step.step}
                </span>
                <span className="absolute -bottom-2 -left-2 flex size-7 items-center justify-center rounded-full bg-brand-emerald-600 text-white ring-2 ring-white">
                  <DynamicIcon name={step.icon} className="size-3.5" />
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-brand-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-grey-500">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
