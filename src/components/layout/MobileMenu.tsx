"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { primaryNavLinks } from "@/lib/content";

const noopSubscribe = () => () => {};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const isMounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={`fixed inset-0 z-[60] bg-white transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center justify-end px-6 py-4">
        <button
          ref={closeRef}
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          tabIndex={isOpen ? 0 : -1}
          className="flex h-11 w-11 items-center justify-center text-2xl text-charcoal"
        >
          &times;
        </button>
      </div>

      <nav aria-label="Site" className="flex flex-col gap-8 px-8 pt-8">
        {primaryNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="font-serif text-3xl text-charcoal transition-colors hover:text-burgundy"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
          className="mt-4 inline-flex w-fit items-center justify-center border border-burgundy bg-burgundy px-8 py-3.5 text-xs font-semibold uppercase tracking-wide-cap text-white"
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
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
      >
        <span className="h-px w-6 bg-antique-gold" />
        <span className="h-px w-6 bg-antique-gold" />
        <span className="h-px w-6 bg-antique-gold" />
      </button>

      {isMounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
