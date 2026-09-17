import { practiceAreas } from "@/lib/content";
import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type PracticeAreasGridProps = {
  variant?: "preview" | "full";
};

export function PracticeAreasGrid({ variant = "preview" }: PracticeAreasGridProps) {
  const areas = variant === "preview" ? practiceAreas.slice(0, 6) : practiceAreas;
  const lgFillerCount = (3 - (areas.length % 3)) % 3;

  return (
    <section className={variant === "preview" ? "border-t border-charcoal/10 bg-white" : "bg-white"}>
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-28">
        {variant === "preview" && (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionEyebrow>Our Practice</SectionEyebrow>
              <h2 className="mt-6 max-w-lg font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
                Focused counsel across the matters that shape your interests.
              </h2>
            </Reveal>
          </div>
        )}

        <div
          className={`grid gap-px overflow-hidden border border-charcoal/12 bg-charcoal/12 sm:grid-cols-2 lg:grid-cols-3 ${
            variant === "preview" ? "mt-14" : ""
          }`}
        >
          {areas.map((area, index) => (
            <div key={area.slug} className="bg-white">
              <PracticeAreaCard {...area} index={index} detailed={variant === "full"} />
            </div>
          ))}
          {Array.from({ length: lgFillerCount }).map((_, index) => (
            <div key={`filler-${index}`} className="hidden bg-white lg:block" aria-hidden="true" />
          ))}
        </div>

        {variant === "preview" && (
          <div className="mt-12">
            <Button href="/practice-areas" variant="secondary">
              View All Practice Areas
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
