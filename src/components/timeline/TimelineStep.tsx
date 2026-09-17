import type { ApproachStep } from "@/types/content";

export function TimelineStep({ number, step, description, isLast }: ApproachStep & { isLast?: boolean }) {
  return (
    <div className="relative flex gap-8 pb-16 last:pb-0 sm:gap-12">
      <div className="flex flex-col items-center">
        <span className="font-serif text-sm text-antique-gold">{number}</span>
        <span className="mt-3 h-3 w-3 shrink-0 rounded-full border border-burgundy" />
        {!isLast && <span className="mt-3 w-px flex-1 bg-charcoal/15" />}
      </div>
      <div className="pt-1">
        <h3 className="font-serif text-2xl text-charcoal sm:text-3xl">{step}</h3>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-charcoal/70">{description}</p>
      </div>
    </div>
  );
}
