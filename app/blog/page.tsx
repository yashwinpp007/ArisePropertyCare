import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { AbstractPanel } from "@/components/shared/abstract-panel";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Cleaning Tips & Guides | Arise Property Care Blog",
  description:
    "Practical cleaning advice, end of lease checklists and property care guides from the Arise Property Care team, based in Seven Hills, Sydney.",
  path: "/blog",
});

const patterns = [1, 2, 3, 4] as const;
const variants = ["navy", "emerald", "slate"] as const;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 sm:py-20">
        <div className="container-premium">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
          <div className="mt-6 max-w-2xl">
            <h1 className="text-balance font-heading text-4xl font-bold tracking-tight text-brand-navy-900 sm:text-5xl">
              Cleaning tips &amp; property care guides
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-grey-600">
              Practical, Sydney-specific advice from our cleaning team — checklists, standards
              and answers to the questions we hear most.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-grey-50 py-16 sm:py-20">
        <div className="container-premium">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-grey-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-emerald-200 hover:shadow-xl"
                >
                  <AbstractPanel
                    variant={variants[index % variants.length]}
                    pattern={patterns[index % patterns.length]}
                    className="h-40"
                  >
                    <span className="relative rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </AbstractPanel>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-brand-grey-500">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" /> {post.readTimeMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-3 font-heading text-lg font-semibold leading-snug text-brand-navy-900">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-grey-500">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald-600">
                      Read article{" "}
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
