import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { Reveal } from "@/components/ui/Reveal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export function Hero() {
  return (
    <section
      className={`${cormorant.variable} relative min-h-[560px] overflow-hidden bg-white sm:min-h-[620px] lg:min-h-[calc(100vh-77px)]`}
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-image-transparent-bg.png"
          alt="Classical stone columns against a burgundy wall, evoking permanence and structure"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      <div
        className="absolute inset-y-0 left-0 w-full sm:w-[80%] lg:w-[62%]"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 55%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[560px] flex-col justify-center px-5 py-16 sm:min-h-[620px] sm:px-6 sm:py-20 md:px-[7vw] md:py-24 lg:min-h-[calc(100vh-77px)] lg:py-0">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-[52px] bg-antique-gold" aria-hidden="true" />
            <span className="eyebrow text-antique-gold">A Modern Nigerian Law Firm</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1
            className="mt-8 font-[family-name:var(--font-cormorant)] text-[clamp(2.25rem,4.4vw,4.75rem)] leading-[1.02] font-medium tracking-tight whitespace-nowrap"
          >
            <span className="block text-charcoal">Every Lawful Liberty</span>
            <span className="block text-burgundy italic">Is Significant.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-9 max-w-[34rem] text-[17px] leading-[1.7] text-charcoal/75 sm:text-lg">
            ELLIS provides strategic legal counsel and representation to individuals,
            businesses and organisations. We protect rights, solve complex challenges and
            deliver practical legal solutions with precision and purpose.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Link
            href="/practice-areas"
            className="group mt-9 inline-flex h-[54px] w-[280px] max-w-full items-center justify-between border border-burgundy bg-burgundy px-7 text-white transition-colors duration-300 hover:bg-burgundy-dark"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
              Our Practice Areas
            </span>
            <span
              className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex items-stretch gap-4 sm:mt-20">
            <span className="w-px shrink-0 self-stretch bg-antique-gold/70" aria-hidden="true" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-antique-gold sm:text-xs">
              Authority &middot; Precision &middot; Discretion &middot; Strategy &middot; Purpose
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
