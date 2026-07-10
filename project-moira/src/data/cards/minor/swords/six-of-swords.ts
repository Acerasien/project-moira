import type { TarotCard } from "../../types";

const sixOfSwords: TarotCard = {
  id: "six-of-swords",
  name: "Six of Swords",
  arcana: "minor",
  suit: "swords",
  number: 6,
  keywords: ["Transition", "Moving On", "Healing", "Journey"],
  image: "/cards/minor/swords/six-of-swords.png",
  upright: {
    summary:
      "A boat carries you across still waters — the shore you leave behind was never meant to hold you forever.",
    meaning:
      "The Six of Swords shows a figure being ferried across a calm stretch of water, swords standing upright in the boat, a child huddled close. This is the card of transition — not the dramatic upheaval of the Tower, but the quiet, necessary movement from one chapter to the next. You are leaving something behind: a painful situation, an old mindset, a place that no longer fits. The journey may feel melancholy, but the waters ahead are calmer than the ones behind. The swords in the boat are not threats; they are the lessons you carry forward. You are not running away. You are moving toward.",
    reflection:
      "What are you ready to leave behind? What lessons from the past will you carry with you into calmer waters?",
    guidance:
      "Honor what you are leaving — it shaped you, even if it hurt. Then fix your eyes on the far shore. The crossing is happening now; let yourself be carried.",
  },
  reversed: {
    summary:
      "The boat resists forward motion — you are stuck between shores, unable to leave and unable to stay.",
    meaning:
      "Reversed, the Six of Swords signals difficulty with transition. You may feel trapped between where you were and where you need to go, unable to complete the crossing. Old patterns pull you back; old wounds resurface. Perhaps you are refusing to leave a situation that has already left you, or you are clinging to pain because it feels more familiar than the unknown. This reversal can also point to a literal journey that is delayed or disrupted. The destination has not changed — but the passage is taking longer than you hoped.",
    reflection:
      "What is keeping you tethered to a shore you have already outgrown? Is it fear, guilt, or the comfort of the familiar?",
    guidance:
      "Take one concrete step toward the new shore today — even a small one. Pack a box. Write the goodbye. Book the ticket. Forward motion, however slow, breaks the spell of being stuck.",
  },
};

export default sixOfSwords;
