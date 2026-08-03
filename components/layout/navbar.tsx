"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { siteConfig, navLinks } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md border-b border-brand-grey-200 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-premium flex h-24 items-center justify-between"
      >
        <Logo onDark={transparent} size="lg" />

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
                    transparent
                      ? "text-white/90 hover:text-white"
                      : "text-brand-navy-800 hover:text-brand-emerald-600"
                  )}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={cn("size-3.5 transition-transform", servicesOpen && "rotate-180")} />
                </button>

                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200",
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="rounded-2xl border border-brand-grey-200 bg-white p-5 shadow-2xl shadow-brand-navy-900/10">
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-emerald-50"
                        >
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-navy-800/5 text-brand-navy-800 group-hover:bg-brand-emerald-600 group-hover:text-white transition-colors">
                            <DynamicIcon name={service.icon} className="size-4.5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-brand-navy-900">
                              {service.shortName}
                            </span>
                            <span className="block text-xs text-brand-grey-500 leading-snug mt-0.5">
                              {service.tagline}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-xl bg-brand-navy-900 px-5 py-4">
                      <p className="text-sm text-white/90">
                        Not sure what you need? We&apos;ll help you choose.
                      </p>
                      <Link
                        href="/quote"
                        className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-emerald-300 hover:text-brand-emerald-200"
                      >
                        Get a free quote <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-brand-navy-800 hover:text-brand-emerald-600"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              transparent ? "text-white" : "text-brand-navy-800"
            )}
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </a>
          <Button render={<Link href="/quote" />} variant="default" className="bg-brand-emerald-600 hover:bg-brand-emerald-700 text-white rounded-full px-5">
            Get Free Quote
          </Button>
        </div>

        <MobileMenu transparent={transparent} />
      </nav>
    </header>
  );
}
