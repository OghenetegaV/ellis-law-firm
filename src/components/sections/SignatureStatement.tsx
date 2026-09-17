import { GeometricField } from "@/components/graphics/GeometricField";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureStatement() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <GeometricField />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="font-serif text-3xl leading-tight text-white sm:text-5xl">
            Every lawful liberty is significant.
          </p>
          <p className="mt-8 text-sm uppercase tracking-wide-cap text-antique-gold sm:text-base">
            Because rights matter. Interests matter. And the law matters.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
