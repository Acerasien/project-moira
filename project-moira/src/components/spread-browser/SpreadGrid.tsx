import type { SpreadDefinition } from "../../data/spreads/types";
import SpreadCard from "./SpreadCard";

interface SpreadGridProps {
  spreads: SpreadDefinition[];
  emptyMessage?: string;
}

export default function SpreadGrid({ spreads, emptyMessage }: SpreadGridProps) {
  if (spreads.length === 0) {
    return (
      <p className="py-xl text-center font-body text-body text-text-muted">
        {emptyMessage || "No spreads match this filter. Try another category."}
      </p>
    );
  }

  return (
    <div
      className="grid gap-lg"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      }}
    >
      {spreads.map((spread) => (
        <SpreadCard key={spread.id} spread={spread} />
      ))}
    </div>
  );
}
