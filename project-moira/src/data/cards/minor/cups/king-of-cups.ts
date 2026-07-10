import type { TarotCard } from "../../types";

const kingOfCups: TarotCard = {
  id: "king-of-cups",
  name: "King of Cups",
  arcana: "minor",
  suit: "cups",
  number: 14,
  keywords: ["Emotional Maturity", "Diplomacy", "Calm", "Wisdom"],
  image: "/cards/minor/cups/king-of-cups.png",
  upright: {
    summary:
      "A king sits on a throne floating upon the sea, holding a cup and a scepter. He has mastered the waves without suppressing them. Calm authority born of emotional depth.",
    meaning:
      "The King of Cups is the culmination of emotional intelligence. He has walked through the entire suit — the overflow of the Ace, the bond of the Two, the grief of the Five, the departure of the Eight — and has emerged not hardened but wise. He does not react; he responds. His calm is not the absence of feeling but the result of having felt everything and learned not to be ruled by it. This card may represent a person in your life — a mentor, a steady partner, a diplomatic leader — or an aspect of yourself that is ready to step forward. You are being called to embody grace under pressure, to hold space for others without losing your own center, and to trust that your emotional maturity is a form of power.",
    reflection:
      "What would it feel like to be the calmest person in the room — not because you are detached, but because you are so secure in your own depths that nothing can capsize you?",
    guidance:
      "Lead with steadiness. When conflict arises, be the one who de-escalates. When someone comes to you in distress, offer your presence more than your solutions. The King of Cups knows that true authority is not loud — it is the still point around which the storm turns.",
  },
  reversed: {
    summary:
      "The sea rises and the king loses his throne. Emotional volatility, repression, or the kind of manipulation that wears the mask of wisdom.",
    meaning:
      "Reversed, the King of Cups reveals emotional instability hiding behind a composed facade. You — or someone around you — may be repressing feelings so thoroughly that they leak out in destructive ways: passive aggression, sudden outbursts, or the cold cruelty of emotional withdrawal. This reversal can also point to manipulation disguised as care — the person who uses their understanding of your emotions to control you, or the part of yourself that weaponizes sensitivity. At its most extreme, it signals a complete disconnection from the heart, resulting in a coldness that passes for strength but is really just armor.",
    reflection:
      'What emotion are you not admitting to yourself? Where have you confused control with maturity, or detachment with wisdom? Is there someone in your life whose "calm" feels more like distance?',
    guidance:
      "True mastery does not mean never capsizing — it means knowing how to right the ship. Let yourself feel what you are feeling without judgment. If you have been cold, warm slowly. If you have been volatile, find the stillness beneath the storm. The throne is still there, even if the waves are high.",
  },
};

export default kingOfCups;
