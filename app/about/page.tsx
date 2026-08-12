import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  MapPin,
  ArrowRight,
  ShieldHalf,
  Building2,
  CalendarClock,
  BadgeCheck,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { StatCounter } from "@/components/shared/stat-counter";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Arise Property Care",
  description:
    "Arise Property Care is a Seven Hills-based cleaning company serving Greater Sydney. Fully insured with $20 million public liability cover, police-checked cleaners, 100% satisfaction guarantee.",
  path: "/about",
});

const trustReasons = [
  {
    icon: Building2,
    title: "Commercial Experience",
    description:
      "We have hands-on experience cleaning a wide range of commercial environments and offer flexible scheduling to avoid disrupting your business. Every corner and surface is cleaned with care and pride.",
  },
  {
    icon: ShieldHalf,
    title: "Insurance & Compliance",
    description:
      "You can be assured of stringent health and safety standards and detailed insurance coverage — our team carries $20 million in public liability insurance, and every cleaner is police-checked and trained.",
  },
  {
    icon: CalendarClock,
    title: "Flexibility & Consistency",
    description:
      "We can clean during the day or night to avoid disruption, and adjust schedules over time as your needs change. Consistent, high-quality standards are guaranteed on every visit.",
  },
  {
    icon: Award,
    title: "Experienced Cleaning Team",
    description:
      "Our staff have an extensive background in professional cleaning, trained in efficient, eco-friendly techniques using modern equipment — always punctual, polite and easy to work with.",
  },
];

const stats = [
  { value: siteConfig.stats.yearsExperience, suffix: "+", label: "Years in business" },
  { value: siteConfig.stats.jobsCompleted, suffix: "+", label: "Jobs completed" },
  { value: siteConfig.stats.googleRating, decimals: 1, suffix: "/5", label: "Google rating" },
  { value: siteConfig.stats.satisfactionRate, suffix: "%", label: "Satisfaction guarantee" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 xl:pt-[8.5rem]">
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-premium">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-emerald-600">
                About Us
              </p>
              <h1 className="mt-2 text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
                A Sydney cleaning team built on trust
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-brand-grey-600">
                Arise Property Care was founded to fix a simple problem: too many cleaning
                companies were inconsistent, hard to reach, or cut corners on vetting. We built
                the opposite — a fully insured, police-checked team run on documented checklists,
                based right here in Seven Hills and servicing Greater Sydney.
              </p>
              <p className="mt-4 leading-relaxed text-brand-grey-600">
                Today we clean homes, offices, strata buildings, construction sites and NDIS
                participant households right across the Sydney metro — with the same attention to
                detail on job one as job one thousand. Our task goes beyond a quick wipe-down: our
                trained cleaners are equipped to handle everything from a routine weekly clean to
                a full end of lease turnover, using techniques and products suited to the job in
                front of them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/quote" />}
                  size="lg"
                  className="rounded-full bg-brand-emerald-600 text-white hover:bg-brand-emerald-700"
                >
                  Get Free Quote <ArrowRight className="size-4" data-icon="inline-end" />
                </Button>
                <Button render={<Link href="/contact" />} size="lg" variant="outline" className="rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/photos/team-members.jpg"
                alt="The Arise Property Care team with their cleaning cart in a Sydney building lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <MapPin className="mx-auto size-8 text-brand-emerald-300" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-brand-emerald-300">
                  Based in
                </p>
                <p className="mt-1 text-2xl font-bold text-white">Seven Hills, NSW</p>
                <p className="mt-1 text-sm text-white/60">{siteConfig.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-grey-200 bg-brand-grey-50 py-14">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-brand-navy-900 sm:text-4xl">
                  <StatCounter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-medium text-brand-grey-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial experience */}
      <section className="py-20 sm:py-24">
        <div className="container-premium grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
            <Image
              src="/photos/service-commercial.jpg"
              alt="Arise Property Care cleaning a commercial office building in Sydney"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="lg:order-1">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-emerald-50 text-brand-emerald-600">
              <Building2 className="size-5.5" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
              Commercial-grade experience
            </h2>
            <p className="mt-4 leading-relaxed text-brand-grey-600">
              We bring the same commercial-grade experience to every property we service — from
              corporate offices and strata buildings to warehouses, medical centres and
              construction sites. We understand that a business can&apos;t afford disruption, so
              our teams work flexible hours, including after-hours and weekend slots, so cleaning
              happens around you, not in your way.
            </p>
            <p className="mt-4 leading-relaxed text-brand-grey-600">
              Every corner and surface is cleaned with the same care and pride, whether it&apos;s
              a single office fit-out or a multi-site strata contract.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Insurance & compliance */}
      <section className="bg-brand-navy-950 py-20 sm:py-24">
        <div className="container-premium grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-brand-emerald-400">
              <ShieldHalf className="size-5.5" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              Insured for total peace of mind
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              When you work with Arise Property Care, you&apos;re covered by{" "}
              <span className="font-semibold text-white">
                $
                <StatCounter value={siteConfig.stats.publicLiabilityMillions} suffix="M" />
              </span>{" "}
              in public liability insurance — so you can have complete confidence letting our
              team into your home or business.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Every cleaner on our team is police-checked before they ever start a job, and we
              hold ourselves to strict health and safety standards on every property we service,
              from a single-family home to a multi-storey commercial site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85">
                <ShieldHalf className="size-4 text-brand-emerald-400" />
                $20M public liability
              </div>
              <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85">
                <BadgeCheck className="size-4 text-brand-emerald-400" />
                Police-checked cleaners
              </div>
            </div>
          </Reveal>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/photos/hero-team-1.jpg"
              alt="The fully insured, police-checked Arise Property Care team with their cleaning cart"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Flexibility & consistency */}
      <section className="py-20 sm:py-24">
        <div className="container-premium grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
            <Image
              src="/photos/hero-team-2.jpg"
              alt="The Arise Property Care team standing beneath their logo in a Sydney building"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="lg:order-1">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-emerald-50 text-brand-emerald-600">
              <CalendarClock className="size-5.5" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
              Flexible scheduling, consistent standards
            </h2>
            <p className="mt-4 leading-relaxed text-brand-grey-600">
              Life — and business — doesn&apos;t run on a fixed schedule, so neither do we. We
              offer one-off, weekly, fortnightly and monthly cleaning plans, with the flexibility
              to adjust as your needs change.
            </p>
            <p className="mt-4 leading-relaxed text-brand-grey-600">
              Wherever possible, we send the same cleaner back to your property so they get to
              know exactly how you like things done — backed by a documented checklist on every
              single visit, and a 100% satisfaction guarantee if anything doesn&apos;t meet the
              mark.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reasons to trust */}
      <section className="border-t border-brand-grey-200 bg-brand-grey-50 py-20 sm:py-24">
        <div className="container-premium">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-brand-navy-900 sm:text-4xl">
              Reasons to Trust Arise Property Care
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              We offer an extensive range of cleaning services to homes and businesses across
              Sydney — tailored to your budget and based on your specific needs.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustReasons.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl bg-brand-emerald-600 p-7 text-white">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white/15">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
