import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(0,112,72,0.35),transparent)]" />
      <div className="absolute inset-0 bg-grid-navy opacity-30" />

      <div className="container-premium relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            Ready for a spotless space, without the hassle?
          </h2>
          <p className="mt-4 text-balance text-lg text-white/70">
            Get a free, no-obligation quote in minutes — most bookings are confirmed within 24–48 hours.
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
      </div>
    </section>
  );
}
