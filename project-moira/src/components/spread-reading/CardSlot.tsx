import { useState } from "react";
import type { TarotCard } from "../../data/cards/types";
import type { SpreadPosition } from "../../data/spreads/types";
import CardBack from "../daily-draw/CardBack";

interface CardSlotProps {
  position: SpreadPosition;
  card?: TarotCard;
  isReversed?: boolean;
  isRevealed: boolean;
  isEmpty: boolean;
  interactive: boolean;
  onReveal: () => void;
}

export default function CardSlot({
  position,
  card,
  isReversed,
  isRevealed,
  isEmpty,
  interactive,
  onReveal,
}: CardSlotProps) {
  const [hovered, setHovered] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleClick = () => {
    if (interactive && !flipping) {
      setFlipping(true);
      setTimeout(() => {
        setFlipping(false);
        onReveal();
      }, 500);
    }
  };

  const size = "clamp(80px, 18vw, 140px)";
  const showCardBack = !isEmpty && !isRevealed;
  const showCardFace = isRevealed && card;

  return (
    <div className="flex flex-col items-center">
      <span
        className="mb-1 text-center font-body text-label"
        style={{
          color: "var(--color-text-muted)",
          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
          maxWidth: size,
        }}
      >
        {position.label}
      </span>

      <div
        className="relative rounded-md"
        style={{
          width: size,
          aspectRatio: "2.5 / 3.5",
          perspective: "600px",
        }}
      >
        {/* Empty state */}
        {isEmpty && (
          <div
            className="flex h-full w-full items-center justify-center rounded-md"
            style={{
              border: "1px dashed var(--color-border)",
            }}
          >
            <span
              className="font-body text-xs"
              style={{ color: "var(--color-text-muted)", opacity: 0.4, fontSize: "clamp(0.5rem, 1.2vw, 0.75rem)" }}
            >
              {position.index}
            </span>
          </div>
        )}

        {/* Face-down card */}
        {showCardBack && (
          <div
            className="h-full w-full cursor-pointer overflow-hidden rounded-md transition-all duration-[200ms]"
            style={{
              transform: hovered && !flipping ? "translateY(-3px)" : "translateY(0)",
              boxShadow: hovered && !flipping ? "0 0 12px rgba(200, 169, 106, 0.1)" : "none",
              transitionTimingFunction: "var(--ease-out)",
            }}
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            role="button"
            tabIndex={interactive ? 0 : -1}
            aria-label={`Position ${position.index}: ${position.label} — face down. Press Enter to reveal.`}
          >
            <div className={flipping ? "animate-pulse" : ""}>
              <CardBack />
            </div>
          </div>
        )}

        {/* Face-up card (revealed) */}
        {showCardFace && (
          <div
            className="h-full w-full overflow-hidden rounded-md"
            style={{
              border: "1px solid rgba(200, 169, 106, 0.3)",
              opacity: flipping ? 0.5 : 1,
              transition: "opacity 250ms var(--ease-out)",
            }}
          >
            <img
              src={card.image}
              alt={card.name}
              className="h-full w-full object-cover"
              style={{ transform: isReversed ? "rotate(180deg)" : "none" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
