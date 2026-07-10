interface SectionDividerProps {
  glyph?: string;
  width?: number;
}

export default function SectionDivider({
  glyph,
  width = 60,
}: SectionDividerProps) {
  return (
    <div
      className="mx-auto flex items-center justify-center gap-2"
      style={{ width }}
      aria-hidden="true"
    >
      <div
        className="h-px flex-1"
        style={{ background: "var(--color-accent)", opacity: 0.4 }}
      />
      {glyph && (
        <span
          className="shrink-0 text-xs leading-none"
          style={{ color: "var(--color-accent)", opacity: 0.6 }}
        >
          {glyph}
        </span>
      )}
      <div
        className="h-px flex-1"
        style={{ background: "var(--color-accent)", opacity: 0.4 }}
      />
    </div>
  );
}
