import Image from "next/image";
import { ShieldCheck, Star, Settings2 } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

const traits = [
  { icon: ShieldCheck, label: "Reliable" },
  { icon: Star, label: "Experienced" },
  { icon: Settings2, label: "Flexible" },
];

export function QualityGuarantee() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-premium grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(ellipse_60%_60%_at_50%_45%,rgba(0,112,72,0.08),transparent)]" />
          <Image
            src="/photos/workers-cutout.png"
            alt="Two Arise Property Care cleaners giving a thumbs up"
            width={1200}
            height={1152}
            className="mx-auto h-auto w-full max-w-sm lg:max-w-md"
          />
        </Reveal>

        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
            You&apos;ll love our cleaning quality —{" "}
            <span className="text-brand-emerald-600">guaranteed.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-grey-600">
            Every Arise Property Care cleaner is trained and fully equipped to exceed your
            expectations for service, quality and reliability. We&apos;re so confident in the
            results that every job is backed by our {siteConfig.stats.satisfactionRate}%
            satisfaction guarantee — if you&apos;re not happy with a detail, tell us and
            we&apos;ll come back and fix it, free of charge.
          </p>

          <ul className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
            {traits.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-semibold text-brand-navy-800"
              >
                <Icon className="size-5 text-brand-emerald-600" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-8 border-t border-brand-grey-200 pt-8">
            <Image
              src="/photos/badge-satisfaction.png"
              alt="100% Customer Satisfaction Guaranteed"
              width={200}
              height={200}
              className="h-24 w-auto sm:h-28"
            />
            <Image
              src="/photos/badge-covidsafe.png"
              alt="COVIDSafe certified cleaning team"
              width={200}
              height={200}
              className="h-24 w-auto sm:h-28"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
