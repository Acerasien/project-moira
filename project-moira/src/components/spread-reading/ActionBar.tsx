import { useNavigate } from "react-router-dom";

interface ActionBarProps {
  visible: boolean;
  onExport: () => void;
}

export default function ActionBar({ visible, onExport }: ActionBarProps) {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto mt-xl max-w-[480px] px-lg pb-2xl text-center transition-all duration-[300ms]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(4px)",
        transitionTimingFunction: "var(--ease-out)",
      }}
    >
      <button
        onClick={onExport}
        className="mx-auto block w-full max-w-[320px] rounded-md border p-md text-center transition-all duration-[200ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-full"
        style={{
          background: "var(--color-surface)",
          borderColor: "var(--color-accent)",
          borderWidth: "1px",
          transitionTimingFunction: "var(--ease-out)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 16px rgba(200, 169, 106, 0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <span className="font-body text-label text-text uppercase tracking-wider">
          Export Reading
        </span>
      </button>

      <div className="mt-md flex flex-col gap-sm md:flex-row md:justify-center">
        <button
          onClick={() => navigate("/spreads")}
          className="rounded-md border px-lg py-sm text-center transition-all duration-[200ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-full"
          style={{
            background: "transparent",
            borderColor: "var(--color-border)",
            transitionTimingFunction: "var(--ease-out)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(200, 169, 106, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
          }}
        >
          <span className="font-body text-label text-text uppercase tracking-wider">
            New Reading
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-lg py-sm text-center transition-all duration-[200ms]"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-text-muted)";
          }}
        >
          <span
            className="font-body text-label uppercase tracking-wider"
            style={{ color: "var(--color-text-muted)" }}
          >
            Return Home
          </span>
        </button>
      </div>
    </div>
  );
}
