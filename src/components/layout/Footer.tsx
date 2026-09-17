import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerLegalLinks, navLinks, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="h-px w-full bg-antique-gold/50" />
      <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-8 w-auto" />
            <p className="eyebrow mt-5 max-w-xs text-white/50">
              Every lawful liberty is significant.
            </p>
          </div>

          <div>
            <span className="eyebrow text-antique-gold">Navigate</span>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline text-sm text-white/75 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="eyebrow text-antique-gold">Connect</span>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-white/75 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 ELLIS. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline hover:text-white/80">
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
