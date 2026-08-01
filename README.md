# Arise Property Care

Marketing website for Arise Property Care Pty Ltd — Sydney cleaning services. Built with
Next.js 15, React 19, TypeScript, Tailwind CSS v4, shadcn/ui and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` to enable the quote/contact form
to actually send emails to `info@arisepropertycare.com.au` via [Resend](https://resend.com).
Without it, the form validates and displays a friendly fallback message directing visitors to
call or email directly — it will not silently lose leads.

## Project structure

- `app/` — routes (App Router). Dynamic routes: `services/[slug]`, `locations/[slug]`, `blog/[slug]`.
- `components/sections/` — homepage section components (Hero, Services, FAQ, etc.)
- `components/layout/` — Navbar, Footer, mobile menu, sticky mobile CTA
- `components/shared/` — reusable primitives (Reveal animations, Breadcrumbs, icons)
- `components/ui/` — shadcn/ui primitives
- `lib/data/` — content data (services, suburbs, blog posts, testimonials, FAQs) — edit these
  to add new services, suburbs or articles without touching page templates
- `lib/schema.ts` — JSON-LD structured data generators
- `lib/seo.ts` — per-page metadata helper

## Adding a new suburb or service

Add an entry to `lib/data/locations.ts` or `lib/data/services.ts` — the corresponding
`/locations/[slug]` or `/services/[slug]` page, sitemap entry and internal links are generated
automatically.

## Build

```bash
npm run build
npm run start
```
