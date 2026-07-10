import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSpreadById } from "../services/spreadService";
import { drawRandomCards } from "../services/cardService";
import type { SpreadDefinition } from "../data/spreads/types";
import TopBar from "../components/spread-reading/TopBar";
import PositionalLayout, { type SlotState } from "../components/spread-reading/PositionalLayout";
import ShuffleAnimation from "../components/spread-reading/ShuffleAnimation";
import CardFocusView from "../components/spread-reading/CardFocusView";
import Synthesis from "../components/spread-reading/Synthesis";
import ActionBar from "../components/spread-reading/ActionBar";

type Phase = "arrival" | "shuffling" | "dealing" | "ready" | "complete";

export default function SpreadReadingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [spread, setSpread] = useState<SpreadDefinition | null>(null);
  const [slots, setSlots] = useState<SlotState[]>([]);
  const [phase, setPhase] = useState<Phase>("arrival");
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reducedMotion = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!id) { navigate("/spreads"); return; }
    const found = getSpreadById(id);
    if (!found) { navigate("/spreads"); return; }

    setSpread(found);

    try {
      const cards = drawRandomCards(found.cardCount);
      const newSlots: SlotState[] = found.positions.map((pos, i) => ({
        position: pos,
        card: cards[i],
        isReversed: Math.random() < 0.5,
      }));
      setSlots(newSlots);

      if (reducedMotion.current) {
        setPhase("ready");
      } else {
        timers.current.push(setTimeout(() => setPhase("shuffling"), 500));
      }
    } catch {
      setError(true);
    }

    return clearTimers;
  }, [id, navigate, clearTimers]);

  const handleShuffleDone = useCallback(() => {
    clearTimers();
    setPhase("dealing");
    if (!spread) return;
    timers.current.push(
      setTimeout(() => setPhase("ready"), spread.cardCount * 150 + 200),
    );
  }, [spread, clearTimers]);

  const handleReveal = useCallback(
    (index: number) => {
      // If already revealed, just re-open focus view
      if (revealedIndices.has(index)) {
        setFocusedIndex(index);
        return;
      }

      // Flip the card in the grid first, then show focus
      const newRevealed = new Set(revealedIndices);
      newRevealed.add(index);
      setRevealedIndices(newRevealed);

      // Show focus after flip animation (500ms) + brief pause (200ms)
      timers.current.push(
        setTimeout(() => setFocusedIndex(index), 700),
      );

      // Check if all revealed
      if (spread && newRevealed.size >= spread.cardCount) {
        timers.current.push(setTimeout(() => setPhase("complete"), 1200));
      }
    },
    [revealedIndices, spread],
  );

  const handleCloseFocus = useCallback(() => {
    setFocusedIndex(null);
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-lg text-center">
        <p className="font-body text-body text-text-muted max-w-[320px] text-balance">
          This reading needs a moment. Try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-lg rounded-md border px-lg py-sm font-body text-label text-text-muted uppercase tracking-wider"
          style={{ borderColor: "var(--color-border)" }}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!spread) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-64 w-48 animate-pulse rounded-md" style={{ background: "var(--color-surface)" }} />
      </div>
    );
  }

  const maxRow = Math.max(...spread.positions.map((p) => p.row));
  const maxCol = Math.max(...spread.positions.map((p) => p.col));
  const allRevealed = phase === "complete";
  const focusedSlot = focusedIndex !== null ? slots[focusedIndex] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <TopBar spreadName={spread.name} />

      <div className="flex flex-col items-center px-lg pb-xl">
        {phase === "shuffling" && (
          <div className="py-2xl">
            <ShuffleAnimation visible={true} onSkip={handleShuffleDone} />
          </div>
        )}

        {(phase === "dealing" || phase === "ready" || phase === "complete") && (
          <PositionalLayout
            slots={slots}
            revealedIndices={revealedIndices}
            maxRow={maxRow}
            maxCol={maxCol}
            phase={phase}
            onReveal={handleReveal}
          />
        )}

        {phase === "dealing" && (
          <p className="mt-lg font-body text-body text-text-muted">
            Dealing cards...
          </p>
        )}

        <Synthesis text={spread.synthesis} visible={allRevealed} />

        <ActionBar
          visible={allRevealed}
          onExport={() => alert("Export coming soon")}
        />
      </div>

      {/* Focus view for revealed card */}
      {focusedSlot?.card && (
        <CardFocusView
          card={focusedSlot.card}
          position={focusedSlot.position}
          isReversed={focusedSlot.isReversed ?? false}
          visible={focusedIndex !== null}
          onClose={handleCloseFocus}
        />
      )}
    </div>
  );
}
