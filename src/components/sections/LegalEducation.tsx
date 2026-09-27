import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Reveal } from "@/components/ui/Reveal";

export function LegalEducation() {
  return (
    <section className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow className="text-center">Legal Education</SectionEyebrow>
            <h2 className="mt-6 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Legal knowledge, made accessible.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              Seminars and webinars that make the law clear and practical.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contact" variant="primary">
                Explore Programmes
              </Button>
            </div>
            <div className="mx-auto mt-10 max-w-md text-left">
              <Disclaimer>
                Not NBA-accredited CPD unless formally approved.
              </Disclaimer>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
