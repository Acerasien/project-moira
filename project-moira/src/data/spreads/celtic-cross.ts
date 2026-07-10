import type { SpreadDefinition } from "./types";

const celticCross: SpreadDefinition = {
  id: "celtic-cross",
  name: "Celtic Cross",
  description: "The most comprehensive spread for deep exploration of any question or situation.",
  cardCount: 10,
  category: "general",
  difficulty: "advanced",
  positions: [
    { index: 1, label: "Present", description: "The heart of the matter — what covers you now.", row: 2, col: 1 },
    { index: 2, label: "Challenge", description: "What crosses you — the obstacle or tension.", row: 2, col: 2 },
    { index: 3, label: "Past", description: "The foundation — what is beneath you.", row: 0, col: 2 },
    { index: 4, label: "Future", description: "What is behind you, receding.", row: 3, col: 2 },
    { index: 5, label: "Above", description: "Your conscious goal or aspiration.", row: 3, col: 3 },
    { index: 6, label: "Below", description: "What crowns you — the best possible outcome.", row: 3, col: 0 },
    { index: 7, label: "Advice", description: "Your inner state and perspective.", row: 5, col: 0 },
    { index: 8, label: "External", description: "How others see you and the situation.", row: 5, col: 2 },
    { index: 9, label: "Hopes & Fears", description: "Your hopes and fears intertwined.", row: 4, col: 1 },
    { index: 10, label: "Outcome", description: "The likely resolution.", row: 1, col: 3 },
  ],
  synthesis:
    "The Celtic Cross is not a map of certainties — it is a conversation between ten voices, each with a different vantage point on your question. The card at the center holds the present moment. The one that crosses it names the tension. Around them, the past, the future, the conscious and the hidden arrange themselves like witnesses. Read them not as a verdict but as a council. The outcome is not fixed — it is the direction the current is flowing, and you are still the one at the helm.",
};

export default celticCross;
