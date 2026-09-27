import { Blobs } from "@/components/ui/Blobs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent: string;
};

export function PageHero({ eyebrow, title, accent }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 sm:pb-16 sm:pt-44">
      <Blobs />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3rem,7vw,6.25rem)] leading-[0.98] font-medium tracking-tight text-charcoal">
            {title} <span className="text-burgundy italic">{accent}</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
