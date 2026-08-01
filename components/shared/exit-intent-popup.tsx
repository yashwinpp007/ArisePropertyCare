"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "apc-exit-intent-shown";
const EXCLUDED_PATHS = ["/quote", "/contact"];

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (EXCLUDED_PATHS.includes(pathname)) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 8000);

    function handleMouseOut(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return;
      if (e.relatedTarget !== null) return;
      if (sessionStorage.getItem(STORAGE_KEY)) return;

      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
      document.removeEventListener("mouseout", handleMouseOut);
    }

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pathname]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md overflow-hidden rounded-2xl border-0 p-0 sm:max-w-md">
        <div className="bg-brand-navy-950 px-7 pb-7 pt-8">
          <DialogHeader className="gap-2">
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-brand-emerald-400">
              <ShieldCheck className="size-5" />
            </span>
            <DialogTitle className="font-heading text-xl font-bold text-white">
              Before you go — get your free quote
            </DialogTitle>
            <DialogDescription className="text-white/65">
              Takes under two minutes. Fully insured, police-checked cleaners across Sydney, with
              no obligation and no hidden fees.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <Button
              render={<Link href="/quote" onClick={() => setOpen(false)} />}
              className="flex-1 rounded-full bg-brand-emerald-600 text-white hover:bg-brand-emerald-500"
            >
              Get Free Quote <ArrowRight className="size-4" data-icon="inline-end" />
            </Button>
            <Button
              render={<a href={siteConfig.phoneHref} />}
              variant="outline"
              className="flex-1 rounded-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="size-4" data-icon="inline-start" /> Call Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
