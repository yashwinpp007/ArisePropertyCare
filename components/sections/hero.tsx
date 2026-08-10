"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, BadgeCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  { icon: Star, label: `${siteConfig.stats.googleRating} Google Rating`, sub: `${siteConfig.stats.googleReviewCount}+ reviews` },
  { icon: Users, label: `${siteConfig.stats.yearsExperience}+ Years`, sub: "Experience" },
  { icon: ShieldCheck, label: "Fully Insured", sub: "Public liability" },
  { icon: BadgeCheck, label: "Police Checked", sub: "Every cleaner" },
];

const slides = [
  { src: "/photos/hero-team-1.jpg", alt: "The Arise Property Care team with their cleaning cart in a Sydney building lobby" },
  { src: "/photos/hero-team-2.jpg", alt: "The Arise Property Care team standing beneath their logo in a Sydney building" },
];

const SLIDE_INTERVAL_MS = 6000;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-950 pt-24 xl:pt-[8.5rem]">
      {/* Desktop ambient background — full-bleed photo behind the content */}
      <div className="absolute inset-0 -z-10 hidden lg:block">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            aria-hidden={active !== i}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-[85%_35%] opacity-75"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-brand-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950/90 via-brand-navy-950/55 to-brand-navy-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,112,72,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_20%,rgba(16,148,95,0.16),transparent)]" />
        <div className="absolute inset-0 bg-grid-navy opacity-40" />
        <svg
          className="absolute left-1/2 top-[8%] h-[85%] w-auto -translate-x-1/2 text-white/[0.035]"
          viewBox="0 0 200 180"
          fill="none"
          aria-hidden="true"
        >
          <path d="M100 4 L196 176 L4 176 Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 44 L164 160 L36 160 Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy-950 to-transparent" />
      </div>

      {/* Mobile/tablet — clearly visible photo band up top, text below on solid navy */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:hidden">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            aria-hidden={active !== i}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-[50%_15%]"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-brand-navy-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-navy-950 to-transparent" />

        {/* Mobile slideshow dots */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1} of ${slides.length}`}
              aria-current={active === i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-brand-emerald-400" : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container-premium relative grid grid-cols-1 gap-12 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-20 lg:pt-14">
        {/* Left — headline */}
        <div>
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm"
          >
            <span className="flex items-center gap-0.5 text-brand-emerald-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
            Rated {siteConfig.stats.googleRating}/5 by Sydney homes &amp; businesses
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-xl font-light text-white/55 sm:text-2xl"
          >
            More time for what matters —
          </motion.p>

          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 max-w-xl text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.4rem]"
          >
            Professional Cleaning{" "}
            <span className="text-brand-emerald-400">Services You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-white/70"
          >
            Residential, commercial and end of lease cleaning across Sydney —
            delivered by fully insured, police-checked cleaning teams.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row"
          >
            <Button
              render={<a href="#hero-quote-form" />}
              size="xl"
              className="bg-brand-emerald-600 text-white hover:bg-brand-emerald-500 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_40px_-12px_rgba(0,112,72,0.55)]"
            >
              Get Free Quote <ArrowRight className="size-5" data-icon="inline-end" />
            </Button>
            <Button
              render={<a href={siteConfig.phoneHref} />}
              size="xl"
              variant="outline"
              className="rounded-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4.5" data-icon="inline-start" /> Call Now — {siteConfig.phone}
            </Button>
          </motion.div>

          <motion.dl
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8"
          >
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-brand-emerald-400">
                  <Icon className="size-5" />
                </span>
                <div className="leading-tight">
                  <dt className="text-[0.95rem] font-semibold text-white">{label}</dt>
                  <dd className="text-xs text-white/50">{sub}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — embedded quote form */}
        <motion.div
          id="hero-quote-form"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5 sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-emerald-600">
            Free &amp; No-Obligation
          </p>
          <h2 className="mt-1 font-heading text-xl font-bold text-brand-navy-900">
            Get Your Free Quote
          </h2>
          <p className="mt-1 text-sm text-brand-grey-500">
            Tell us a little about your property — most quotes are sent back the same business
            day.
          </p>
          <div className="mt-4">
            <QuoteForm compact />
          </div>
        </motion.div>
      </div>

      {/* Slideshow indicator dots — desktop only (mobile has its own in the photo band) */}
      <div className="absolute bottom-6 left-6 z-10 hidden gap-2 sm:bottom-8 sm:left-10 lg:flex">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1} of ${slides.length}`}
            aria-current={active === i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-8 bg-brand-emerald-400" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
