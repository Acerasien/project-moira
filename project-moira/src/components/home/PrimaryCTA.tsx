import { useNavigate } from "react-router-dom";

interface PrimaryCTAProps {
  label: string;
  description: string;
  to: string;
}

export default function PrimaryCTA({
  label,
  description,
  to,
}: PrimaryCTAProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="mx-auto block w-full max-w-[480px] rounded-md border p-xl text-center transition-all duration-[300ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-full"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-accent)",
        borderWidth: "1px",
        transitionTimingFunction: "var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(200, 169, 106, 0.1)";
        e.currentTarget.style.borderColor = "var(--color-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span className="font-body text-label text-text uppercase tracking-wider">
        <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
          ✦{" "}
        </span>
        {label}
        <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
          {" "}
          ✦
        </span>
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
