import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone, Users } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { suburbs } from "@/lib/data/locations";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, jsonLdScript } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

const featuredSuburbs = suburbs.filter((s) => !s.isHub).slice(0, 8);

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceSchema(service)) }}
      />

      {/* Hero */}
      <section className="bg-brand-navy-950 pb-20 pt-10 sm:pb-24">
        <div className="container-premium">
          <Breadcrumbs
            onDark
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start lg:gap-16">
            <div className="lg:col-span-3">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-emerald-400">
                <DynamicIcon name={service.icon} className="size-6" />
              </span>
              <h1 className="mt-6 text-balance font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {service.name} in Sydney
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{service.heroSubtitle}</p>

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

            <div className="lg:col-span-2 space-y-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.image}
                  alt={`${service.name} being carried out by an Arise Property Care cleaner`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <QuickAnswerDark>{service.quickAnswer}</QuickAnswerDark>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 sm:py-24">
        <div className="container-premium grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
                About this service
              </h2>
              <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-brand-grey-600">
                {service.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
                What&apos;s included
              </h2>
              <StaggerGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <StaggerItem key={feature}>
                    <div className="flex items-start gap-3 rounded-xl border border-brand-grey-200 p-4">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-emerald-600" />
                      <span className="text-sm font-medium text-brand-navy-800">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-brand-grey-200 p-6">
                <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-navy-900">
                  <Users className="size-5 text-brand-emerald-600" /> Ideal for
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-grey-600">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-brand-grey-50 p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-navy-900">
                  Servicing across Sydney
                </h3>
                <p className="mt-2 text-sm text-brand-grey-500">
                  Including {featuredSuburbs.slice(0, 4).map((s) => s.name).join(", ")} and more.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featuredSuburbs.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/locations/${s.slug}`}
                      className="rounded-full border border-brand-grey-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-grey-600 hover:border-brand-emerald-300 hover:text-brand-emerald-700"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/locations"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald-600"
                >
                  View all service areas <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={service.faqs}
        eyebrow="FAQ"
        title={`${service.shortName} cleaning — common questions`}
        subtitle="Answer-first, so you know exactly what to expect."
      />

      {/* Related services */}
      <section className="py-20 sm:py-24">
        <div className="container-premium">
          <h2 className="font-heading text-2xl font-bold text-brand-navy-900 sm:text-3xl">
            Related services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group rounded-2xl border border-brand-grey-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy-900/5 text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white">
                  <DynamicIcon name={related.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-brand-navy-900">
                  {related.name}
                </h3>
                <p className="mt-1.5 text-sm text-brand-grey-500">{related.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}

function QuickAnswerDark({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-emerald-400">
        In short
      </p>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-white/80">{children}</p>
    </div>
  );
}
