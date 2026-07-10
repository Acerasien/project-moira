import { useNavigate } from "react-router-dom";

interface TopBarProps {
  spreadName: string;
}

export default function TopBar({ spreadName }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-lg py-lg">
      <button
        onClick={() => navigate("/spreads")}
        className="font-body text-label uppercase tracking-wider transition-colors duration-[200ms]"
        style={{ color: "var(--color-text-muted)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-text)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-text-muted)";
        }}
      >
        ← Spreads
      </button>
      <h1 className="font-display text-display-lg text-text text-balance">
        {spreadName}
      </h1>
      <div className="w-20" />
    </div>
  );
}
