import type { TarotCard } from "../types";

const theEmpress: TarotCard = {
  id: "the-empress",
  name: "The Empress",
  arcana: "major",
  number: 3,
  keywords: ["Abundance", "Nurturing", "Creativity", "Nature"],
  image: "/cards/major/the-empress.png",
  upright: {
    summary: "Life is blooming around you — and through you. This is a season of abundance and tender care.",
    meaning: "The Empress reclines in a lush garden, surrounded by ripening wheat and flowering trees — a throne among the living. She embodies the creative force of nature itself: not the hurried, strained kind of making, but the generative ease of something growing because the conditions are right. This card signals a time of nourishment, whether you are the one giving care or the one finally allowing yourself to receive it. Creation flows through you now — in art, in relationships, in the life you are tending into being.",
    reflection: "What in your life is asking to be nurtured rather than forced? Where can you let things grow at their own pace instead of pushing?",
    guidance: "Do one thing today that feels like tending, not striving. Water a plant, feed a friendship, give yourself permission to create something beautiful without needing it to be useful.",
  },
  reversed: {
    summary: "The well has run dry — whether from neglect of self, of others, or of the life you're trying to grow.",
    meaning: "When The Empress appears reversed, the garden feels barren. You may be pouring your energy into everyone else while your own roots wither, or perhaps you've been neglecting the people and projects that depend on your care. Creative blocks, emotional numbness, or a sense of scarcity can signal this reversal. The question is not whether abundance is available — it always is — but what is blocking its flow.",
    reflection: "Where have you been giving from an empty cup? And where have you been withholding care — from yourself or from someone who genuinely needs it?",
    guidance: "Identify one area of your life that feels starved of attention. Give it fifteen minutes of undivided presence today — not to fix it, just to be with it.",
  },
};

export default theEmpress;
