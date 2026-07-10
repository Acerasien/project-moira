export default function CardBack() {
  return (
    <svg
      viewBox="0 0 250 350"
      className="h-full w-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="card-clip">
          <rect x="4" y="4" width="242" height="342" rx="6" />
        </clipPath>
      </defs>

      {/* Card base */}
      <rect
        x="4" y="4" width="242" height="342" rx="6"
        fill="var(--color-bg, #0B1020)"
      />

      {/* Double-line outer border */}
      <rect
        x="12" y="12" width="226" height="326" rx="4"
        fill="none"
        stroke="var(--color-accent, #C8A96A)"
        strokeOpacity="0.4"
        strokeWidth="0.5"
      />
      <rect
        x="15" y="15" width="220" height="320" rx="3"
        fill="none"
        stroke="var(--color-accent, #C8A96A)"
        strokeOpacity="0.25"
        strokeWidth="0.5"
      />

      {/* Corner ornaments */}
      {[
        [22, 22], [228, 22], [22, 328], [228, 328],
      ].map(([cx, cy], i) => (
        <g key={`corner-${i}`}>
          <circle cx={cx} cy={cy} r="2" fill="none"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.35" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="1" fill="var(--color-accent, #C8A96A)" fillOpacity="0.2" />
        </g>
      ))}

      <g clipPath="url(#card-clip)">
        {/* Moon phases — top */}
        <g transform="translate(125, 60)">
          <text x="-32" y="0" textAnchor="middle" fill="var(--color-accent, #C8A96A)"
            fillOpacity="0.5" fontSize="14" fontFamily="serif">☽</text>
          <text x="0" y="0" textAnchor="middle" fill="var(--color-accent, #C8A96A)"
            fillOpacity="0.3" fontSize="10" fontFamily="serif">·</text>
          <text x="32" y="0" textAnchor="middle" fill="var(--color-accent, #C8A96A)"
            fillOpacity="0.5" fontSize="14" fontFamily="serif">☉</text>
        </g>

        {/* Astrolabe circles — center */}
        <g transform="translate(125, 175)">
          <circle cx="0" cy="0" r="48" fill="none"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.15" strokeWidth="0.5"
            strokeDasharray="280 20" strokeDashoffset="10" />
          <circle cx="0" cy="0" r="38" fill="none"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.25" strokeWidth="0.5"
            strokeDasharray="3 4" />
          <circle cx="0" cy="0" r="28" fill="none"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.2" strokeWidth="0.5" />

          {/* Center "M" sigil */}
          <text x="0" y="8" textAnchor="middle"
            fill="var(--color-accent, #C8A96A)" fillOpacity="0.7"
            fontSize="22" fontFamily="Cormorant Garamond, Georgia, serif"
            fontWeight="300">M</text>

          {/* Cross lines through center */}
          <line x1="-8" y1="0" x2="-16" y2="0"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.3" strokeWidth="0.5" />
          <line x1="8" y1="0" x2="16" y2="0"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.3" strokeWidth="0.5" />
          <line x1="0" y1="-8" x2="0" y2="-16"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.3" strokeWidth="0.5" />
          <line x1="0" y1="8" x2="0" y2="16"
            stroke="var(--color-accent, #C8A96A)" strokeOpacity="0.3" strokeWidth="0.5" />
        </g>

        {/* Suit symbols — bottom */}
        <g transform="translate(125, 285)">
          <text x="-48" y="0" textAnchor="middle"
            fill="var(--color-accent, #C8A96A)" fillOpacity="0.5"
            fontSize="12">🏆</text>
          <text x="-16" y="0" textAnchor="middle"
            fill="var(--color-accent, #C8A96A)" fillOpacity="0.5"
            fontSize="12">⚔</text>
          <text x="16" y="0" textAnchor="middle"
            fill="var(--color-accent, #C8A96A)" fillOpacity="0.5"
            fontSize="12">✦</text>
          <text x="48" y="0" textAnchor="middle"
            fill="var(--color-accent, #C8A96A)" fillOpacity="0.5"
            fontSize="12">◎</text>
        </g>

        {/* Constellation dots — bottom edge */}
        <g transform="translate(125, 315)">
          {[-40, -24, -8, 8, 24, 40].map((x, i) => (
            <circle key={i} cx={x} cy="0" r="1"
              fill="var(--color-accent, #C8A96A)" fillOpacity="0.3" />
          ))}
        </g>
      </g>
    </svg>
  );
}
