import type { TarotCard } from "../../types";

const nineOfCups: TarotCard = {
  id: "nine-of-cups",
  name: "Nine of Cups",
  arcana: "minor",
  suit: "cups",
  number: 9,
  keywords: ["Contentment", "Satisfaction", "Wishes Fulfilled", "Gratitude"],
  image: "/cards/minor/cups/nine-of-cups.png",
  upright: {
    summary:
      "A figure sits with arms crossed, a satisfied smile beneath nine golden cups arranged behind them. This is the wish card — the moment when desire meets fulfillment.",
    meaning:
      "The Nine of Cups is one of the most affirming cards in the deck. It signals a season of emotional abundance: your heart is full, your efforts have borne fruit, and you can finally exhale. This is not the frantic high of getting everything you want — it is the quieter, deeper pleasure of realizing you have everything you need. The cups are not overflowing dramatically like the Ace; they are simply present, steady, yours. You have earned this contentment, whether through hard work, emotional honesty, or simply the grace of surviving long enough to appreciate the view. Let yourself feel it fully. Gratitude is not a tax on joy; it is the amplifier.",
    reflection:
      "What wish — spoken or unspoken — has quietly come true in your life? When did you last let yourself sit in satisfaction without immediately searching for the next thing to fix or chase?",
    guidance:
      "Celebrate. Not with noise, necessarily, but with presence. Look at the cups behind you and name them. Say thank you — to yourself, to the people who helped, to whatever mystery arranged the timing. Satisfaction is not the end of striving; it is the fuel for the next chapter.",
  },
  reversed: {
    summary:
      "The cups are still there, but the smile has faded. Discontent has crept into abundance, or the wishes you made were not the ones you truly wanted.",
    meaning:
      'Reversed, the Nine of Cups reveals the hollow side of getting what you asked for. You may have achieved everything on your checklist only to find that it does not feel the way you imagined. This is the "arrival fallacy" — the belief that the next milestone will finally make you happy, only to discover that the goalpost has moved again. Alternatively, this reversal can point to an overemphasis on material or external satisfaction while neglecting inner fulfillment. The cups behind you are real, but they are not enough because they were never the real wish. Something deeper is still hungry.',
    reflection:
      "What did you think would make you happy that hasn't? Is the problem the thing itself, or is it your refusal to let yourself be satisfied? What is the wish beneath the wish?",
    guidance:
      "Stop collecting. Start feeling. One cup fully tasted is worth more than nine that you merely display. Ask yourself what would genuinely nourish you — not what would look impressive to others, but what would make you uncross your arms and rest.",
  },
};

export default nineOfCups;
