import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { QuoteForm } from "@/components/forms/quote-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Arise Property Care Sydney",
  description:
    "Get in touch with Arise Property Care — call, email or request a free quote. Based in Seven Hills, servicing Greater Sydney.",
  path: "/contact",
});

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.fullAddress
)}`;

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.fullAddress
)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <div className="bg-white pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])),
        }}
      />

      <div className="container-premium py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-brand-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-emerald-700">
            Contact Us
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
            Whether you need a quote, have a question about a service, or want to discuss a
            recurring contract — reach out and our team will respond the same business day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a
            href={siteConfig.phoneHref}
            className="group rounded-2xl border border-brand-grey-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy-900/5 text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white">
              <Phone className="size-5" />
            </span>
            <p className="mt-4 text-sm font-semibold text-brand-navy-900">Call Us</p>
            <p className="mt-1 text-sm text-brand-grey-500">{siteConfig.phone}</p>
          </a>

          <a
            href={siteConfig.emailHref}
            className="group rounded-2xl border border-brand-grey-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy-900/5 text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white">
              <Mail className="size-5" />
            </span>
            <p className="mt-4 text-sm font-semibold text-brand-navy-900">Email Us</p>
            <p className="mt-1 break-all text-sm text-brand-grey-500">{siteConfig.email}</p>
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-brand-grey-200 p-6 transition-all hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-lg"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy-900/5 text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white">
              <MapPin className="size-5" />
            </span>
            <p className="mt-4 text-sm font-semibold text-brand-navy-900">Visit Us</p>
            <p className="mt-1 text-sm text-brand-grey-500">{siteConfig.fullAddress}</p>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-grey-200 bg-brand-grey-50 p-6 shadow-sm sm:p-9">
              <h2 className="font-heading text-2xl font-bold text-brand-navy-900">Send a message</h2>
              <p className="mt-1.5 text-sm text-brand-grey-500">
                Prefer a form over the phone? Fill this out and we&apos;ll get back to you.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-brand-grey-200">
              <iframe
                src={mapEmbedUrl}
                className="h-64 w-full border-0 sm:h-72"
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

            <div className="rounded-2xl border border-brand-grey-200 p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand-emerald-50 text-brand-emerald-600">
                <Clock className="size-5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-brand-navy-900">Business Hours</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-grey-600">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-brand-grey-100 pb-2 last:border-0">
                    <span>{h.day}</span>
                    <span className="font-medium text-brand-navy-800">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-brand-grey-500">
              Looking for a specific suburb?{" "}
              <Link href="/locations" className="font-medium text-brand-emerald-600 underline underline-offset-2">
                Browse our service areas
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
