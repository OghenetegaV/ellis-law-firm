import Image from "next/image";

type LogoProps = {
  className?: string;
  tagline?: boolean;
  taglineClassName?: string;
};

export function Logo({ className, tagline = false, taglineClassName }: LogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="ELLIS"
      width={273}
      height={116}
      quality={100}
      priority
      className={`object-contain ${className ?? ""}`}
    />
  );

  if (!tagline) return image;

  return (
    <span className="flex flex-col items-center">
      {image}
      <span
        className={`font-label -mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-charcoal ${taglineClassName ?? ""}`}
      >
        Law Firm
      </span>
    </span>
  );
}
