import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerLegalLinks, navLinks, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-10 rounded-t-[2rem] bg-charcoal text-white sm:rounded-t-[3rem]">
      <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/12 pb-16">
          <h2 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] font-medium tracking-tight">
            Ready when <span className="text-antique-gold italic">you are.</span>
          </h2>
          <Button href="/contact" variant="light">
            Contact us
          </Button>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="inline-block rounded-2xl bg-ivory px-5 py-3">
              <Logo className="h-auto w-[110px]" />
            </span>
            <p className="mt-5 font-serif text-xl italic text-white/60">
              Every lawful liberty is significant.
            </p>
          </div>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/75 transition-colors hover:text-antique-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-antique-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 ELLIS. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
