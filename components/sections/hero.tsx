"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Star, ShieldCheck, BadgeCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  { icon: Star, label: `${siteConfig.stats.googleRating} Google Rating`, sub: `${siteConfig.stats.googleReviewCount}+ reviews` },
  { icon: Users, label: `${siteConfig.stats.yearsExperience}+ Years`, sub: "Experience" },
  { icon: ShieldCheck, label: "Fully Insured", sub: "Public liability" },
  { icon: BadgeCheck, label: "Police Checked", sub: "Every cleaner" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy-950 pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%_35%] opacity-45"
        />
        <div className="absolute inset-0 bg-brand-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/85 to-transparent" />
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

      <div className="container-premium relative flex min-h-[92vh] flex-col justify-center pb-28 pt-16 sm:pb-32">
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

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Professional Cleaning{" "}
          <span className="text-brand-emerald-400">Services You Can Trust</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          Residential, commercial and end of lease cleaning across Sydney —
          delivered by fully insured, police-checked cleaning teams.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col gap-3.5 sm:flex-row"
        >
          <Button
            render={<Link href="/quote" />}
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
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-9 sm:grid-cols-4 sm:gap-4"
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
    </section>
  );
}
