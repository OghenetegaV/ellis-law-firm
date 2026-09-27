"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { primaryNavLinks } from "@/lib/content";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = primaryNavLinks.filter((link) => link.href !== "/contact");

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-charcoal/10 bg-ivory/80 pl-5 pr-2 shadow-soft backdrop-blur-xl sm:h-16 sm:pl-7">
        <Link href="/" aria-label="ELLIS home" className="shrink-0">
          <Logo className="h-auto w-[88px] sm:w-[104px]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-burgundy/10 text-burgundy"
                    : "text-charcoal/80 hover:bg-charcoal/5 hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-burgundy px-6 py-3 text-[13px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-burgundy-dark lg:inline-flex"
          >
            Contact us
          </Link>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
