import { representGroups } from "@/lib/content";
import { RepresentColumn } from "@/components/cards/RepresentColumn";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function WhoWeRepresent() {
  return (
    <section className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-28">
        <Reveal>
          <SectionEyebrow>Who We Represent</SectionEyebrow>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {representGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <RepresentColumn {...group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
