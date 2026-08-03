import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { suburbs } from "@/lib/data/locations";
import { sydneyRegions } from "@/lib/data/regions";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

const nonHubSuburbs = suburbs.filter((s) => !s.isHub);
const ringSuburbs = nonHubSuburbs.filter((s) => !s.isHQ);
const ring1 = ringSuburbs.slice(0, 6);
const ring2 = ringSuburbs.slice(6, 12);

function ringPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    left: `${50 + radius * Math.cos(angle)}%`,
    top: `${50 + radius * Math.sin(angle)}%`,
  };
}

export function ServiceAreas() {
  return (
    <section className="bg-brand-navy-950 py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly servicing the entire Sydney metro"
          subtitle="Based in Seven Hills, our teams service homes and businesses right across Greater Sydney — find your suburb below."
          onDark
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-[12%] rounded-full border border-white/10" />
              <div className="absolute inset-[28%] rounded-full border border-white/10" />
              <div className="absolute inset-[42%] rounded-full border border-dashed border-white/15" />

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="relative flex size-4 items-center justify-center rounded-full bg-brand-emerald-400">
                  <span className="absolute size-4 animate-ping rounded-full bg-brand-emerald-400/60" />
                </span>
                <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy-900">
                  Seven Hills HQ
                </span>
              </div>

              {ring2.map((s, i) => {
                const pos = ringPosition(i, ring2.length, 42);
                return (
                  <span
                    key={s.slug}
                    style={{ left: pos.left, top: pos.top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-medium text-white/80 backdrop-blur-sm"
                  >
                    {s.name}
                  </span>
                );
              })}
              {ring1.map((s, i) => {
                const pos = ringPosition(i, ring1.length, 25);
                return (
                  <span
                    key={s.slug}
                    style={{ left: pos.left, top: pos.top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-emerald-500/20 px-2 py-0.5 text-[0.6rem] font-medium text-brand-emerald-200"
                  >
                    {s.name}
                  </span>
                );
              })}
            </div>
          </Reveal>

          <div>
            <StaggerGroup className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {nonHubSuburbs.map((suburb) => (
                <StaggerItem key={suburb.slug}>
                  <Link
                    href={`/locations/${suburb.slug}`}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2.5 text-sm text-white/75 transition-colors hover:border-brand-emerald-400/40 hover:bg-white/5 hover:text-white"
                  >
                    <MapPin className="size-3.5 shrink-0 text-brand-emerald-400" />
                    <span className="truncate">{suburb.name}</span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button render={<Link href="/locations" />} className="rounded-full bg-white text-brand-navy-900 hover:bg-white/90">
                View all service areas <ArrowRight className="size-4" data-icon="inline-end" />
              </Button>
              <span className="text-sm text-white/50">
                Don&apos;t see your suburb? We likely still service it — {" "}
                <Link href="/contact" className="text-brand-emerald-400 underline underline-offset-2">
                  get in touch
                </Link>
                .
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-14">
          <Reveal>
            <h3 className="text-center font-heading text-xl font-bold text-white sm:text-2xl">
              We service the entire Sydney metro
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-white/60">
              From the CBD to the coast — our teams cover every corner of Greater Sydney.
            </p>
          </Reveal>
          <StaggerGroup className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {sydneyRegions.map((region) => (
              <StaggerItem key={region.name}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald-400" />
                  <span className="text-sm">
                    <span className="font-medium text-white">{region.name}</span>
                    <span className="text-white/45"> — {region.examples}</span>
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
