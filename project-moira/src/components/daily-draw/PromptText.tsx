interface PromptTextProps {
  visible: boolean;
  text: string;
}

export default function PromptText({ visible, text }: PromptTextProps) {
  return (
    <p
      className="mx-auto mt-lg max-w-[320px] text-center font-body text-body transition-all duration-[300ms]"
      style={{
        color: "var(--color-text-muted)",
        opacity: visible ? 1 : 0,
        transitionTimingFunction: "var(--ease-out)",
        textWrap: "balance",
      } as React.CSSProperties}
    >
      {text}
    </p>
  );
}
