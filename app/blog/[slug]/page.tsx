import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, jsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { QuickAnswer } from "@/components/shared/quick-answer";
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

  return (
    <div className="pt-24 xl:pt-[8.5rem]">
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

        <div className="relative mt-8 h-56 w-full overflow-hidden sm:h-72">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

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
              <div className="sticky top-28 overflow-hidden rounded-2xl border border-brand-grey-200">
                <div className="relative h-48 w-full">
                  <Image
                    src="/photos/team-members.jpg"
                    alt="The Arise Property Care cleaning team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-navy-900">
                    Meet the Arise Property Care team
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey-600">
                    Fully insured, police-checked and based right here in Seven Hills — get to
                    know the team behind every clean.
                  </p>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald-600"
                  >
                    About us <ArrowRight className="size-3.5" />
                  </Link>
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
