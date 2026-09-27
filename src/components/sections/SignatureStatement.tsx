import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureStatement() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="relative mx-auto flex min-h-[32rem] max-w-[88rem] items-center justify-center overflow-hidden rounded-[2rem] sm:min-h-[40rem] sm:rounded-[3rem]">
        <Image
          src="/hero-image.png"
          alt=""
          fill
          sizes="100vw"
          className="animate-kenburns object-cover"
          style={{ objectPosition: "60% 40%" }}
        />
        <div className="absolute inset-0 bg-burgundy/80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/70 via-transparent to-transparent"
          aria-hidden="true"
        />

        <Reveal className="relative px-6 py-20 text-center sm:px-10">
          <p className="mx-auto max-w-4xl font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] font-medium tracking-tight text-white">
            Every lawful liberty <span className="text-antique-gold italic">is significant.</span>
          </p>
          <p className="mt-8 font-serif text-2xl italic text-white/75 sm:text-3xl">
            Rights matter. Interests matter. The law matters.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
