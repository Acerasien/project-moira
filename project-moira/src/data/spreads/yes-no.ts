import type { SpreadDefinition } from "./types";

const yesNo: SpreadDefinition = {
  id: "yes-no",
  name: "Yes / No",
  description: "A simple three-card spread for clarity on a specific question.",
  cardCount: 3,
  category: "general",
  difficulty: "beginner",
  positions: [
    { index: 1, label: "Yes", description: "What supports a positive answer.", row: 0, col: 0 },
    { index: 2, label: "No", description: "What cautions against it.", row: 0, col: 1 },
    { index: 3, label: "Guidance", description: "The deeper wisdom beneath the question.", row: 0, col: 2 },
  ],
  synthesis:
    "The Yes / No spread does not decide for you — it illuminates. The first card shows what is aligned, what is ready, what is calling you forward. The second shows what is resistant, what asks for caution, what may not be as it seems. The third card is the one that matters most: it reveals the question beneath your question. Before you count the yeses and nos, ask yourself what the guidance card is trying to tell you about why you asked at all.",
};

export default yesNo;
