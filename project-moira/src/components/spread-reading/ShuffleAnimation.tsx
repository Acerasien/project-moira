import CardBack from "../daily-draw/CardBack";

interface ShuffleAnimationProps {
  visible: boolean;
  onSkip: () => void;
}

export default function ShuffleAnimation({ visible, onSkip }: ShuffleAnimationProps) {
  if (!visible) return null;

  return (
    <div className="flex flex-col items-center gap-lg" aria-hidden="true">
      <div className="relative" style={{ width: 180, height: 120 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-[100px] animate-[shuffle_0.4s_ease-in-out_infinite] rounded-md overflow-hidden"
            style={{
              left: `${20 + i * 12}px`,
              top: `${10 + i * 4}px`,
              animationDelay: `${i * 0.08}s`,
              zIndex: i,
              aspectRatio: "2.5 / 3.5",
              width: 80,
            }}
          >
            <CardBack />
          </div>
        ))}
      </div>
      <button
        onClick={onSkip}
        className="font-body text-label uppercase tracking-wider transition-colors duration-[200ms]"
        style={{ color: "var(--color-text-muted)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-text-muted)";
        }}
      >
        Skip Shuffle
      </button>
    </div>
  );
}
