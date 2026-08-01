import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items, onDark = false }: { items: BreadcrumbItem[]; onDark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbSchema(items)) }}
      />
      <Link
        href="/"
        aria-label="Home"
        className={onDark ? "text-white/50 hover:text-white" : "text-brand-grey-500 hover:text-brand-navy-800"}
      >
        <Home className="size-3.5" />
      </Link>
      {items.slice(1).map((item, index) => {
        const isLast = index === items.slice(1).length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1.5">
            <ChevronRight className={onDark ? "size-3.5 text-white/30" : "size-3.5 text-brand-grey-300"} />
            {isLast ? (
              <span className={onDark ? "font-medium text-white" : "font-medium text-brand-navy-900"} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path}
                className={onDark ? "text-white/50 hover:text-white" : "text-brand-grey-500 hover:text-brand-navy-800"}
              >
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
