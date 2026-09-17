"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { primaryNavLinks } from "@/lib/content";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-white">
      <div className="mx-auto grid h-[54px] max-w-[100rem] grid-cols-[auto_1fr_auto] items-center px-5 sm:px-6 md:h-14 lg:h-[77px] lg:px-12 xl:px-20">
        <Link href="/" aria-label="ELLIS home" className="shrink-0 justify-self-start">
          <Logo className="h-auto w-[105px] sm:w-[115px] md:w-[130px] lg:w-[147px]" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden justify-self-center lg:flex lg:items-center lg:gap-8 xl:gap-10"
        >
          {primaryNavLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-1 text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-burgundy after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-antique-gold"
                    : "text-charcoal hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="justify-self-end lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
