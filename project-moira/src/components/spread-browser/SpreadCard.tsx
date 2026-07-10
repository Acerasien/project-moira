import { useNavigate } from "react-router-dom";
import type { SpreadDefinition } from "../../data/spreads/types";

const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

interface SpreadCardProps {
  spread: SpreadDefinition;
}

export default function SpreadCard({ spread }: SpreadCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/spreads/${spread.id}`)}
      className="w-full rounded-md border p-lg text-left transition-all duration-[200ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-lg"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.35)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 className="font-display text-display-lg text-text" style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
        {spread.name}
      </h3>
      <p className="mt-xs font-body text-label text-text-muted">
        {spread.cardCount} cards{"  ·  "}
        {DIFFICULTY_LABELS[spread.difficulty]}
      </p>
      <p
        className="mt-sm font-body text-body text-text-muted"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {spread.description}
      </p>
      <span
        className="mt-md inline-block rounded-full border px-sm py-xs font-body text-label uppercase tracking-wider"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-text-muted)",
          fontSize: "0.75rem",
        }}
      >
        {spread.category}
      </span>
    </button>
  );
}
