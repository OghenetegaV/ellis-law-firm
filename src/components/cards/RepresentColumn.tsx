import type { RepresentGroup } from "@/types/content";

export function RepresentColumn({ title, description }: RepresentGroup) {
  return (
    <div className="border-t border-charcoal/15 pt-7">
      <div className="mb-5 h-px w-10 bg-antique-gold" />
      <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/70">{description}</p>
    </div>
  );
}
