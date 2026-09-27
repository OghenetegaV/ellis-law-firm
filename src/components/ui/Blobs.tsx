export function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-burgundy/12 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-antique-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />
    </div>
  );
}
