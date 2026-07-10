import type { SpreadDefinition } from "./types";

const singleCard: SpreadDefinition = {
  id: "single-card",
  name: "Single Card",
  description: "A single card for a focused moment of reflection on any question.",
  cardCount: 1,
  category: "reflection",
  difficulty: "beginner",
  positions: [
    { index: 1, label: "The Card", description: "Your reflection for today.", row: 0, col: 0 },
  ],
  synthesis:
    "A single card carries the full weight of its meaning. There is no context to dilute it, no neighboring card to soften its message. Sit with what has been revealed — it is enough. The simplicity of this spread is not a limitation; it is an invitation to go deep rather than wide.",
};

export default singleCard;
