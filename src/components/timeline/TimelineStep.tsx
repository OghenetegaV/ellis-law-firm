import type { ApproachStep } from "@/types/content";

export function TimelineStep({ number, step, description }: ApproachStep) {
  return (
    <div className="flex items-center gap-6 rounded-[2rem] bg-white p-6 shadow-card transition-transform duration-500 hover:-translate-y-1 sm:gap-10 sm:p-8">
      <span className="font-serif text-6xl italic leading-none text-antique-gold sm:text-7xl">
        {number}
      </span>
      <div>
        <h3 className="font-serif text-4xl text-charcoal sm:text-5xl">{step}</h3>
        <p className="mt-2 text-base text-charcoal/65">{description}</p>
      </div>
    </div>
  );
}
