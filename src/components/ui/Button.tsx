import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white border border-burgundy hover:bg-burgundy-dark hover:border-burgundy-dark",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-burgundy",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wide-cap transition-colors duration-300 ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
