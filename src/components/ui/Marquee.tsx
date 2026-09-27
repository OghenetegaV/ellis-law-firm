const words = ["Clarity", "Precision", "Strategy", "Integrity", "Discretion"];

export function Marquee() {
  const row = [...words, ...words, ...words, ...words];

  return (
    <div className="overflow-hidden bg-burgundy py-5 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((word, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-3xl italic sm:text-4xl">
            {word}
            <span className="text-base text-antique-gold not-italic">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
