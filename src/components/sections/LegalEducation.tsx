import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Reveal } from "@/components/ui/Reveal";

export function LegalEducation() {
  return (
    <section className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow className="text-center">Legal Education</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Legal knowledge, made accessible.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              ELLIS develops educational programmes, seminars and webinars designed to make
              legal knowledge clearer, practical and accessible to individuals, entrepreneurs
              and professionals.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="primary">
                Explore Programmes
              </Button>
            </div>
            <div className="mx-auto mt-10 max-w-md text-left">
              <Disclaimer>
                ELLIS&apos;s private educational programmes are not represented as NBA-accredited
                CPD programmes unless formally approved as such.
              </Disclaimer>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
