import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { siteConfig, legalLinks } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { suburbs } from "@/lib/data/locations";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/social-icons";

const footerServices = services.slice(0, 8);
const footerSuburbs = suburbs.filter((s) => !s.isHub).slice(0, 8);

export function Footer() {
  return (
    <footer className="bg-brand-navy-950 text-white/70">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6 lg:gap-8">
          <div className="col-span-2 md:col-span-2">
            <Logo onDark className="mb-5" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Arise Property Care on Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-emerald-400 hover:text-brand-emerald-400"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Arise Property Care on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-emerald-400 hover:text-brand-emerald-400"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                aria-label="Arise Property Care on LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-emerald-400 hover:text-brand-emerald-400"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/locations" className="hover:text-white">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              {footerSuburbs.map((s) => (
                <li key={s.slug}>
                  <Link href={`/locations/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="font-medium text-brand-emerald-400 hover:text-brand-emerald-300">
                  View all areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-2.5 hover:text-white">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-emerald-400" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-start gap-2.5 hover:text-white break-all">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-emerald-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-emerald-400" />
                <span>{siteConfig.fullAddress}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-emerald-400" />
                <span>
                  Mon–Fri: 7am–7pm
                  <br />
                  Sat: 8am–4pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
