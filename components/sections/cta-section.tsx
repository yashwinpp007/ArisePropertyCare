import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.fullAddress
)}`;

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.fullAddress
)}&z=15&output=embed`;

export function CtaSection({ showMap = false }: { showMap?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy-950 py-24 sm:py-28">
      <Image
        src="/photos/service-deep-clean.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(0,112,72,0.35),transparent)]" />
      <div className="absolute inset-0 bg-brand-navy-950/60" />
      <div className="absolute inset-0 bg-grid-navy opacity-30" />

      <div className="container-premium relative">
        {showMap ? (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="text-center lg:text-left">
              <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
                Ready for a spotless space, without the hassle?
              </h2>
              <p className="mt-4 text-balance text-lg text-white/70">
                Get a free, no-obligation quote in minutes — most bookings are confirmed within
                24–48 hours.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
                <Button
                  render={<Link href="/quote" />}
                  size="xl"
                  className="bg-brand-emerald-600 text-white hover:bg-brand-emerald-500 rounded-full"
                >
                  Get Free Quote <ArrowRight className="size-5" data-icon="inline-end" />
                </Button>
                <Button
                  render={<a href={siteConfig.phoneHref} />}
                  size="xl"
                  variant="outline"
                  className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Phone className="size-4.5" data-icon="inline-start" /> {siteConfig.phone}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
                <iframe
                  src={mapEmbedUrl}
                  className="h-72 w-full border-0 sm:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Arise Property Care location — ${siteConfig.fullAddress}`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/40 to-transparent p-5 pt-14">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-emerald-400">
                    Our Base
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{siteConfig.fullAddress}</p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-emerald-300 underline underline-offset-2 hover:text-brand-emerald-200"
                  >
                    Get Directions <Navigation className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        ) : (
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Ready for a spotless space, without the hassle?
            </h2>
            <p className="mt-4 text-balance text-lg text-white/70">
              Get a free, no-obligation quote in minutes — most bookings are confirmed within
              24–48 hours.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button
                render={<Link href="/quote" />}
                size="xl"
                className="bg-brand-emerald-600 text-white hover:bg-brand-emerald-500 rounded-full"
              >
                Get Free Quote <ArrowRight className="size-5" data-icon="inline-end" />
              </Button>
              <Button
                render={<a href={siteConfig.phoneHref} />}
                size="xl"
                variant="outline"
                className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Phone className="size-4.5" data-icon="inline-start" /> {siteConfig.phone}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
