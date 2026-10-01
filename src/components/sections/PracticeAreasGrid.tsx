import { practiceAreas } from "@/lib/content";
import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type PracticeAreasGridProps = {
  variant?: "preview" | "full";
};

export function PracticeAreasGrid({ variant = "preview" }: PracticeAreasGridProps) {
  const areas = practiceAreas;

  return (
    <section className="px-3 pb-6 sm:px-6">
      <div className="mx-auto max-w-[88rem] rounded-[2rem] bg-charcoal px-6 py-16 sm:rounded-[3rem] sm:px-14 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {variant === "preview" ? (
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <SectionEyebrow tone="gold">Our practice</SectionEyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-[0.98] font-medium tracking-tight text-white">
                Focused counsel, <span className="text-antique-gold italic">across every matter.</span>
              </h2>
              <div className="mt-10">
                <Button href="/practice-areas" variant="light">
                  All practice areas
                </Button>
              </div>
            </Reveal>
          ) : (
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <SectionEyebrow tone="gold">Five areas</SectionEyebrow>
              <p className="mt-5 max-w-xs font-serif text-3xl italic leading-snug text-white/80">
                Every matter, handled with care.
              </p>
            </Reveal>
          )}

          <div>
            {areas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 60}>
                <PracticeAreaCard {...area} index={index} detailed={variant === "full"} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
