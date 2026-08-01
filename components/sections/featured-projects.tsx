import Image from "next/image";
import { Building2, KeyRound, Building, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const projects = [
  {
    icon: KeyRound,
    category: "End of Lease",
    title: "Same-Day Vacate Turnaround",
    location: "Parramatta Apartment",
    result: "Full bond returned, zero re-clean requests",
    image: "/photos/project-end-of-lease.jpg",
    alt: "Bright, freshly cleaned living room after an end of lease clean",
  },
  {
    icon: Building2,
    category: "Commercial Contract",
    title: "Scheduled Office Cleaning",
    location: "Blacktown Office Precinct",
    result: "After-hours servicing, 3x weekly",
    image: "/photos/project-office.jpg",
    alt: "Professional cleaner servicing a modern office space",
  },
  {
    icon: Building,
    category: "Strata Contract",
    title: "12-Month Common Area Servicing",
    location: "Castle Hill Apartment Complex",
    result: "5x weekly servicing across 3 towers",
    image: "/photos/project-strata.jpg",
    alt: "Modern high-rise apartment building serviced under a strata cleaning contract",
  },
  {
    icon: HeartHandshake,
    category: "NDIS Support",
    title: "Ongoing Household Cleaning Support",
    location: "Westmead Participant Home",
    result: "Consistent cleaner, fortnightly for 18 months",
    image: "/photos/project-ndis.jpg",
    alt: "Cleaner providing respectful household cleaning support",
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/70 via-brand-navy-950/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                    <project.icon className="size-5" />
                  </span>
                </div>
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
