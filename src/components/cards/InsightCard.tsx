import Link from "next/link";
import type { InsightArticle } from "@/types/content";

export function InsightCard({ category, title, date, slug }: InsightArticle) {
  return (
    <Link
      href={`/insights#${slug}`}
      id={slug}
      className="group flex h-full min-h-[20rem] scroll-mt-32 flex-col justify-between rounded-[2rem] bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-burgundy/10 px-4 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-burgundy">
          {category}
        </span>
        <span className="text-xs text-charcoal/50">{date}</span>
      </div>
      <div>
        <h3 className="font-serif text-3xl leading-tight text-charcoal">{title}</h3>
        <span className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-all duration-500 group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
