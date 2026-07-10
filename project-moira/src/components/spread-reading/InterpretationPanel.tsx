import type { TarotCard } from "../../data/cards/types";
import type { SpreadPosition } from "../../data/spreads/types";

interface InterpretationPanelProps {
  card: TarotCard;
  position: SpreadPosition;
  isReversed: boolean;
  visible: boolean;
}

export default function InterpretationPanel({
  card,
  position,
  isReversed,
  visible,
}: InterpretationPanelProps) {
  const interp = isReversed ? card.reversed : card.upright;

  return (
    <div
      className="mx-auto mt-xl max-w-[560px] px-lg text-center transition-all duration-[300ms]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      aria-live="polite"
    >
      <h2 className="font-display text-display-lg text-text text-balance">
        {card.name}
      </h2>
      <p className="mt-1 font-body text-label text-text-muted">
        {position.label} Position{isReversed ? " · Reversed" : ""}
      </p>
      <p className="mt-md font-body text-body text-text text-pretty leading-relaxed">
        {interp.meaning}
      </p>
      <p className="mt-sm font-body text-label text-text-muted">
        {card.keywords.join(" · ")}
      </p>
    </div>
  );
}
