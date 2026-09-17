type LineCompositionProps = {
  className?: string;
  strokeColor?: string;
  strokeOpacity?: number;
  orientation?: "vertical" | "grid";
};

export function LineComposition({
  className,
  strokeColor = "var(--color-antique-gold)",
  strokeOpacity = 1,
  orientation = "vertical",
}: LineCompositionProps) {
  if (orientation === "vertical") {
    return (
      <svg
        viewBox="0 0 4 200"
        width="1"
        height="100%"
        preserveAspectRatio="none"
        className={className}
        aria-hidden="true"
      >
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="200"
          stroke={strokeColor}
          strokeOpacity={strokeOpacity}
          strokeWidth="1"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 160"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
    >
      <g stroke={strokeColor} strokeOpacity={strokeOpacity} strokeWidth="1">
        <line x1="0" y1="1" x2="240" y2="1" />
        <line x1="0" y1="80" x2="240" y2="80" />
        <line x1="0" y1="159" x2="240" y2="159" />
        <line x1="1" y1="0" x2="1" y2="160" />
        <line x1="80" y1="0" x2="80" y2="160" />
        <line x1="160" y1="0" x2="160" y2="160" />
        <line x1="239" y1="0" x2="239" y2="160" />
      </g>
    </svg>
  );
}
