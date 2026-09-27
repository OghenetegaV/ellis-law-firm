import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] shadow-card">
            <Image
              src="/purposeful-image.png"
              alt="An ELLIS folio held with quiet confidence, set against classical architecture"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-3xl bg-ivory px-6 py-4 shadow-soft sm:right-8">
            <p className="font-serif text-2xl italic text-burgundy">Clarity. Precision. Purpose.</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionEyebrow>The ELLIS approach</SectionEyebrow>
          <h2 className="mt-6 font-serif text-[clamp(2.75rem,5vw,4.75rem)] leading-[1] font-medium tracking-tight">
            Law with purpose. <span className="text-burgundy italic">Counsel with clarity.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-charcoal/70">
            Built on the belief that every lawful liberty is significant.
          </p>
          <Link
            href="/about"
            className="link-underline mt-8 text-sm font-semibold text-burgundy"
          >
            About ELLIS &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
