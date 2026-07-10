import type { SpreadDefinition } from "./types";

const starGuide: SpreadDefinition = {
  id: "star-guide",
  name: "The Star Guide",
  description: "A five-point spread for daily guidance — what to embrace, release, learn, trust, and act upon.",
  cardCount: 5,
  category: "reflection",
  difficulty: "intermediate",
  positions: [
    { index: 1, label: "Embrace", description: "What to welcome into your day.", row: 0, col: 1 },
    { index: 2, label: "Release", description: "What to let go of.", row: 1, col: 0 },
    { index: 3, label: "Learn", description: "What lesson is presenting itself.", row: 1, col: 2 },
    { index: 4, label: "Trust", description: "What to have faith in.", row: 2, col: 1 },
    { index: 5, label: "Act", description: "What to do today.", row: 3, col: 1 },
  ],
  synthesis:
    "The Star Guide is a compass for a single day — not a map of your life, but a lantern for the next twenty-four hours. The five points ask you to hold something close, let something go, learn something, trust something, and do something. Together they form a star: not a distant light, but a shape you can follow. Carry these five words with you. By evening, you will know which one mattered most.",
};

export default starGuide;
