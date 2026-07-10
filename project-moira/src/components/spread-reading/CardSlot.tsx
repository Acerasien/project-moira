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
  const [flipPhase, setFlipPhase] = useState<"idle" | "lift" | "flipping" | "settle" | "done">("idle");
  const [showParticles, setShowParticles] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (!interactive || flipPhase !== "idle") return;

    setFlipPhase("lift");

    // Phase 1: Lift (0–150ms)
    setTimeout(() => setFlipPhase("flipping"), 150);

    // Phase 2: Particle burst at 90° (mid-flip at ~425ms from start)
    setTimeout(() => {
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 600);
    }, 425);

    // Phase 3: Settle (700ms from start)
    setTimeout(() => setFlipPhase("settle"), 700);

    // Phase 4: Done (900ms from start)
    setTimeout(() => {
      setFlipPhase("done");
      onReveal();
    }, 900);
  };

  const size = "clamp(80px, 18vw, 140px)";
  const isFlipping = flipPhase === "flipping" || flipPhase === "settle" || flipPhase === "done";

  const getCardStyle = (): React.CSSProperties => {
    if (flipPhase === "lift") {
      return {
        transform: "translateY(-6px) scale(1.03)",
        boxShadow: "0 0 24px rgba(200, 169, 106, 0.15), 0 8px 20px rgba(0,0,0,0.3)",
        transition: "transform 150ms var(--ease-out), box-shadow 150ms var(--ease-out)",
      };
    }
    if (flipPhase === "flipping") {
      return {
        transform: "rotateY(180deg)",
        filter: "blur(0.6px)",
        transition: "transform 550ms cubic-bezier(0.4, 0, 0.2, 1), filter 550ms cubic-bezier(0.4, 0, 0.2, 1)",
        transformStyle: "preserve-3d",
      };
    }
    if (flipPhase === "settle") {
      return {
        transform: "rotateY(180deg)",
        filter: "blur(0px)",
        transition: "transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1), filter 200ms var(--ease-out)",
        transformStyle: "preserve-3d",
      };
    }
    if (flipPhase === "done") {
      return { transform: "rotateY(180deg)", transformStyle: "preserve-3d" };
    }
    return {};
  };

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
            style={{ border: "1px dashed var(--color-border)" }}
          >
            <span
              className="font-body"
              style={{
                color: "var(--color-text-muted)",
                opacity: 0.4,
                fontSize: "clamp(0.5rem, 1.2vw, 0.75rem)",
              }}
            >
              {position.index}
            </span>
          </div>
        )}

        {/* Face-down card */}
        {!isEmpty && !isRevealed && flipPhase === "idle" && (
          <div
            className="h-full w-full cursor-pointer overflow-hidden rounded-md transition-all duration-[200ms]"
            style={{
              transform: hovered ? "translateY(-3px)" : "translateY(0)",
              boxShadow: hovered ? "0 0 12px rgba(200, 169, 106, 0.1)" : "none",
              transitionTimingFunction: "var(--ease-out)",
            }}
            onClick={handleClick}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === " ") && interactive) {
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
            <CardBack />
          </div>
        )}

        {/* Flipping card */}
        {flipPhase !== "idle" && !isRevealed && (
          <div
            className="relative h-full w-full cursor-pointer overflow-hidden rounded-md"
            onClick={handleClick}
            style={getCardStyle()}
          >
            {/* Card back (visible 0–90°) */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                opacity: isFlipping ? 0 : 1,
                transition: "opacity 0ms",
                transitionDelay: isFlipping ? "275ms" : "0ms",
              }}
            >
              <CardBack />
            </div>

            {/* Card face (visible 90–180°) */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                opacity: isFlipping ? 1 : 0,
                transition: "opacity 0ms",
                transitionDelay: isFlipping ? "275ms" : "0ms",
              }}
            >
              {card && (
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover"
                  style={{
                    border: "1px solid rgba(200, 169, 106, 0.3)",
                    transform: isReversed ? "rotate(180deg)" : "none",
                  }}
                />
              )}
            </div>

            {/* Particle burst */}
            {showParticles && (
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full motion-safe:animate-[particle-burst_0.6s_var(--ease-out)_both]"
                    style={{
                      background: "var(--color-accent)",
                      opacity: 0.8,
                      animationDelay: `${i * 30}ms`,
                      "--px": `${Math.cos((i / 10) * Math.PI * 2) * 30}px`,
                      "--py": `${Math.sin((i / 10) * Math.PI * 2) * 30}px`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Already revealed card (face-up, re-tappable) */}
        {isRevealed && (flipPhase === "idle" || flipPhase === "done") && card && (
          <div
            className="h-full w-full cursor-pointer overflow-hidden rounded-md transition-all duration-[200ms]"
            style={{
              border: "1px solid rgba(200, 169, 106, 0.3)",
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hovered ? "0 0 12px rgba(200, 169, 106, 0.1)" : "none",
              transitionTimingFunction: "var(--ease-out)",
            }}
            onClick={() => {
              if (interactive || isRevealed) onReveal();
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            role="button"
            tabIndex={0}
            aria-label={`Position ${position.index}: ${position.label} — ${card.name}. Press Enter to view.`}
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
