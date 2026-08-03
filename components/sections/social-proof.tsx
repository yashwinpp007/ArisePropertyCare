import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { StatCounter } from "@/components/shared/stat-counter";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  { value: siteConfig.stats.googleRating, decimals: 1, suffix: "/5", label: "Google Rating" },
  { value: siteConfig.stats.jobsCompleted, suffix: "+", label: "Jobs Completed" },
  { value: siteConfig.stats.yearsExperience, suffix: "+", label: "Years Experience" },
  { value: siteConfig.stats.satisfactionRate, suffix: "%", label: "Satisfaction Rate" },
];

export function SocialProof() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-premium">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-grey-200 bg-brand-grey-200 shadow-[0_24px_60px_-24px_rgba(0,32,80,0.25)] sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center sm:px-4">
                <p className="font-heading text-3xl font-bold text-brand-navy-900 sm:text-4xl">
                  {stat.label === "Google Rating" && (
                    <Star className="mb-1 inline-block size-6 -translate-y-0.5 fill-brand-emerald-500 text-brand-emerald-500" />
                  )}
                  <StatCounter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-sm font-medium text-brand-grey-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
