import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSpreadById } from "../services/spreadService";
import { drawRandomCards } from "../services/cardService";
import type { SpreadDefinition } from "../data/spreads/types";
import TopBar from "../components/spread-reading/TopBar";
import PositionalLayout, { type SlotState } from "../components/spread-reading/PositionalLayout";
import ShuffleAnimation from "../components/spread-reading/ShuffleAnimation";
import InterpretationPanel from "../components/spread-reading/InterpretationPanel";
import Synthesis from "../components/spread-reading/Synthesis";
import ActionBar from "../components/spread-reading/ActionBar";

type Phase = "arrival" | "shuffling" | "dealing" | "ready" | "revealing" | "complete";

export default function SpreadReadingPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [spread, setSpread] = useState<SpreadDefinition | null>(null);
  const [slots, setSlots] = useState<SlotState[]>([]);
  const [phase, setPhase] = useState<Phase>("arrival");
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reducedMotion = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  // Check reduced motion
  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Load spread and draw cards
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

  // Handle shuffle completion
  const handleShuffleDone = useCallback(() => {
    clearTimers();
    setPhase("dealing");

    if (!spread) return;
    const count = spread.cardCount;
    timers.current.push(
      setTimeout(() => {
        setPhase("ready");
      }, count * 150 + 200),
    );
  }, [spread, clearTimers]);

  // Handle card reveal
  const handleReveal = useCallback(
    (index: number) => {
      if (revealedIndices.has(index)) return;
      setSelectedIndex(index);

      const newRevealed = new Set(revealedIndices);
      newRevealed.add(index);
      setRevealedIndices(newRevealed);

      setPhase("revealing");

      // Check if all revealed
      if (spread && newRevealed.size >= spread.cardCount) {
        timers.current.push(setTimeout(() => setPhase("complete"), 600));
      }
    },
    [revealedIndices, spread],
  );

  // Error state
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
  const selectedSlot = selectedIndex !== null ? slots[selectedIndex] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <TopBar spreadName={spread.name} />

      <div className="flex flex-col items-center px-lg pb-xl">
        {/* Shuffle animation */}
        {phase === "shuffling" && (
          <div className="py-2xl">
            <ShuffleAnimation visible={true} onSkip={handleShuffleDone} />
          </div>
        )}

        {/* Positional layout */}
        {(phase === "dealing" || phase === "ready" || phase === "revealing" || phase === "complete") && (
          <PositionalLayout
            slots={slots}
            revealedIndices={revealedIndices}
            maxRow={maxRow}
            maxCol={maxCol}
            phase={phase}
            onReveal={handleReveal}
          />
        )}

        {/* Dealing stagger indicator */}
        {phase === "dealing" && (
          <p className="mt-lg font-body text-body text-text-muted">
            Dealing cards...
          </p>
        )}

        {/* Interpretation */}
        {selectedSlot?.card && (
          <InterpretationPanel
            card={selectedSlot.card}
            position={selectedSlot.position}
            isReversed={selectedSlot.isReversed ?? false}
            visible={phase === "revealing" || phase === "complete"}
          />
        )}

        {/* Synthesis */}
        <Synthesis text={spread.synthesis} visible={allRevealed} />

        {/* Actions */}
        <ActionBar
          visible={allRevealed}
          onExport={() => alert("Export coming soon")}
        />
      </div>
    </div>
  );
}
