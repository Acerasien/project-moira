import type { TarotCard } from "../../data/cards/types";

interface InterpretationProps {
  card: TarotCard;
  isReversed: boolean;
  visibleSections: number;
}

const SECTIONS = [
  { key: "name", label: "", field: "name" as const, font: "font-display text-display-lg" },
  { key: "keywords", label: "", field: "keywords" as const, font: "font-body text-label" },
  { key: "summary", label: "Summary", field: "summary" as const, font: "font-body text-body-lg" },
  { key: "meaning", label: "Meaning", field: "meaning" as const, font: "font-body text-body" },
  { key: "reflection", label: "Reflection", field: "reflection" as const, font: "font-body text-body" },
  { key: "guidance", label: "Guidance", field: "guidance" as const, font: "font-body text-body" },
] as const;

export default function Interpretation({ card, isReversed, visibleSections }: InterpretationProps) {
  const interp = isReversed ? card.reversed : card.upright;

  return (
    <div className="mx-auto mt-xl max-w-[520px] px-lg text-center" aria-live="polite">
      {SECTIONS.map((section, i) => {
        if (visibleSections <= i) return null;

        const value =
          section.field === "name"
            ? card.name
            : section.field === "keywords"
              ? card.keywords.join(" · ")
              : interp[section.field];

        const isBody = section.field !== "name" && section.field !== "keywords";

        return (
          <div
            key={section.key}
            className="transition-all duration-[300ms]"
            style={{
              opacity: visibleSections > i ? 1 : 0,
              transform: visibleSections > i ? "translateY(0)" : "translateY(4px)",
              marginTop: i === 0 ? "0" : i === 1 ? "8px" : "24px",
              transitionTimingFunction: "var(--ease-out)",
            }}
          >
            {isBody && (
              <p className="mb-1 font-body text-label uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}>
                {section.label}
              </p>
            )}
            {section.field === "name" ? (
              <h2 className={`${section.font} text-balance`} style={{ color: "var(--color-text)" }}>
                {value as string}
              </h2>
            ) : section.field === "keywords" ? (
              <p className={`${section.font}`} style={{ color: "var(--color-text-muted)" }}>
                {value as string}
              </p>
            ) : (
              <p className={`${section.font} text-pretty`} style={{ color: "var(--color-text)" }}>
                {value as string}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
