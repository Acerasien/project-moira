const ARCS = [
  { r: 40, dash: "4 8", opacity: 0.06 },
  { r: 55, dash: "none", opacity: 0.08 },
  { r: 70, dash: "2 6", opacity: 0.06 },
  { r: 85, dash: "none", opacity: 0.1 },
];

export default function AstrolabeCircles() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="motion-safe:animate-[astrolabe-rotate_120s_linear_infinite_reverse] origin-center">
        {ARCS.map((arc, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={arc.r}
            fill="none"
            stroke="var(--color-accent)"
            strokeOpacity={arc.opacity}
            strokeWidth="0.12"
            strokeDasharray={arc.dash === "none" ? undefined : arc.dash}
          />
        ))}
      </g>
    </svg>
  );
}
