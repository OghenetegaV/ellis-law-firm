import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-burgundy text-white hover:bg-burgundy-dark shadow-soft",
  secondary: "border border-charcoal/25 text-charcoal hover:border-burgundy hover:text-burgundy",
  light: "bg-ivory text-burgundy hover:bg-white",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[13px] font-semibold tracking-[0.06em] transition-all duration-300 ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1.5"
      >
        &rarr;
      </span>
    </Link>
  );
}
