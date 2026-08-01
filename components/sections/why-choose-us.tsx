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
  { icon: Users2, title: "Professional Team", description: "Trained, uniformed cleaners who take pride in the details." },
  { icon: Leaf, title: "Eco-Friendly Products", description: "Non-toxic products safe for kids, pets and allergy sufferers." },
  { icon: ShieldCheck, title: "Fully Insured", description: "Comprehensive public liability cover on every single job." },
  { icon: BadgeCheck, title: "Police Checked", description: "Every cleaner passes a national police check before joining." },
  { icon: Wallet, title: "Affordable Pricing", description: "Transparent, upfront quotes with no hidden call-out fees." },
  { icon: CalendarClock, title: "Reliable Scheduling", description: "On time, every time — with easy rescheduling if plans change." },
  { icon: Award, title: "100% Satisfaction Guarantee", description: "Not happy with a detail? We'll come back and fix it, free." },
  { icon: Wrench, title: "Modern Equipment", description: "Commercial-grade tools for a faster, more thorough clean." },
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

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="group h-full bg-brand-navy-950 p-7 transition-colors hover:bg-white/[0.03]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] text-brand-emerald-400">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
