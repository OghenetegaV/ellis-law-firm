import { insightArticles } from "@/lib/content";
import { InsightCard } from "@/components/cards/InsightCard";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type InsightsGridProps = {
  variant?: "preview" | "full";
};

export function InsightsGrid({ variant = "preview" }: InsightsGridProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {variant === "preview" && (
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>Insights</SectionEyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-none font-medium tracking-tight">
                Perspectives on <span className="text-burgundy italic">law and business.</span>
              </h2>
            </div>
            <Button href="/insights" variant="secondary">
              All insights
            </Button>
          </Reveal>
        )}

        <div className={`grid gap-6 md:grid-cols-3 ${variant === "preview" ? "mt-12" : ""}`}>
          {insightArticles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 120} className="h-full">
              <InsightCard {...article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
