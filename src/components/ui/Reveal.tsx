"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const [ref, isVisible] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 blur-none"
          : "opacity-0 translate-y-8 scale-[0.97] blur-[3px]"
      } ${className ?? ""}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
