export default function CelestialDivider() {
  return (
    <div className="mx-auto flex w-[200px] items-center justify-center" aria-hidden="true">
      <svg
        className="h-10 w-full"
        viewBox="0 0 200 40"
        fill="none"
      >
        <line
          x1="0" y1="20" x2="80" y2="20"
          stroke="var(--color-accent)" strokeOpacity="0.3" strokeWidth="0.5"
        />
        <circle
          cx="100" cy="20" r="12"
          stroke="var(--color-accent)" strokeOpacity="0.25" strokeWidth="0.5"
        />
        <circle
          cx="100" cy="20" r="8"
          stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <text
          x="100" y="24"
          textAnchor="middle"
          fill="var(--color-accent)"
          fillOpacity="0.5"
          fontSize="10"
        >
          ✦
        </text>
        <line
          x1="120" y1="20" x2="200" y2="20"
          stroke="var(--color-accent)" strokeOpacity="0.3" strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
