import { useEffect, useState } from "react";
import CardBack from "./CardBack";

const DECK_SIZE = 5;

export default function OpeningRitual({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"deck" | "separate" | "glide" | "done">("deck");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("separate"), 400);
    const t2 = setTimeout(() => setPhase("glide"), 700);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === "done") return null;

  const deckOpacity = phase === "glide" ? 0 : 1;
  const selectedTransform = phase === "separate"
    ? "translateY(-40px) rotate(-3deg)"
    : phase === "glide"
      ? "translate(0, 0) rotate(0deg)"
      : "translateY(0)";

  return (
    <div className="relative flex items-center justify-center" style={{ width: 250, height: 350 }}>
      {/* Deck stack */}
      <div
        className="absolute transition-opacity duration-[300ms]"
        style={{ opacity: deckOpacity, transitionTimingFunction: "var(--ease-out)" }}
        aria-hidden="true"
      >
        {Array.from({ length: DECK_SIZE }, (_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 250,
              height: 350,
              left: i * 2,
              top: i * 3,
              opacity: 1 - i * 0.1,
              zIndex: DECK_SIZE - i,
            }}
          >
            <CardBack />
          </div>
        ))}
      </div>

      {/* Selected card (top of deck, separates) */}
      <div
        className="absolute transition-all duration-[300ms]"
        style={{
          width: 250,
          height: 350,
          zIndex: 10,
          transform: selectedTransform,
          transitionTimingFunction: phase === "separate"
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "var(--ease-out)",
        }}
      >
        <CardBack />
      </div>
    </div>
  );
}
