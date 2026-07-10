import { useState, useCallback } from "react";
import CardBack from "./CardBack";
import CardFace from "./CardFace";

interface CardContainerProps {
  cardImage: string;
  cardName: string;
  flipped: boolean;
  onFlip: () => void;
  interactive: boolean;
}

export default function CardContainer({
  cardImage,
  cardName,
  flipped,
  onFlip,
  interactive,
}: CardContainerProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    if (interactive && !flipped) onFlip();
  }, [interactive, flipped, onFlip]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.key === "Enter" || e.key === " ") && interactive && !flipped) {
        e.preventDefault();
        onFlip();
      }
    },
    [interactive, flipped, onFlip],
  );

  return (
    <div
      className="relative"
      style={{ perspective: "800px" }}
    >
      <div
        className="relative transition-transform"
        style={{
          width: "clamp(200px, 45vw, 300px)",
          aspectRatio: "2.5 / 3.5",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : hovered && interactive ? "rotateY(0deg) translateY(-4px) scale(1.02)" : "rotateY(0deg)",
          transition: flipped ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)" : "transform 200ms var(--ease-out)",
          cursor: interactive && !flipped ? "pointer" : "default",
        }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => interactive && !flipped && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role={interactive && !flipped ? "button" : undefined}
        tabIndex={interactive && !flipped ? 0 : undefined}
        aria-label={
          interactive && !flipped
            ? "Today's card — face down. Press Enter to reveal."
            : `${cardName} — revealed`
        }
      >
        {/* Gold rim light on hover */}
        {interactive && !flipped && (
          <div
            className="pointer-events-none absolute z-10 transition-opacity duration-[300ms]"
            style={{
              inset: "-2px",
              borderRadius: "inherit",
              boxShadow: "0 0 20px rgba(200, 169, 106, 0.12)",
              opacity: hovered ? 1 : 0,
              transitionTimingFunction: "var(--ease-out)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Card back face */}
        <div
          className="absolute inset-0 rounded-md overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <CardBack />
        </div>

        {/* Card front face */}
        <div
          className="absolute inset-0 rounded-md overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <CardFace image={cardImage} name={cardName} />
        </div>
      </div>
    </div>
  );
}
