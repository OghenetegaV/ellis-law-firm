export function GeometricField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g stroke="var(--color-antique-gold)" strokeWidth="1" opacity="0.08" fill="none">
        <line x1="0" y1="0" x2="1200" y2="0" />
        <line x1="0" y1="150" x2="1200" y2="150" />
        <line x1="0" y1="300" x2="1200" y2="300" />
        <line x1="0" y1="450" x2="1200" y2="450" />
        <line x1="0" y1="600" x2="1200" y2="600" />
        <line x1="150" y1="0" x2="150" y2="600" />
        <line x1="450" y1="0" x2="450" y2="600" />
        <line x1="750" y1="0" x2="750" y2="600" />
        <line x1="1050" y1="0" x2="1050" y2="600" />
      </g>
      <g fill="var(--color-antique-gold)" opacity="0.07">
        {[120, 420, 720, 1020].map((x, i) => (
          <g key={i}>
            <rect x={x} y={90} width={64} height={16} />
            <line x1={x + 16} y1={112} x2={x + 16} y2={420} stroke="var(--color-antique-gold)" strokeWidth="1" />
            <line x1={x + 32} y1={112} x2={x + 32} y2={420} stroke="var(--color-antique-gold)" strokeWidth="1" />
            <line x1={x + 48} y1={112} x2={x + 48} y2={420} stroke="var(--color-antique-gold)" strokeWidth="1" />
            <path d={`M ${x - 10} ${440} L ${x + 74} ${440} L ${x + 58} ${420} L ${x + 6} ${420} Z`} />
          </g>
        ))}
      </g>
    </svg>
  );
}
