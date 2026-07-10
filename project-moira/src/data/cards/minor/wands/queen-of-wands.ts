import type { TarotCard } from "../../types";

const queenOfWands: TarotCard = {
  id: "queen-of-wands",
  name: "Queen of Wands",
  arcana: "minor",
  suit: "wands",
  number: 13,
  keywords: ["Confidence", "Warmth", "Determination", "Vibrancy"],
  image: "/cards/minor/wands/queen-of-wands.png",
  upright: {
    summary:
      "You radiate warmth, confidence, and creative power — the Queen of Wands embodies the fire that inspires others without consuming them.",
    meaning:
      "The Queen of Wands sits upon her throne, a sunflower in one hand and a wand in the other, a black cat at her feet — symbols of vitality, authority, and intuitive wisdom. She is the fire that has learned to sustain itself. Unlike the impulsive Knight or the wide-eyed Page, the Queen has mastered her flame. She is magnetic not because she demands attention but because she is so fully, unapologetically herself. This card appears when you are stepping into your own power with grace — leading a team, nurturing a creative vision, holding space for others while tending your own fire. She reminds you that confidence is not loudness; it is presence. Warmth is not weakness; it is the sun that makes everything grow. You do not need to diminish yourself to make others comfortable. Shine. The world needs your particular light.",
    reflection:
      "Where in your life are you fully, unapologetically yourself? Where are you still dimming your light for the comfort of others?",
    guidance:
      "Own your power. Speak your vision with clarity and warmth. The Queen does not apologize for her fire — she tends it, shares it, and trusts that those who are drawn to her warmth belong there. Lead with both confidence and compassion. They are not opposites.",
  },
  reversed: {
    summary:
      "Self-doubt dims your fire, or your warmth has turned sharp — jealousy, burnout, or the exhaustion of performing confidence erodes your center.",
    meaning:
      "When the Queen of Wands reverses, the fire that once sustained you has become either a smolder of self-doubt or a blaze that burns those around you. You may be struggling with confidence — questioning your abilities, comparing yourself to others, shrinking to fit spaces that were never meant to contain you. The warmth you are known for feels performative now, a mask worn to hide exhaustion or insecurity. Alternatively, this reversal can signal the Queen's shadow: jealousy, manipulation, a need to be the center of attention that crosses into controlling territory. The sunflower becomes a weapon; the warmth becomes a demand. Sometimes this card points to burnout so deep that even the things you love feel like obligations. You have given so much of your fire to others that there is nothing left for yourself.",
    reflection:
      "Are you exhausted from radiating warmth you no longer feel? Who are you when no one is watching — and do you still recognize her?",
    guidance:
      "Reclaim your fire for yourself before sharing it with the world. Step back from the roles that demand constant performance. Tend your own garden before inviting others in. If jealousy or comparison has taken root, ask what it is telling you about your unmet desires — then address those honestly, without shame.",
  },
};

export default queenOfWands;
