import type { TarotCard } from "../../data/cards/types";
import type { SpreadPosition } from "../../data/spreads/types";
import CardSlot from "./CardSlot";

export interface SlotState {
  position: SpreadPosition;
  card?: TarotCard;
  isReversed?: boolean;
}

interface PositionalLayoutProps {
  slots: SlotState[];
  revealedIndices: Set<number>;
  maxRow: number;
  maxCol: number;
  phase: string;
  onReveal: (index: number) => void;
}

export default function PositionalLayout({
  slots,
  revealedIndices,
  maxRow,
  maxCol,
  phase,
  onReveal,
}: PositionalLayoutProps) {
  const canInteract = phase === "ready" || phase === "revealing";

  return (
    <div
      className="mx-auto grid items-center justify-center gap-lg"
      style={{
        gridTemplateColumns: `repeat(${maxCol + 1}, auto)`,
        gridTemplateRows: `repeat(${maxRow + 1}, auto)`,
        maxWidth: 700,
        padding: "0 16px",
      }}
    >
      {slots.map((slot, index) => {
        const isRevealed = revealedIndices.has(index);
        return (
          <div
            key={index}
            style={{
              gridRow: slot.position.row + 1,
              gridColumn: slot.position.col + 1,
            }}
          >
            <CardSlot
              position={slot.position}
              card={slot.card}
              isReversed={slot.isReversed}
              isRevealed={isRevealed}
              isEmpty={phase === "arrival" || phase === "shuffling"}
              interactive={canInteract && !isRevealed && !!slot.card}
              onReveal={() => onReveal(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
