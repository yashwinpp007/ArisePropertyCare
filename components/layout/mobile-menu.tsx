"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { siteConfig, navLinks, navMegaMenus } from "@/lib/site-config";
import { services } from "@/lib/data/services";

type MegaMenuKey = keyof typeof navMegaMenus;

export function MobileMenu({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<MegaMenuKey | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "xl:hidden flex size-10 items-center justify-center rounded-full transition-colors",
          transparent ? "text-white" : "text-brand-navy-800"
        )}
        aria-label="Open menu"
      >
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:max-w-sm p-0 flex flex-col">
        <SheetHeader className="border-b border-brand-grey-200 px-5 py-4">
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map((link) => {
              const megaMenuKey = "megaMenu" in link ? (link.megaMenu as MegaMenuKey) : null;

              if (megaMenuKey) {
                const isExpanded = expanded === megaMenuKey;
                const menuServices = navMegaMenus[megaMenuKey]
                  .map((slug) => services.find((s) => s.slug === slug))
                  .filter((s): s is NonNullable<typeof s> => Boolean(s));

                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setExpanded(isExpanded ? null : megaMenuKey)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-brand-navy-900 hover:bg-brand-emerald-50"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn("size-4 shrink-0 transition-transform", isExpanded && "rotate-180")}
                      />
                    </button>
                    {isExpanded && (
                      <div className="ml-3 flex flex-col border-l border-brand-grey-200 pl-3">
                        {menuServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm text-brand-grey-700 hover:bg-brand-emerald-50 hover:text-brand-emerald-700"
                          >
                            {service.shortName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-brand-navy-900 hover:bg-brand-emerald-50"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 border-t border-brand-grey-200 pt-4">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-emerald-700 hover:bg-brand-emerald-50"
            >
              View all services <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-brand-grey-600 hover:bg-brand-emerald-50 hover:text-brand-emerald-700"
            >
              About Us
            </Link>
          </div>
        </div>

        <div className="border-t border-brand-grey-200 p-5 space-y-3">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-brand-grey-200 py-3 text-sm font-semibold text-brand-navy-900"
          >
            <Phone className="size-4" /> {siteConfig.phone}
          </a>
          <Button
            render={<Link href="/quote" onClick={() => setOpen(false)} />}
            className="w-full bg-brand-emerald-600 hover:bg-brand-emerald-700 text-white rounded-full"
            size="lg"
          >
            Get Free Quote <ArrowRight className="size-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
