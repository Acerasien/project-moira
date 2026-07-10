const SCATTERED_STARS = [
  { x: 8, y: 12 }, { x: 92, y: 8 }, { x: 15, y: 85 },
  { x: 88, y: 78 }, { x: 5, y: 45 }, { x: 95, y: 55 },
  { x: 22, y: 28 }, { x: 78, y: 32 }, { x: 12, y: 68 },
  { x: 85, y: 15 }, { x: 45, y: 5 }, { x: 55, y: 95 },
];

const FAINT_LINES = [
  { x1: 8, y1: 12, x2: 22, y2: 28 },
  { x1: 92, y1: 8, x2: 78, y2: 32 },
  { x1: 15, y1: 85, x2: 12, y2: 68 },
  { x1: 88, y1: 78, x2: 85, y2: 15 },
  { x1: 45, y1: 5, x2: 55, y2: 95 },
];

export default function PageAtmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {FAINT_LINES.map((line, i) => (
          <line
            key={`pline-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--color-accent)"
            strokeOpacity="0.03"
            strokeWidth="0.1"
          />
        ))}
        {SCATTERED_STARS.map((star, i) => (
          <circle
            key={`pstar-${i}`}
            cx={star.x}
            cy={star.y}
            r="0.2"
            fill="var(--color-accent)"
            fillOpacity="0.04"
          />
        ))}
      </svg>
    </div>
  );
}
