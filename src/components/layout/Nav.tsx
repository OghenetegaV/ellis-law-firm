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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-white">
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="ELLIS home" className="shrink-0">
          <Logo className="h-auto w-[92px] sm:w-[104px]" tagline />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`link-underline text-[14px] font-medium tracking-[0.01em] transition-colors ${
                  isActive ? "text-burgundy" : "text-charcoal/80 hover:text-burgundy"
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
            className="hidden rounded-md bg-burgundy px-6 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-burgundy-dark lg:inline-flex"
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
