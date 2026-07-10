import { useNavigate } from "react-router-dom";

interface SecondaryCTAProps {
  label: string;
  description: string;
  to: string;
}

export default function SecondaryCTA({
  label,
  description,
  to,
}: SecondaryCTAProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="flex-1 rounded-md border p-xl text-center transition-all duration-[300ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-full"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.35)";
        e.currentTarget.style.boxShadow = "0 0 16px rgba(200, 169, 106, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span className="font-body text-label text-text uppercase tracking-wider">
        {label}
      </span>
      <p
        className="mt-sm font-body text-body"
        style={{ color: "var(--color-text-muted)" }}
      >
        {description}
      </p>
    </button>
  );
}
