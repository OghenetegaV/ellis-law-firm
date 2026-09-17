import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ColumnMotif } from "@/components/graphics/ColumnMotif";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionEyebrow>The ELLIS Approach</SectionEyebrow>
            <h2 className="mt-6 max-w-lg font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Law with purpose. Counsel with clarity.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
              Built on the belief that every lawful liberty is significant, ELLIS provides
              strategic legal counsel and representation grounded in clarity, precision and
              purpose. We work with individuals, businesses and organisations navigating legal
              questions, commercial interests, disputes and important decisions.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full min-h-[16rem] items-center justify-center border border-charcoal/10 p-10">
              <ColumnMotif count={1} color="var(--color-antique-gold)" opacity={0.85} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
