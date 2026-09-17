type SectionEyebrowProps = {
  children: string;
  tone?: "burgundy" | "gold" | "sage";
  className?: string;
};

const toneClasses: Record<NonNullable<SectionEyebrowProps["tone"]>, string> = {
  burgundy: "text-burgundy",
  gold: "text-antique-gold",
  sage: "text-sage",
};

export function SectionEyebrow({ children, tone = "burgundy", className }: SectionEyebrowProps) {
  return (
    <span className={`eyebrow block ${toneClasses[tone]} ${className ?? ""}`}>{children}</span>
  );
}
