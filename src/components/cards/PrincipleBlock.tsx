import type { Principle } from "@/types/content";

const tones = [
  "bg-burgundy text-white",
  "bg-charcoal text-white",
  "bg-sand text-charcoal",
  "bg-sage text-charcoal",
  "bg-antique-gold text-charcoal",
];

export function PrincipleBlock({ title, description, index }: Principle & { index: number }) {
  return (
    <div
      className={`group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-[26rem] lg:flex-1 lg:hover:flex-[2.2] ${tones[index % tones.length]}`}
    >
      <span className="font-serif text-xl italic opacity-70">0{index + 1}</span>
      <div>
        <h3 className="font-serif text-4xl leading-none sm:text-5xl">{title}</h3>
        <p className="mt-3 max-w-[16rem] text-sm leading-relaxed opacity-80 lg:translate-y-2 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}
