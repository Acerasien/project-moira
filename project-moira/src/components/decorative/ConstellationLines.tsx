import { useMemo } from "react";

const STARS = 20;
const LINES = 10;

interface Point {
  x: number;
  y: number;
}

function generatePoints(count: number): Point[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));
}

export default function ConstellationLines() {
  const points = useMemo(() => generatePoints(STARS), []);

  const linePairs = useMemo(() => {
    const pairs: [Point, Point][] = [];
    for (let i = 0; i < LINES; i++) {
      const a = points[Math.floor(Math.random() * points.length)];
      let b = points[Math.floor(Math.random() * points.length)];
      while (b === a) {
        b = points[Math.floor(Math.random() * points.length)];
      }
      pairs.push([a, b]);
    }
    return pairs;
  }, [points]);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="motion-safe:animate-[constellation-rotate_120s_linear_infinite] origin-center">
        {linePairs.map(([a, b], i) => (
          <line
            key={`line-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--color-accent)"
            strokeOpacity="0.08"
            strokeWidth="0.15"
            strokeLinecap="round"
          />
        ))}
        {points.map((p, i) => (
          <circle
            key={`star-${i}`}
            cx={p.x}
            cy={p.y}
            r="0.25"
            fill="var(--color-accent)"
            fillOpacity="0.12"
          />
        ))}
      </g>
    </svg>
  );
}
