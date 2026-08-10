import Link from "next/link";
import { Home, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white pt-24 xl:pt-[8.5rem]">
      <div className="container-premium py-20 text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-emerald-50 text-brand-emerald-600">
          <Search className="size-7" />
        </span>
        <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-widest text-brand-emerald-600">
          404
        </p>
        <h1 className="mt-2 text-balance font-heading text-3xl font-bold text-brand-navy-900 sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-grey-500">
          The page you&apos;re looking for may have moved. Try heading back home, or explore our
          services and service areas.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/" />} className="rounded-full bg-brand-emerald-600 text-white hover:bg-brand-emerald-700">
            <Home className="size-4" data-icon="inline-start" /> Back to Home
          </Button>
          <Button render={<Link href="/services" />} variant="outline" className="rounded-full">
            View Services <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </div>
  );
}
