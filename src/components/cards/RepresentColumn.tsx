import type { RepresentGroup } from "@/types/content";

export function RepresentColumn({ title, description, index }: RepresentGroup & { index: number }) {
  return (
    <div className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:bg-burgundy sm:p-10">
      <span className="font-serif text-6xl italic text-antique-gold transition-colors duration-500">
        0{index + 1}
      </span>
      <div>
        <h3 className="font-serif text-4xl text-charcoal transition-colors duration-500 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-charcoal/65 transition-colors duration-500 group-hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}
