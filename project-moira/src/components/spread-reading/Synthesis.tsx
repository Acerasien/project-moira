interface SynthesisProps {
  text: string;
  visible: boolean;
}

export default function Synthesis({ text, visible }: SynthesisProps) {
  return (
    <div
      className="mx-auto mt-xl max-w-[560px] px-lg text-center transition-all duration-[300ms]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      aria-live="polite"
    >
      <h2 className="font-display text-display-lg text-text text-balance">
        Synthesis
      </h2>
      <p className="mt-md font-body text-body text-text text-pretty leading-relaxed">
        {text}
      </p>
    </div>
  );
}
