import { useEffect, useCallback } from "react";
import type { TarotCard } from "../../data/cards/types";
import type { SpreadPosition } from "../../data/spreads/types";

interface CardFocusViewProps {
  card: TarotCard;
  position: SpreadPosition;
  isReversed: boolean;
  visible: boolean;
  onClose: () => void;
}

export default function CardFocusView({
  card,
  position,
  isReversed,
  visible,
  onClose,
}: CardFocusViewProps) {
  const interp = isReversed ? card.reversed : card.upright;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [visible, handleKeyDown]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-lg"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${card.name} — ${position.label} position`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-[400ms]"
        style={{
          background: "rgba(11, 16, 32, 0.85)",
          backdropFilter: "blur(4px)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex max-h-[90vh] w-full max-w-[480px] flex-col items-center overflow-y-auto transition-all duration-[500ms]"
        style={{
          transform: "scale(1)",
          opacity: 1,
          animation: "focus-enter 500ms var(--ease-out) both",
          transitionTimingFunction: "var(--ease-out)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating card */}
        <div
          className="overflow-hidden rounded-md motion-safe:animate-[card-float_4s_ease-in-out_infinite]"
          style={{
            width: "clamp(200px, 45vw, 280px)",
            aspectRatio: "2.5 / 3.5",
            border: "1px solid rgba(200, 169, 106, 0.3)",
            boxShadow: "0 0 40px rgba(200, 169, 106, 0.08), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          <img
            src={card.image}
            alt={card.name}
            className="h-full w-full object-cover"
            style={{ transform: isReversed ? "rotate(180deg)" : "none" }}
          />
        </div>

        {/* Card name + position */}
        <div className="mt-lg text-center">
          <h2 className="font-display text-display-lg text-text text-balance">
            {card.name}
          </h2>
          <p className="mt-1 font-body text-label text-text-muted">
            {position.label} Position{isReversed ? " · Reversed" : ""}
          </p>
          <p className="mt-sm font-body text-label text-text-muted">
            {card.keywords.join(" · ")}
          </p>
        </div>

        {/* Interpretation */}
        <div className="mt-lg w-full space-y-md">
          <div>
            <p
              className="mb-1 font-body text-label uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}
            >
              Summary
            </p>
            <p className="font-body text-body-lg text-text text-pretty">
              {interp.summary}
            </p>
          </div>
          <div>
            <p
              className="mb-1 font-body text-label uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}
            >
              Meaning
            </p>
            <p className="font-body text-body text-text text-pretty leading-relaxed">
              {interp.meaning}
            </p>
          </div>
          <div>
            <p
              className="mb-1 font-body text-label uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}
            >
              Reflection
            </p>
            <p className="font-body text-body text-text text-pretty">
              {interp.reflection}
            </p>
          </div>
          <div>
            <p
              className="mb-1 font-body text-label uppercase tracking-wider"
              style={{ color: "var(--color-text-muted)", letterSpacing: "0.06em" }}
            >
              Guidance
            </p>
            <p className="font-body text-body text-text text-pretty">
              {interp.guidance}
            </p>
          </div>
        </div>

        {/* Close hint */}
        <p
          className="mt-xl pb-lg font-body text-label"
          style={{ color: "var(--color-text-muted)", opacity: 0.5 }}
        >
          Tap anywhere to close
        </p>
      </div>
    </div>
  );
}
