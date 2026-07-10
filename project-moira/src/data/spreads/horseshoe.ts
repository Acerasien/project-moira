import type { SpreadDefinition } from "./types";

const horseshoe: SpreadDefinition = {
  id: "horseshoe",
  name: "Horseshoe",
  description: "A seven-card spread that arcs from past influences to the final outcome.",
  cardCount: 7,
  category: "general",
  difficulty: "intermediate",
  positions: [
    { index: 1, label: "Past", description: "Recent influences shaping the situation.", row: 0, col: 0 },
    { index: 2, label: "Present", description: "The current state of affairs.", row: 0, col: 1 },
    { index: 3, label: "Hidden", description: "What is not yet visible or acknowledged.", row: 0, col: 2 },
    { index: 4, label: "Challenge", description: "The obstacle you must navigate.", row: 0, col: 3 },
    { index: 5, label: "Environment", description: "The people and circumstances around you.", row: 0, col: 4 },
    { index: 6, label: "Advice", description: "The best course of action.", row: 0, col: 5 },
    { index: 7, label: "Outcome", description: "The likely result if current energies persist.", row: 0, col: 6 },
  ],
  synthesis:
    "The Horseshoe traces an arc from what has been to what may be. Each card is a stepping stone across the river of your question. The past and present set the banks. The hidden and the challenge are the currents beneath the surface. The environment is the weather above. The advice is the bridge itself — the card that tells you how to cross. Trust the arc. It holds together even when the individual stones feel uneven.",
};

export default horseshoe;
