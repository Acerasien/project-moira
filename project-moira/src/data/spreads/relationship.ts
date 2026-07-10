import type { SpreadDefinition } from "./types";

const relationship: SpreadDefinition = {
  id: "relationship",
  name: "Relationship",
  description: "Explore the dynamic between you and another — romantic, platonic, or professional.",
  cardCount: 5,
  category: "love",
  difficulty: "intermediate",
  positions: [
    { index: 1, label: "You", description: "Your position, feelings, and perspective.", row: 0, col: 0 },
    { index: 2, label: "Them", description: "Their position, feelings, and perspective.", row: 0, col: 2 },
    { index: 3, label: "Connection", description: "What binds you together — the shared ground.", row: 1, col: 1 },
    { index: 4, label: "Strength", description: "What is working well between you.", row: 2, col: 0 },
    { index: 5, label: "Growth", description: "Where the relationship is asking to evolve.", row: 2, col: 2 },
  ],
  synthesis:
    "Every relationship is a third thing — not just you and them, but the space between you, which has its own life and its own needs. The two outer columns show where each of you stands. The center card names what holds you together. The bottom row reveals what is already strong and what still wants to grow. Read this spread not as a scorecard but as a conversation starter — a way to see the whole picture before you speak.",
};

export default relationship;
