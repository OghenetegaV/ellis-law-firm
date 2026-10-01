"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { primaryNavLinks } from "@/lib/content";

const noopSubscribe = () => () => {};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const overlay = (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={`fixed inset-x-0 top-20 z-50 origin-top border-b border-charcoal/10 bg-white shadow-card transition-all duration-200 ${
        isOpen ? "pointer-events-auto scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
      }`}
    >
      <nav aria-label="Site" className="mx-auto flex max-w-[90rem] flex-col gap-1 px-5 py-4 sm:px-8">
        {primaryNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-md px-3 py-2.5 text-base font-medium text-charcoal transition-colors hover:bg-ivory hover:text-burgundy"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
          className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-burgundy px-6 py-2.5 text-[13px] font-semibold text-white"
        >
          Contact ELLIS
        </Link>
      </nav>
    </div>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-6 bg-charcoal transition-transform duration-200 ${isOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span className={`h-px w-6 bg-charcoal transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-px w-6 bg-charcoal transition-transform duration-200 ${isOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      {isMounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
