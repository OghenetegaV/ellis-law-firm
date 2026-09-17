import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto max-w-[90rem] px-6 py-14 sm:px-10 sm:py-20">
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
            <div className="h-full p-2 sm:p-4">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/purposeful-image.png"
                  alt="An ELLIS folio held with quiet confidence, set against classical architecture"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
