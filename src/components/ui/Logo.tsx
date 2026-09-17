import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
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
}
