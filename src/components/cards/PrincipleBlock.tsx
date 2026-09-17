import type { Principle } from "@/types/content";

export function PrincipleBlock({ title, description, index }: Principle & { index: number }) {
  return (
    <div className="flex gap-6 border-t border-white/15 py-7 first:border-t-0 sm:first:border-t">
      <span className="font-serif text-lg text-antique-gold">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-serif text-xl text-white sm:text-2xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">{description}</p>
      </div>
    </div>
  );
}
