import type { SpreadDefinition } from "./types";

const pastPresentFuture: SpreadDefinition = {
  id: "past-present-future",
  name: "Past / Present / Future",
  description: "The classic three-card spread for understanding how the past shapes the present and what lies ahead.",
  cardCount: 3,
  category: "general",
  difficulty: "beginner",
  positions: [
    { index: 1, label: "Past", description: "What has brought you to this moment.", row: 0, col: 0 },
    { index: 2, label: "Present", description: "Where you stand now.", row: 0, col: 1 },
    { index: 3, label: "Future", description: "The path unfolding before you.", row: 0, col: 2 },
  ],
  synthesis:
    "The past, present, and future are not separate — they are a single river, and you are standing in its current. The card behind you has already done its work. The card before you is not a prediction but a direction. The card at the center is the only one you can touch. Let the three cards speak as one story: where you have been, where you are, and where you are being drawn.",
};

export default pastPresentFuture;
