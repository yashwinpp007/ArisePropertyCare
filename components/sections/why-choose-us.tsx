import Image from "next/image";
import {
  Users2,
  Leaf,
  ShieldCheck,
  BadgeCheck,
  Wallet,
  CalendarClock,
  Award,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const reasons = [
  {
    icon: Users2,
    title: "Professional Team",
    description: "Trained, uniformed cleaners who take pride in the details.",
    image: "/photos/service-commercial.jpg",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Non-toxic products safe for kids, pets and allergy sufferers.",
    image: "/photos/why-eco.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Comprehensive public liability cover on every single job.",
    image: "/photos/why-insured.jpg",
  },
  {
    icon: BadgeCheck,
    title: "Police Checked",
    description: "Every cleaner passes a national police check before joining.",
    image: "/photos/why-police-checked.jpg",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent, upfront quotes with no hidden call-out fees.",
    image: "/photos/why-pricing.jpg",
  },
  {
    icon: CalendarClock,
    title: "Reliable Scheduling",
    description: "On time, every time — with easy rescheduling if plans change.",
    image: "/photos/why-scheduling.jpg",
  },
  {
    icon: Award,
    title: "100% Satisfaction Guarantee",
    description: "Not happy with a detail? We'll come back and fix it, free.",
    image: "/photos/project-end-of-lease.jpg",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "Commercial-grade tools for a faster, more thorough clean.",
    image: "/photos/service-carpet.jpg",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand-navy-950 py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Why Arise Property Care"
          title="The details that set us apart"
          subtitle="A cleaning partner Sydney homes and businesses can rely on, visit after visit."
          onDark
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description, image }) => (
            <StaggerItem key={title}>
              <div className="group relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/45 to-brand-navy-950/10" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand-emerald-400 backdrop-blur-sm">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
