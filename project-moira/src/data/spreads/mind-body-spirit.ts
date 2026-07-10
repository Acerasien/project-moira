import type { SpreadDefinition } from "./types";

const mindBodySpirit: SpreadDefinition = {
  id: "mind-body-spirit",
  name: "Mind / Body / Spirit",
  description: "A holistic check-in across the three dimensions of your well-being.",
  cardCount: 3,
  category: "reflection",
  difficulty: "beginner",
  positions: [
    { index: 1, label: "Mind", description: "Your thoughts, beliefs, and mental landscape.", row: 0, col: 0 },
    { index: 2, label: "Body", description: "Your physical self and material world.", row: 1, col: 0 },
    { index: 3, label: "Spirit", description: "Your inner life, purpose, and connection.", row: 2, col: 0 },
  ],
  synthesis:
    "You are not a mind carrying a body — you are all three at once, and each speaks to the others. When one is unsettled, the others compensate. When one thrives, the others are nourished. These three cards together offer a map of where you are whole and where you are asking for care. Listen to the quietest of the three — it is often the one that most needs your attention.",
};

export default mindBodySpirit;
