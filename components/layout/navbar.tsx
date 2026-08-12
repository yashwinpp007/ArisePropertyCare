"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { siteConfig, navLinks, navMegaMenus } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";

type MegaMenuKey = keyof typeof navMegaMenus;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenuKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      {/* Utility bar */}
      <div className="hidden h-10 items-center justify-end gap-6 bg-brand-navy-950 px-5 text-xs text-white/85 xl:flex 2xl:px-10">
        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-1.5 font-medium transition-colors hover:text-brand-emerald-300"
        >
          <Phone className="size-3.5 shrink-0" />
          Call us on {siteConfig.phone}
        </a>
        <a
          href={siteConfig.emailHref}
          className="flex items-center gap-1.5 font-medium transition-colors hover:text-brand-emerald-300"
        >
          <Mail className="size-3.5 shrink-0" />
          {siteConfig.email}
        </a>
        <Button
          render={<Link href="/quote" />}
          size="xs"
          className="rounded-full bg-brand-emerald-600 px-4 text-white hover:bg-brand-emerald-500"
        >
          Get Free Quote
        </Button>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-md border-b border-brand-grey-200 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-5 md:px-6 2xl:px-10"
        >
          <Logo onDark={transparent} size="lg" pulse />

        <div className="hidden xl:flex items-center">
          {navLinks.map((link) => {
            const megaMenuKey = "megaMenu" in link ? (link.megaMenu as MegaMenuKey) : null;

            if (megaMenuKey) {
              const menuServices = navMegaMenus[megaMenuKey]
                .map((slug) => services.find((s) => s.slug === slug))
                .filter((s): s is NonNullable<typeof s> => Boolean(s));
              const isOpen = openMenu === megaMenuKey;
              const isLarge = menuServices.length > 6;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(megaMenuKey)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.8rem] font-medium transition-colors 2xl:text-[0.85rem]",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-brand-navy-800 hover:text-brand-emerald-600"
                    )}
                    aria-expanded={isOpen}
                  >
                    {link.label}
                    <ChevronDown className={cn("size-3.5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                  </Link>

                  <div
                    className={cn(
                      "transition-all duration-200",
                      isLarge
                        ? "fixed left-1/2 top-[9.25rem] w-[min(900px,calc(100vw-2rem))] -translate-x-1/2"
                        : "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3",
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    )}
                  >
                    <div className="rounded-2xl border border-brand-grey-200 bg-white p-5 shadow-2xl shadow-brand-navy-900/10">
                      <div
                        className={cn(
                          "grid max-h-[70vh] gap-1 overflow-y-auto",
                          isLarge ? "grid-cols-3" : "grid-cols-2"
                        )}
                      >
                        {menuServices.map((service) => (
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
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-[0.8rem] font-medium transition-colors 2xl:text-[0.85rem]",
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-brand-navy-800 hover:text-brand-emerald-600"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

          <MobileMenu transparent={transparent} />
        </nav>
      </div>
    </header>
  );
}
