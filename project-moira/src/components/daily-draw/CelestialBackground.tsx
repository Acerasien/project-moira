const STARS = [
  { x: 15, y: 25 }, { x: 85, y: 20 }, { x: 10, y: 75 },
  { x: 90, y: 70 }, { x: 50, y: 10 }, { x: 50, y: 90 },
  { x: 25, y: 50 }, { x: 75, y: 50 },
];

const LINES = [
  { x1: 15, y1: 25, x2: 50, y2: 10 },
  { x1: 85, y1: 20, x2: 50, y2: 10 },
  { x1: 10, y1: 75, x2: 25, y2: 50 },
  { x1: 90, y1: 70, x2: 75, y2: 50 },
];

export default function CelestialBackground() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: "200%", height: "200%", maxWidth: "600px", maxHeight: "600px" }}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {LINES.map((line, i) => (
        <line key={`l-${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="var(--color-accent)" strokeOpacity="0.05" strokeWidth="0.3" />
      ))}
      {STARS.map((star, i) => (
        <circle key={`s-${i}`} cx={star.x} cy={star.y} r="0.4"
          fill="var(--color-accent)" fillOpacity="0.08" />
      ))}
      <circle cx="50" cy="50" r="45" fill="none"
        stroke="var(--color-accent)" strokeOpacity="0.04" strokeWidth="0.3"
        strokeDasharray="150 20" strokeDashoffset="40" />
    </svg>
  );
}
