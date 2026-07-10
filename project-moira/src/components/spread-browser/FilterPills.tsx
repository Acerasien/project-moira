interface FilterPillsProps {
  categories: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
}

export default function FilterPills({
  categories,
  active,
  onChange,
}: FilterPillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-sm" role="group" aria-label="Filter spreads by category">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          aria-pressed={active === cat.value}
          className="rounded-full border px-md py-xs font-body text-label uppercase tracking-wider transition-all duration-[200ms]"
          style={{
            borderColor:
              active === cat.value
                ? "var(--color-accent)"
                : "var(--color-border)",
            color:
              active === cat.value
                ? "var(--color-accent)"
                : "var(--color-text-muted)",
            background: "transparent",
            transitionTimingFunction: "var(--ease-out)",
            opacity: active === cat.value ? 0.9 : 1,
          }}
          onMouseEnter={(e) => {
            if (active !== cat.value) {
              e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== cat.value) {
              e.currentTarget.style.borderColor = "var(--color-border)";
            }
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
