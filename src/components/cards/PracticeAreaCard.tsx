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
  return (
    <div
      id={slug}
      className="group relative flex h-full flex-col justify-between p-8 scroll-mt-24 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-burgundy before:transition-transform before:duration-300 hover:before:scale-x-100"
    >
      <div>
        <span className="eyebrow text-antique-gold">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-4 font-serif text-xl text-charcoal sm:text-2xl">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{description}</p>
      </div>

      {!detailed && (
        <Link
          href={`/practice-areas#${slug}`}
          className="link-underline mt-8 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide-cap text-burgundy"
        >
          Explore
        </Link>
      )}
    </div>
  );
}
