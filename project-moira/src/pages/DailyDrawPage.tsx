import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { getDailyCard } from "../services/cardService";
import type { TarotCard } from "../data/cards/types";
import OpeningRitual from "../components/daily-draw/OpeningRitual";
import CardContainer from "../components/daily-draw/CardContainer";
import AtmosphericGlow from "../components/daily-draw/AtmosphericGlow";
import CelestialBackground from "../components/daily-draw/CelestialBackground";
import PromptText from "../components/daily-draw/PromptText";
import Interpretation from "../components/daily-draw/Interpretation";
import ActionBar from "../components/daily-draw/ActionBar";

type Phase = "loading" | "ritual" | "face-down" | "revealing" | "stillness" | "interpreting" | "complete" | "error";

const STILLNESS_DURATION = 500;
const REVEAL_DURATION = 700;
const INTERPRETATION_STAGGER = 250;
const INTERPRETATION_SECTIONS = 6;

export default function DailyDrawPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("loading");
  const [card, setCard] = useState<TarotCard | null>(null);
  const [isReversed, setIsReversed] = useState(false);
  const [visibleSections, setVisibleSections] = useState(0);
  const [promptVisible, setPromptVisible] = useState(false);
  const reducedMotion = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
  }, []);

  useEffect(() => {
    try {
      const dailyCard = getDailyCard();
      setCard(dailyCard);
      setIsReversed(Math.random() < 0.5);
      if (reducedMotion.current) {
        setPhase("face-down");
        setPromptVisible(true);
      } else {
        setPhase("ritual");
      }
    } catch {
      setPhase("error");
    }
  }, []);

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const handleRitualComplete = useCallback(() => {
    setPhase("face-down");
    timers.current.push(setTimeout(() => setPromptVisible(true), 300));
  }, []);

  const handleFlip = useCallback(() => {
    if (phase !== "face-down") return;
    clearTimers();
    setPromptVisible(false);
    setPhase("revealing");

    timers.current.push(
      setTimeout(() => {
        setPhase("stillness");
        timers.current.push(
          setTimeout(() => {
            setPhase("interpreting");
            for (let i = 1; i <= INTERPRETATION_SECTIONS; i++) {
              timers.current.push(
                setTimeout(() => setVisibleSections(i), i * INTERPRETATION_STAGGER),
              );
            }
            timers.current.push(
              setTimeout(() => setPhase("complete"), INTERPRETATION_SECTIONS * INTERPRETATION_STAGGER + 300),
            );
          }, STILLNESS_DURATION),
        );
      }, REVEAL_DURATION),
    );
  }, [phase, clearTimers]);

  if (phase === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div
          className="h-64 w-48 animate-pulse rounded-md"
          style={{ background: "var(--color-surface)" }}
        />
      </div>
    );
  }

  if (phase === "error" || !card) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-lg text-center">
        <p className="font-body text-body text-text-muted text-balance max-w-[320px]">
          Today's card is still finding its way. Return in a moment.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-lg rounded-md border px-lg py-sm font-body text-label text-text-muted uppercase tracking-wider transition-all duration-[200ms]"
          style={{ borderColor: "var(--color-border)" }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.35)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
        >
          Try Again
        </button>
      </div>
    );
  }

  const showCard = phase !== "ritual";
  const cardFlipped = ["stillness", "interpreting", "complete"].includes(phase);
  const showInterpretation = ["interpreting", "complete"].includes(phase);
  const showActions = phase === "complete";

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden transition-opacity duration-[700ms]"
      style={{
        opacity: ["revealing", "stillness"].includes(phase) ? 0.9 : 1,
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      <button
        onClick={() => navigate("/")}
        className="absolute left-lg top-lg z-20 font-body text-label uppercase tracking-wider transition-colors duration-[200ms]"
        style={{ color: "var(--color-text-muted)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
      >
        ← Home
      </button>
      <CelestialBackground />
      <AtmosphericGlow />

      {phase === "ritual" && <OpeningRitual onComplete={handleRitualComplete} />}

      {showCard && (
        <CardContainer
          cardImage={card.image}
          cardName={card.name}
          flipped={cardFlipped}
          onFlip={handleFlip}
          interactive={phase === "face-down"}
        />
      )}

      {phase === "face-down" && (
        <PromptText
          visible={promptVisible}
          text="Take a quiet moment. Reveal today's reflection when you're ready."
        />
      )}

      {showInterpretation && (
        <Interpretation
          card={card}
          isReversed={isReversed}
          visibleSections={visibleSections}
        />
      )}

      <ActionBar visible={showActions} cardId={card.id} />
    </div>
  );
}
