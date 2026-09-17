import Link from "next/link";
import type { InsightArticle } from "@/types/content";

export function InsightCard({ category, title, excerpt, date, slug }: InsightArticle) {
  return (
    <article className="flex flex-col border-t border-charcoal/15 pt-7">
      <div className="flex items-center gap-3 text-xs">
        <span className="font-semibold uppercase tracking-wide-cap text-burgundy">{category}</span>
        <span className="text-charcoal/30">&mdash;</span>
        <span className="text-charcoal/50">{date}</span>
      </div>
      <h3 className="mt-4 font-serif text-xl leading-snug text-charcoal sm:text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{excerpt}</p>
      <Link
        href={`/insights#${slug}`}
        className="link-underline mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide-cap text-burgundy"
      >
        Read More
      </Link>
    </article>
  );
}
