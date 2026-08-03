import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuickAnswer } from "@/components/shared/quick-answer";
import { AbstractPanel } from "@/components/shared/abstract-panel";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleSchema(post)) }}
      />

      <article>
        <section className="bg-white pb-4 pt-10 sm:pt-14">
          <div className="container-premium">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-brand-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-emerald-700">
                {post.category}
              </span>
              <h1 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl md:text-[2.6rem]">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-brand-grey-500">
                <span>{formatDate(post.date)}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {post.readTimeMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </section>

        <AbstractPanel variant="navy" pattern={2} className="mt-8 h-56 sm:h-72" />

        <div className="container-premium py-12 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <QuickAnswer>{post.quickAnswer}</QuickAnswer>

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <Reveal key={section.heading}>
                    <h2 className="font-heading text-xl font-bold text-brand-navy-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-4 text-[1.05rem] leading-relaxed text-brand-grey-600">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    {section.list && (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[1.02rem] text-brand-grey-600">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-emerald-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-brand-grey-200 bg-brand-grey-50 p-7">
                <h3 className="font-heading text-lg font-semibold text-brand-navy-900">
                  Need a hand with this?
                </h3>
                <p className="mt-2 text-sm text-brand-grey-600">
                  Arise Property Care handles the cleaning so you don&apos;t have to. Get a free,
                  no-obligation quote in minutes.
                </p>
                <Link
                  href="/quote"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald-600"
                >
                  Get a free quote <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-28">
                <h3 className="font-heading text-lg font-semibold text-brand-navy-900">
                  More from the blog
                </h3>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-brand-grey-200 p-4 hover:border-brand-emerald-200 hover:shadow-sm"
                    >
                      <span className="flex-1">
                        <span className="block text-sm font-semibold leading-snug text-brand-navy-900">
                          {related.title}
                        </span>
                        <span className="mt-1 block text-xs text-brand-grey-500">
                          {related.readTimeMinutes} min read
                        </span>
                      </span>
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-brand-grey-300 group-hover:text-brand-emerald-600" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CtaSection />
    </div>
  );
}
