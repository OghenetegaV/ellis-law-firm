import Link from "next/link";
import type { PracticeArea } from "@/types/content";

type PracticeAreaCardProps = PracticeArea & {
  index: number;
  detailed?: boolean;
};

export function PracticeAreaCard({
  slug,
  title,
  description,
  index,
  detailed = false,
}: PracticeAreaCardProps) {
  const content = (
    <>
      <span className="w-10 shrink-0 pt-1 font-serif text-xl italic text-antique-gold sm:w-14 sm:text-2xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h3 className="font-serif text-3xl leading-tight text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">{description}</p>
      </div>
      <span
        aria-hidden="true"
        className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-antique-gold group-hover:bg-antique-gold group-hover:text-charcoal"
      >
        &rarr;
      </span>
    </>
  );

  const rowClasses =
    "group flex items-start gap-4 border-b border-white/12 py-7 transition-colors duration-500 hover:border-antique-gold/60 sm:gap-6 scroll-mt-32";

  if (detailed) {
    return (
      <div id={slug} className={rowClasses}>
        {content}
      </div>
    );
  }

  return (
    <Link href={`/practice-areas#${slug}`} className={rowClasses}>
      {content}
    </Link>
  );
}
