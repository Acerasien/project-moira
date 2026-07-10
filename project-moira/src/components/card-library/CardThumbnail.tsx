import { useNavigate } from "react-router-dom";
import type { TarotCard } from "../../data/cards/types";

interface CardThumbnailProps {
  card: TarotCard;
}

export default function CardThumbnail({ card }: CardThumbnailProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/cards/${card.id}`)}
      className="group flex flex-col items-center gap-sm rounded-md p-md text-center transition-all duration-[200ms] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus-visible:rounded-lg"
      style={{ transitionTimingFunction: "var(--ease-out)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="overflow-hidden rounded-md transition-shadow duration-[200ms] group-hover:shadow-lg"
        style={{
          width: "clamp(100px, 22vw, 160px)",
          aspectRatio: "2.5 / 3.5",
          border: "1px solid var(--color-border)",
        }}
      >
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <span
        className="font-body text-label text-text-muted transition-colors duration-[200ms] group-hover:text-text"
        style={{ maxWidth: "clamp(100px, 22vw, 160px)" }}
      >
        {card.name}
      </span>
    </button>
  );
}
