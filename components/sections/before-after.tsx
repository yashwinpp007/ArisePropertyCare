"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const pairs = [
  {
    key: "kitchen",
    label: "Kitchen Oven",
    before: "/before-after/kitchen-before.jpg",
    after: "/before-after/kitchen-after.jpg",
  },
  {
    key: "bathroom",
    label: "Bathroom",
    before: "/before-after/bathroom-before.jpg",
    after: "/before-after/bathroom-after.jpg",
  },
  {
    key: "toilet",
    label: "Toilet",
    before: "/before-after/toilet-before.jpg",
    after: "/before-after/toilet-after.jpg",
  },
  {
    key: "floor",
    label: "Timber Floor",
    before: "/before-after/floor-before.jpg",
    after: "/before-after/floor-after.jpg",
  },
  {
    key: "wash-basin",
    label: "Wash Basin",
    before: "/before-after/wash-basin-before.jpg",
    after: "/before-after/wash-basin-after.jpg",
  },
];

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(50);
  const current = pairs[active];

  return (
    <section className="bg-brand-grey-50 py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Before &amp; After"
          title="See the Arise Property Care difference"
          subtitle="Real results from real jobs — drag the slider to compare."
        />

        <Reveal className="mx-auto mt-14 max-w-sm">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {pairs.map((pair, index) => (
              <button
                key={pair.key}
                onClick={() => {
                  setActive(index);
                  setValue(50);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === index
                    ? "bg-brand-navy-900 text-white"
                    : "bg-white text-brand-grey-600 border border-brand-grey-200 hover:border-brand-emerald-300"
                }`}
              >
                {pair.label}
              </button>
            ))}
          </div>

          <div className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl border border-brand-grey-200 shadow-lg">
            {/* After (base layer, full image) */}
            <Image
              src={current.after}
              alt={`${current.label} after professional cleaning by Arise Property Care`}
              fill
              sizes="(max-width: 640px) 90vw, 384px"
              className="object-cover"
              priority={false}
            />
            <span className="absolute right-3 top-3 rounded-full bg-brand-emerald-600/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
              After
            </span>

            {/* Before (clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
            >
              <Image
                src={current.before}
                alt={`${current.label} before professional cleaning by Arise Property Care`}
                fill
                sizes="(max-width: 640px) 90vw, 384px"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-brand-navy-950/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                Before
              </span>
            </div>

            {/* Divider handle */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
              style={{ left: `${value}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy-800 shadow-md">
                <MoveHorizontal className="size-4.5" />
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              aria-label={`Comparison slider for ${current.label}: drag to reveal before and after photos`}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
