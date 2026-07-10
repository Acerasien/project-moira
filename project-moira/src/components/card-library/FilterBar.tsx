interface FilterBarProps {
  arcana: "all" | "major" | "minor";
  suit: "all" | "cups" | "pentacles" | "swords" | "wands";
  onArcanaChange: (value: "all" | "major" | "minor") => void;
  onSuitChange: (value: "all" | "cups" | "pentacles" | "swords" | "wands") => void;
}

const ARCANAS = [
  { value: "all", label: "All" },
  { value: "major", label: "Major Arcana" },
  { value: "minor", label: "Minor Arcana" },
] as const;

const SUITS = [
  { value: "all", label: "All Suits" },
  { value: "cups", label: "Cups" },
  { value: "pentacles", label: "Pentacles" },
  { value: "swords", label: "Swords" },
  { value: "wands", label: "Wands" },
] as const;

export default function FilterBar({
  arcana,
  suit,
  onArcanaChange,
  onSuitChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col items-center gap-md sm:flex-row sm:justify-center">
      <div className="flex flex-wrap justify-center gap-sm" role="group" aria-label="Filter by arcana">
        {ARCANAS.map((a) => (
          <button
            key={a.value}
            onClick={() => onArcanaChange(a.value)}
            aria-pressed={arcana === a.value}
            className="rounded-full border px-md py-xs font-body text-label uppercase tracking-wider transition-all duration-[200ms]"
            style={{
              borderColor: arcana === a.value ? "var(--color-accent)" : "var(--color-border)",
              color: arcana === a.value ? "var(--color-accent)" : "var(--color-text-muted)",
              background: "transparent",
              transitionTimingFunction: "var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              if (arcana !== a.value) e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.4)";
            }}
            onMouseLeave={(e) => {
              if (arcana !== a.value) e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            {a.label}
          </button>
        ))}
      </div>
      {arcana === "minor" && (
        <div className="flex flex-wrap justify-center gap-sm" role="group" aria-label="Filter by suit">
          {SUITS.map((s) => (
            <button
              key={s.value}
              onClick={() => onSuitChange(s.value)}
              aria-pressed={suit === s.value}
              className="rounded-full border px-md py-xs font-body text-label uppercase tracking-wider transition-all duration-[200ms]"
              style={{
                borderColor: suit === s.value ? "var(--color-accent)" : "var(--color-border)",
                color: suit === s.value ? "var(--color-accent)" : "var(--color-text-muted)",
                background: "transparent",
                transitionTimingFunction: "var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                if (suit !== s.value) e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.4)";
              }}
              onMouseLeave={(e) => {
                if (suit !== s.value) e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
