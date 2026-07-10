import { useState, useEffect } from "react";
import { reflections } from "../../data/reflections";
import SectionDivider from "../decorative/SectionDivider";

function getTodaysReflection(): string {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return reflections[dayOfYear % reflections.length];
}

const FALLBACK = "Every card is a mirror. Every reading begins with intention.";

export default function DailyReflection() {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setQuote(getTodaysReflection());
      } catch {
        setQuote(FALLBACK);
      }
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-2xl">
      <div className="mx-auto max-w-[580px] px-lg text-center">
        {loading ? (
          <div className="flex flex-col items-center gap-sm">
            <div
              className="h-5 w-4/5 animate-pulse rounded-sm"
              style={{ background: "var(--color-surface)" }}
            />
            <div
              className="h-5 w-3/5 animate-pulse rounded-sm"
              style={{ background: "var(--color-surface)" }}
            />
            <div
              className="h-5 w-2/5 animate-pulse rounded-sm"
              style={{ background: "var(--color-surface)" }}
            />
          </div>
        ) : (
          <blockquote
            className="mx-auto max-w-[480px] font-display text-reflection text-text text-balance"
            aria-live="polite"
          >
            &ldquo;{quote || FALLBACK}&rdquo;
          </blockquote>
        )}
        <div className="mt-lg">
          <SectionDivider />
        </div>
      </div>
    </section>
  );
}
