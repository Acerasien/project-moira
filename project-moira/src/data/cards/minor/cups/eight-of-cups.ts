import type { TarotCard } from "../../types";

const eightOfCups: TarotCard = {
  id: "eight-of-cups",
  name: "Eight of Cups",
  arcana: "minor",
  suit: "cups",
  number: 8,
  keywords: ["Departure", "Walking Away", "Seeking Deeper Meaning"],
  image: "/cards/minor/cups/eight-of-cups.png",
  upright: {
    summary:
      "A cloaked figure walks away from eight carefully stacked cups, heading toward barren mountains under a moonlit sky. Something is being left behind — by choice.",
    meaning:
      "The Eight of Cups is the card of deliberate departure. Not a fleeing, not a tantrum, but a quiet recognition that what once satisfied you no longer does. The cups are still standing — they are not broken, not empty — and yet you are walking away. This is the ache of outgrowing something that was once good enough. A relationship, a job, a version of yourself that you have worn too long. The mountains ahead are steep and uncertain, but the pull toward something deeper is stronger than the comfort of what you know. This is not a failure of gratitude; it is a triumph of honesty. You are choosing meaning over ease.",
    reflection:
      "What are you still holding onto that your soul has already left? What would it take for you to admit that the cups behind you are no longer enough — and that that is okay?",
    guidance:
      "Walk. You do not need to explain the departure to everyone, and you do not need a perfect map of where you are going. The first step is the hardest, but staying will cost you more. Trust the moon. It lights the path just enough.",
  },
  reversed: {
    summary:
      "You cannot leave, or you will not. Fear of the unknown keeps you rooted beside cups that have long stopped nourishing you.",
    meaning:
      "Reversed, the Eight of Cups speaks of entrapment — sometimes external, often self-imposed. You know you need to walk away, but something holds you: fear of being alone, fear of starting over, fear that leaving means admitting you were wrong to stay so long. The cups behind you may be empty, but they are familiar, and familiarity can masquerade as safety. This reversal can also point to a restless drifting — leaving not because you are called toward something, but because you are running from discomfort that will follow you wherever you go. Discernment is everything. Are you staying out of wisdom, or out of fear?",
    reflection:
      "If fear were not a factor, would you still be here? What is the worst thing that could happen if you left — and what is the worst thing that could happen if you stayed?",
    guidance:
      "You do not have to leap. Take one small step away — a conversation, a boundary, a quiet admission to yourself — and see how it feels. The mountains will still be there tomorrow. What matters is that you stop pretending the cups are full.",
  },
};

export default eightOfCups;
