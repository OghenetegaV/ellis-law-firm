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
    <section className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-28">
        <Reveal>
          <SectionEyebrow>Insights</SectionEyebrow>
          <h2 className="mt-6 max-w-lg font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Perspectives on law, business and the issues that matter.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {insightArticles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 100}>
              <InsightCard {...article} />
            </Reveal>
          ))}
        </div>

        {variant === "preview" && (
          <div className="mt-12">
            <Button href="/insights" variant="secondary">
              View All Insights
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
