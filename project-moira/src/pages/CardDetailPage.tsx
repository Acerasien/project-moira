import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCardById } from "../services/cardService";

export default function CardDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isReversed, setIsReversed] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const card = id ? getCardById(id) : undefined;

  if (!card) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-lg text-center">
        <p className="font-body text-body text-text-muted">Card not found.</p>
        <button
          onClick={() => navigate("/cards")}
          className="mt-lg rounded-md border px-lg py-sm font-body text-label text-text-muted uppercase tracking-wider"
          style={{ borderColor: "var(--color-border)" }}
        >
          Back to Cards
        </button>
      </div>
    );
  }

  const interp = isReversed ? card.reversed : card.upright;

  const handleFlip = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setIsReversed((prev) => !prev);
      setFlipping(false);
    }, 350);
  };

  return (
    <main className="min-h-screen px-lg py-3xl">
      <div className="mx-auto max-w-[640px]">
        <button
          onClick={() => navigate("/cards")}
          className="font-body text-label uppercase tracking-wider transition-colors duration-[200ms]"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
        >
          ← All Cards
        </button>

        {/* Card image */}
        <div className="mt-xl flex justify-center">
          <div
            className="relative cursor-pointer overflow-hidden rounded-md transition-all duration-[200ms]"
            style={{
              width: "clamp(200px, 50vw, 300px)",
              aspectRatio: "2.5 / 3.5",
              perspective: "800px",
            }}
            onClick={handleFlip}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleFlip(); }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${card.name} — ${isReversed ? "reversed" : "upright"}. Press Enter to flip.`}
          >
            <div
              className="h-full w-full transition-transform duration-[500ms]"
              style={{
                transformStyle: "preserve-3d",
                transform: flipping ? "rotateY(90deg)" : isReversed ? "rotateY(0deg)" : "rotateY(0deg)",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="h-full w-full rounded-md object-cover"
                style={{
                  border: "1px solid rgba(200, 169, 106, 0.3)",
                  transform: isReversed ? "rotate(180deg)" : "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Orientation indicator */}
        <p className="mt-md text-center font-body text-label text-text-muted">
          {isReversed ? "Reversed" : "Upright"} — tap card to flip
        </p>

        {/* Card info */}
        <div className="mt-lg text-center">
          <h1 className="font-display text-display-lg text-text text-balance">
            {card.name}
          </h1>
          <p className="mt-xs font-body text-label text-text-muted">
            {card.arcana === "major" ? "Major Arcana" : `Minor Arcana · ${card.suit}`}
            {card.arcana === "major" ? ` · ${card.number}` : ""}
          </p>
          <p className="mt-sm font-body text-label text-text-muted">
            {card.keywords.join(" · ")}
          </p>
        </div>

        {/* Interpretation */}
        <div className="mt-lg space-y-md">
          <div>
            <p className="mb-1 font-body text-label uppercase tracking-wider text-text-muted" style={{ letterSpacing: "0.06em" }}>
              Summary
            </p>
            <p className="font-body text-body-lg text-text text-pretty">{interp.summary}</p>
          </div>
          <div>
            <p className="mb-1 font-body text-label uppercase tracking-wider text-text-muted" style={{ letterSpacing: "0.06em" }}>
              Meaning
            </p>
            <p className="font-body text-body text-text text-pretty leading-relaxed">{interp.meaning}</p>
          </div>
          <div>
            <p className="mb-1 font-body text-label uppercase tracking-wider text-text-muted" style={{ letterSpacing: "0.06em" }}>
              Reflection
            </p>
            <p className="font-body text-body text-text text-pretty">{interp.reflection}</p>
          </div>
          <div>
            <p className="mb-1 font-body text-label uppercase tracking-wider text-text-muted" style={{ letterSpacing: "0.06em" }}>
              Guidance
            </p>
            <p className="font-body text-body text-text text-pretty">{interp.guidance}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
