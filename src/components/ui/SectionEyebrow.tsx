type SectionEyebrowProps = {
  children: string;
  tone?: "burgundy" | "gold" | "light";
  className?: string;
};

const toneClasses: Record<NonNullable<SectionEyebrowProps["tone"]>, string> = {
  burgundy: "text-burgundy",
  gold: "text-antique-gold",
  light: "text-white/80",
};

export function SectionEyebrow({ children, tone = "burgundy", className }: SectionEyebrowProps) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${toneClasses[tone]} ${className ?? ""}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-antique-gold" aria-hidden="true" />
      {children}
    </span>
  );
}
