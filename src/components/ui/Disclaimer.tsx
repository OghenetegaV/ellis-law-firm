export function Disclaimer({ children }: { children: string }) {
  return (
    <p className="border-l border-antique-gold/60 pl-4 text-xs leading-relaxed text-charcoal/60">
      {children}
    </p>
  );
}
