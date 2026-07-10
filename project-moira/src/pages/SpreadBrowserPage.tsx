import { useState, useEffect } from "react";
import { getAllSpreads, getSpreadsByCategory } from "../services/spreadService";
import type { SpreadDefinition } from "../data/spreads/types";
import FilterPills from "../components/spread-browser/FilterPills";
import SpreadGrid from "../components/spread-browser/SpreadGrid";

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "general", label: "General" },
  { value: "love", label: "Love" },
  { value: "career", label: "Career" },
  { value: "reflection", label: "Reflection" },
];

export default function SpreadBrowserPage() {
  const [spreads, setSpreads] = useState<SpreadDefinition[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSpreads(getAllSpreads());
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setSpreads(getSpreadsByCategory(value as SpreadDefinition["category"] | "all"));
  };

  return (
    <main className="min-h-screen px-lg py-3xl">
      <div className="mx-auto max-w-[800px]">
        <h1 className="text-center font-display text-display-lg text-text text-balance">
          Choose a Spread
        </h1>
        <p className="mt-md text-center font-body text-body text-text-muted text-balance">
          A question deserves the right framework.
        </p>

        <div className="mt-xl">
          <FilterPills
            categories={CATEGORIES}
            active={category}
            onChange={handleCategoryChange}
          />
        </div>

        <div className="mt-xl">
          {loading ? (
            <div className="grid gap-lg" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-md p-lg"
                  style={{ background: "var(--color-surface)", height: 160 }}
                />
              ))}
            </div>
          ) : (
            <SpreadGrid spreads={spreads} />
          )}
        </div>
      </div>
    </main>
  );
}
