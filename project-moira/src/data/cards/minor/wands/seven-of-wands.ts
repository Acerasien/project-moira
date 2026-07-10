import type { TarotCard } from "../../types";

const sevenOfWands: TarotCard = {
  id: "seven-of-wands",
  name: "Seven of Wands",
  arcana: "minor",
  suit: "wands",
  number: 7,
  keywords: ["Perseverance", "Defense", "Standing Your Ground"],
  image: "/cards/minor/wands/seven-of-wands.png",
  upright: {
    summary:
      "You are standing your ground on the high terrain, fending off challenges from all sides — this is a test of courage, conviction, and endurance.",
    meaning:
      "The Seven of Wands depicts a lone figure standing atop a hill, wielding a wand against six others rising from below. The position is defensive but strong — you hold the higher ground, and that matters. This card appears when you are being challenged: by competitors, by critics, by those who doubt your right to be where you are. You may feel outnumbered, but you are not outmatched. The Seven of Wands is about conviction under pressure. It asks you to defend your ideas, your boundaries, your position — not with aggression, but with steady resolve. This is the moment when the work you have done and the truth you carry are tested by fire. The question is not whether you will be challenged, but whether you believe strongly enough in your own stance to hold it when the pushback comes.",
    reflection:
      "What belief, boundary, or achievement are you being asked to defend right now? Do you have the conviction to hold your ground, or are you wavering?",
    guidance:
      "Stand firm. You have earned the high ground — do not surrender it out of politeness or fatigue. Defend your position with clarity, not fury. The challenges you face now are not signs that you are wrong; they are signs that you are finally high enough to be seen.",
  },
  reversed: {
    summary:
      "The pressure has worn you down — you are struggling to hold your position, or you have surrendered ground you should have defended.",
    meaning:
      "When the Seven of Wands reverses, exhaustion has set in. You have been fighting for so long that your arms are tired and your resolve is fraying. The constant pushback — whether from external critics or your own internal doubts — has made you question whether the hill is even worth holding. This reversal can manifest as giving in to pressure, compromising on values you once held firm, or retreating from a conflict not because you were wrong, but because you were simply too tired to continue. It may also point to a different kind of problem: defensiveness. You are so accustomed to being challenged that you see attacks where none exist, and your guard is up even with those who mean you no harm. The wand is still in your hand — but you are swinging wildly, or you have dropped it entirely.",
    reflection:
      "Are you exhausted from fighting, or are you fighting battles that no longer serve you? What would it look like to choose your ground more wisely?",
    guidance:
      "Rest before you retreat. Fatigue makes every hill look like a mountain. If the battle is truly worth fighting, replenish yourself and return with renewed clarity. If it is not, there is no shame in walking away — but do so with intention, not defeat.",
  },
};

export default sevenOfWands;
