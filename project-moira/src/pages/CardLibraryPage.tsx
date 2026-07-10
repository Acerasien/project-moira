import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../services/cardService";
import type { TarotCard } from "../data/cards/types";
import FilterBar from "../components/card-library/FilterBar";
import CardThumbnail from "../components/card-library/CardThumbnail";

type ArcanaFilter = "all" | "major" | "minor";
type SuitFilter = "all" | "cups" | "pentacles" | "swords" | "wands";

export default function CardLibraryPage() {
  const navigate = useNavigate();
  const [arcana, setArcana] = useState<ArcanaFilter>("all");
  const [suit, setSuit] = useState<SuitFilter>("all");

  const allCards = useMemo(() => getAllCards(), []);

  const filtered = useMemo(() => {
    return allCards.filter((card: TarotCard) => {
      if (arcana !== "all" && card.arcana !== arcana) return false;
      if (arcana === "minor" && suit !== "all" && card.suit !== suit) return false;
      return true;
    });
  }, [allCards, arcana, suit]);

  const handleArcanaChange = (value: ArcanaFilter) => {
    setArcana(value);
    if (value !== "minor") setSuit("all");
  };

  return (
    <main className="min-h-screen px-lg py-3xl">
      <div className="mx-auto max-w-[960px]">
        <button
          onClick={() => navigate("/")}
          className="mb-lg font-body text-label uppercase tracking-wider transition-colors duration-[200ms]"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
        >
          ← Home
        </button>
        <h1 className="text-center font-display text-display-lg text-text text-balance">
          The Cards
        </h1>
        <p className="mt-md text-center font-body text-body text-text-muted text-balance">
          All seventy-eight cards of the tarot, each a mirror for a different moment.
        </p>

        <div className="mt-xl">
          <FilterBar
            arcana={arcana}
            suit={suit}
            onArcanaChange={handleArcanaChange}
            onSuitChange={setSuit}
          />
        </div>

        <div className="mt-xl">
          {filtered.length === 0 ? (
            <p className="py-xl text-center font-body text-body text-text-muted">
              No cards match this filter.
            </p>
          ) : (
            <div
              className="grid justify-center gap-md"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              }}
            >
              {filtered.map((card) => (
                <CardThumbnail key={card.id} card={card} />
              ))}
            </div>
          )}
        </div>

        <p className="mt-xl text-center font-body text-label text-text-muted">
          {filtered.length} card{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>
    </main>
  );
}
