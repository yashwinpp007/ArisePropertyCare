"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-grey-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-[0_24px_50px_-20px_rgba(0,32,80,0.18)]"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 31vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/60 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-brand-navy-800 backdrop-blur-sm transition-colors group-hover:bg-brand-emerald-600 group-hover:text-white">
          <DynamicIcon name={service.icon} className="size-5" />
        </span>
        <ArrowUpRight className="absolute right-3 top-3 size-5 text-white/80 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-brand-navy-900">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-grey-500">{service.tagline}</p>
      </div>
    </Link>
  );
}

export function ServicesGrid({
  showHeading = true,
  carousel = false,
}: {
  showHeading?: boolean;
  carousel?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    if (!carousel) return;
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carousel]);

  const scrollByPage = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-brand-grey-50 py-24 sm:py-32">
      <div className="container-premium">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Offer"
            title="A cleaning service for every property"
            subtitle="From weekly house cleans to strata contracts and construction handovers — one trusted team across Sydney."
          />
        )}

        {carousel ? (
          <div className={`relative ${showHeading ? "mt-14" : ""}`}>
            <div
              ref={scrollRef}
              className="grid grid-flow-col grid-rows-2 gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden auto-cols-[85%] sm:auto-cols-[46%] lg:auto-cols-[31.5%]"
            >
              {services.map((service) => (
                <div key={service.slug} className="snap-start">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Show previous services"
              onClick={() => scrollByPage("left")}
              disabled={!canScrollLeft}
              className="absolute -left-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-grey-200 bg-white text-brand-navy-800 shadow-lg transition-opacity hover:bg-brand-emerald-50 disabled:pointer-events-none disabled:opacity-0 sm:flex"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Show more services"
              onClick={() => scrollByPage("right")}
              disabled={!canScrollRight}
              className="absolute -right-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-grey-200 bg-white text-brand-navy-800 shadow-lg transition-opacity hover:bg-brand-emerald-50 disabled:pointer-events-none disabled:opacity-0 sm:flex"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        ) : (
          <StaggerGroup
            className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}
          >
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        )}
      </div>
    </section>
  );
}
