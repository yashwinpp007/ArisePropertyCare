import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { suburbs, getSuburbBySlug, getSuburbLinks } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { getSuburbFaqs } from "@/lib/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";

export function generateStaticParams() {
  return suburbs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) return {};

  const title = suburb.isHub
    ? `Cleaning Services Sydney | Arise Property Care`
    : `Cleaning Services in ${suburb.name}, NSW ${suburb.postcode} | Arise Property Care`;
  const description = suburb.isHub
    ? `Arise Property Care provides residential, commercial and end of lease cleaning across Greater Sydney. Based in Seven Hills. Get a free quote today.`
    : `Professional residential, commercial and end of lease cleaning in ${suburb.name} NSW ${suburb.postcode}. Fully insured, police-checked cleaners. Free quotes.`;

  return buildMetadata({ title, description, path: `/locations/${suburb.slug}` });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const suburb = getSuburbBySlug(slug);
  if (!suburb) notFound();

  const nearby = getSuburbLinks(suburb);
  const faqs = getSuburbFaqs(suburb.name);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy-950 pb-20 pt-10 sm:pb-24">
        <div className="container-premium">
          <Breadcrumbs
            onDark
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: suburb.name, path: `/locations/${suburb.slug}` },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            {suburb.isHQ && (
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-emerald-500/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-emerald-300">
                <Star className="size-3.5 fill-current" /> Home base
              </span>
            )}
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {suburb.isHub
                ? "Cleaning Services Across Sydney"
                : `Cleaning Services in ${suburb.name}`}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/70">{suburb.intro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {suburb.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
                >
                  <MapPin className="size-3 text-brand-emerald-400" /> {landmark}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/quote" />}
                size="lg"
                className="rounded-full bg-brand-emerald-600 text-white hover:bg-brand-emerald-500"
              >
                Get Free Quote <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
              <Button
                render={<a href={siteConfig.phoneHref} />}
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-4" data-icon="inline-start" /> {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this suburb */}
      <section className="py-20 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
              Popular services in {suburb.isHub ? "Sydney" : suburb.name}
            </h2>
            <p className="mt-2 max-w-xl text-brand-grey-600">
              Every Arise Property Care service is available in {suburb.isHub ? "your area" : suburb.name} —
              explore the full list or request a free quote for exact pricing.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-brand-grey-200 p-5 transition-all hover:-translate-y-0.5 hover:border-brand-emerald-200 hover:shadow-lg"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy-900/[0.04] text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white">
                    <DynamicIcon name={service.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-brand-navy-900">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-brand-grey-500">
                      {service.tagline}
                    </span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Nearby suburbs */}
      {nearby.length > 0 && (
        <section className="bg-brand-grey-50 py-20 sm:py-24">
          <div className="container-premium">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
                Nearby areas we also service
              </h2>
            </Reveal>
            <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {nearby.map((n) => (
                <StaggerItem key={n.slug}>
                  <Link
                    href={`/locations/${n.slug}`}
                    className="flex items-center justify-between rounded-xl border border-brand-grey-200 bg-white px-4 py-3.5 text-sm font-medium text-brand-navy-800 hover:border-brand-emerald-300 hover:text-brand-emerald-700"
                  >
                    {n.name}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      <FaqSection
        faqs={faqs}
        eyebrow="FAQ"
        title={`Cleaning in ${suburb.isHub ? "Sydney" : suburb.name} — common questions`}
        className={nearby.length > 0 ? "bg-white" : "bg-brand-grey-50"}
      />

      <CtaSection />
    </div>
  );
}
