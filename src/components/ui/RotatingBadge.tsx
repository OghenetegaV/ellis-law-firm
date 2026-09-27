export function RotatingBadge({ className }: { className?: string }) {
  const text = "EVERY LAWFUL LIBERTY IS SIGNIFICANT • ";

  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0" />
        </defs>
        <text fill="currentColor" fontSize="13" letterSpacing="4" fontWeight="600">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-[38%] w-[38%] items-center justify-center rounded-full bg-burgundy font-serif text-lg italic text-white">
        E
      </span>
    </div>
  );
}
