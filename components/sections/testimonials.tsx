"use client";

import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Sydney locals say about us"
          subtitle={`Rated ${siteConfig.stats.googleRating}/5 from ${siteConfig.stats.googleReviewCount}+ verified Google reviews.`}
        />

        <div className="mx-auto mt-14 max-w-6xl px-2 sm:px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-2xl border border-brand-grey-200 bg-brand-grey-50 p-6">
                    <Quote className="size-7 text-brand-emerald-300" />
                    <div className="mt-3 flex gap-0.5 text-brand-emerald-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-navy-800">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-grey-200 pt-4">
                      <span className="flex size-10 items-center justify-center rounded-full bg-brand-navy-900 text-xs font-semibold text-white">
                        {t.initials}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-navy-900">{t.name}</span>
                        <span className="block text-xs text-brand-grey-500">
                          {t.location} · {t.service}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-brand-grey-200" />
            <CarouselNext className="border-brand-grey-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
