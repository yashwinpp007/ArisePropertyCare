import { Building2, KeyRound, Building, HeartHandshake } from "lucide-react";
import { AbstractPanel } from "@/components/shared/abstract-panel";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const projects = [
  {
    icon: KeyRound,
    category: "End of Lease",
    title: "Same-Day Vacate Turnaround",
    location: "Parramatta Apartment",
    result: "Full bond returned, zero re-clean requests",
    variant: "navy" as const,
    pattern: 1 as const,
  },
  {
    icon: Building2,
    category: "Retail Fit-Out",
    title: "Post-Construction Handover Clean",
    location: "Blacktown Retail Precinct",
    result: "Site handed over 1 day ahead of schedule",
    variant: "emerald" as const,
    pattern: 4 as const,
  },
  {
    icon: Building,
    category: "Strata Contract",
    title: "12-Month Common Area Servicing",
    location: "Castle Hill Apartment Complex",
    result: "5x weekly servicing across 3 towers",
    variant: "slate" as const,
    pattern: 2 as const,
  },
  {
    icon: HeartHandshake,
    category: "NDIS Support",
    title: "Ongoing Household Cleaning Support",
    location: "Westmead Participant Home",
    result: "Consistent cleaner, fortnightly for 18 months",
    variant: "navy" as const,
    pattern: 3 as const,
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Recent work across Greater Sydney"
          subtitle="A snapshot of the residential, commercial and strata projects our teams deliver every week."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group overflow-hidden rounded-2xl border border-brand-grey-200 transition-shadow hover:shadow-xl hover:shadow-brand-navy-900/10">
                <AbstractPanel variant={project.variant} pattern={project.pattern} className="h-48">
                  <span className="relative flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm">
                    <project.icon className="size-6" />
                  </span>
                </AbstractPanel>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-emerald-600">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold text-brand-navy-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-grey-500">{project.location}</p>
                  <p className="mt-3 border-t border-brand-grey-100 pt-3 text-sm font-medium text-brand-navy-800">
                    {project.result}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
