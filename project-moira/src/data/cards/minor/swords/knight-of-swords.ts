import type { TarotCard } from "../../types";

const knightOfSwords: TarotCard = {
  id: "knight-of-swords",
  name: "Knight of Swords",
  arcana: "minor",
  suit: "swords",
  number: 12,
  keywords: ["Action", "Impulsivity", "Ambition", "Speed"],
  image: "/cards/minor/swords/knight-of-swords.png",
  upright: {
    summary:
      "A charge into the wind, sword raised, eyes fixed on the target — nothing matters but the pursuit.",
    meaning:
      "The Knight of Swords is motion personified. Horse and rider surge forward, sword extended, cape streaming behind, clouds churning overhead. This is the card of decisive action — the moment when thought becomes movement, when the plan becomes the charge. The Knight does not hesitate, does not second-guess, does not pause to consider collateral damage. There is immense power here: the ability to cut through obstacles, to pursue a goal with single-minded intensity, to speak the hard truth without flinching. But the Knight's gift is also their danger. Speed without direction becomes recklessness. Conviction without reflection becomes arrogance. The question is not whether you can move fast — it is whether you know where you are going.",
    reflection:
      "Where in your life are you charging ahead? Is your speed serving your purpose, or is it masking a fear of stillness?",
    guidance:
      "Before you act, take one breath and ask: am I moving toward something, or away from something? Speed is a tool, not a strategy.",
  },
  reversed: {
    summary:
      "The charge falters — impulsivity leads to a crash, or ambition stalls into frustration.",
    meaning:
      "Reversed, the Knight of Swords signals the consequences of unchecked momentum. The charge may have met a wall; the sharp words may have cut too deep; the ambitious plan may have collapsed under the weight of its own haste. This reversal can manifest as burnout, as conflict born from impatience, or as a scattering of energy into too many directions at once. Alternatively, it can point to the opposite extreme: ambition that has stalled, a mind that wants to move but feels paralyzed. The Knight reversed is a call to slow down — not to stop, but to find a pace that is sustainable.",
    reflection:
      "Where has your impulsivity cost you? What would change if you moved with intention instead of urgency?",
    guidance:
      "Pause the pursuit. Reassess the target. The goal may still be right, but the approach needs recalibration. Speed will return — but only after clarity does.",
  },
};

export default knightOfSwords;
