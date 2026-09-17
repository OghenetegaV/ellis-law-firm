type ColumnMotifProps = {
  count?: number;
  color?: string;
  opacity?: number;
  className?: string;
  gap?: number;
};

function SingleColumn({ x, color }: { x: number; color: string }) {
  const shaftTop = 18;
  const shaftBottom = 92;
  const shaftLeft = x + 10;
  const shaftRight = x + 30;

  return (
    <g stroke={color} fill="none" strokeWidth={1.1}>
      <rect x={x} y={8} width={40} height={10} fill={color} stroke="none" />
      <rect x={x + 4} y={18} width={32} height={4} fill={color} stroke="none" />
      <line x1={shaftLeft} y1={shaftTop + 4} x2={shaftLeft} y2={shaftBottom} />
      <line x1={x + 20} y1={shaftTop + 4} x2={x + 20} y2={shaftBottom} />
      <line x1={shaftRight} y1={shaftTop + 4} x2={shaftRight} y2={shaftBottom} />
      <path
        d={`M ${x - 6} ${shaftBottom + 10} L ${x + 46} ${shaftBottom + 10} L ${x + 34} ${shaftBottom} L ${x + 6} ${shaftBottom} Z`}
        fill={color}
        stroke="none"
      />
    </g>
  );
}

export function ColumnMotif({
  count = 3,
  color = "var(--color-burgundy)",
  opacity = 1,
  className,
  gap = 56,
}: ColumnMotifProps) {
  const width = count * gap + 40;

  return (
    <svg
      viewBox={`0 0 ${width} 112`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SingleColumn key={i} x={i * gap} color={color} />
      ))}
    </svg>
  );
}
