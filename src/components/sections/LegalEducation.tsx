import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function LegalEducation() {
  return (
    <section className="px-3 pb-6 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] bg-sand px-6 py-16 sm:rounded-[3rem] sm:px-14 sm:py-24">
          <div
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-antique-gold/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <SectionEyebrow>Legal education</SectionEyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.75rem,5.5vw,5rem)] leading-[0.98] font-medium tracking-tight">
                Legal knowledge, <span className="text-burgundy italic">made accessible.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-charcoal/70">
                Seminars and webinars that make the law clear and practical.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button href="/contact">Explore programmes</Button>
              <p className="mt-4 text-xs text-charcoal/55">
                Not NBA-accredited CPD unless formally approved.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
