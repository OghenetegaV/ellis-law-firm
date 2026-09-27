import { representGroups } from "@/lib/content";
import { RepresentColumn } from "@/components/cards/RepresentColumn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function WhoWeRepresent() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionEyebrow>Who we represent</SectionEyebrow>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-none font-medium tracking-tight">
            For every <span className="text-burgundy italic">kind of client.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {representGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 120} className="h-full">
              <RepresentColumn {...group} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
