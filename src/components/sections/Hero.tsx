import Image from "next/image";
import { Blobs } from "@/components/ui/Blobs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingBadge } from "@/components/ui/RotatingBadge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pt-44">
      <Blobs />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3 rounded-full border border-burgundy/20 bg-white/60 px-5 py-2 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-antique-gold" aria-hidden="true" />
              <span className="eyebrow text-burgundy">A modern Nigerian law firm</span>
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.94] font-medium tracking-tight text-charcoal">
              Every lawful liberty{" "}
              <span className="text-burgundy italic">is significant.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal/70">
              Strategic legal counsel for individuals, businesses and organisations.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/practice-areas">Our practice areas</Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto w-full max-w-[28rem]">
            <div
              className="absolute -right-4 top-6 h-full w-full rounded-t-full rounded-b-[2rem] border border-antique-gold/60"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-[2rem] shadow-card">
              <Image
                src="/hero-image.png"
                alt="Classical stone columns against a burgundy wall"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="animate-kenburns object-cover"
                style={{ objectPosition: "72% center" }}
              />
            </div>

            <RotatingBadge className="absolute -left-6 bottom-16 h-28 w-28 animate-float rounded-full bg-ivory p-1 text-burgundy shadow-soft sm:-left-14 sm:h-36 sm:w-36" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
