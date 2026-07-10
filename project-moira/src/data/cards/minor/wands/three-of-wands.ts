import type { TarotCard } from "../../types";

const threeOfWands: TarotCard = {
  id: "three-of-wands",
  name: "Three of Wands",
  arcana: "minor",
  suit: "wands",
  number: 3,
  keywords: ["Expansion", "Foresight", "Progress", "Exploration"],
  image: "/cards/minor/wands/three-of-wands.png",
  upright: {
    summary:
      "Your ships are sailing — the plans you set in motion are now unfolding, and the horizon is wider than you ever imagined.",
    meaning:
      "The Three of Wands is the beautiful moment when preparation meets opportunity. You stand on a cliff's edge, watching your ships glide across the sea toward distant shores. You have done the work — the planning, the planting, the patient waiting — and now momentum is carrying your intentions forward. This card speaks of expansion in all its forms: travel, business growth, the broadening of your worldview, the deepening of your spiritual path. It is a promise that your vision was not foolish, that the risk you took was worth taking. But it also carries a quiet reminder: expansion requires openness. The ships will return with foreign treasures, unfamiliar ideas, new collaborators. Are you ready to receive what comes from beyond the borders of your current understanding?",
    reflection:
      "What part of your life is expanding right now, whether you have fully acknowledged it or not? Where are you being asked to think bigger?",
    guidance:
      "Keep your eyes on the horizon, not on the ground. This is a season for bold thinking and long-range vision. Say yes to opportunities that stretch you. If an invitation arrives that feels slightly beyond your current reach, consider it a sign that you are ready to grow into it.",
  },
  reversed: {
    summary:
      "Plans have stalled or the results you hoped for are delayed — frustration with slow progress or a fear of stepping beyond the familiar.",
    meaning:
      "When the Three of Wands appears reversed, it can feel as though your ships have stalled mid-voyage or returned empty. The plans you set in motion are not unfolding as you imagined, and impatience creeps in. Perhaps you launched something before it was fully ready, or external circumstances beyond your control have disrupted the timeline. Sometimes this reversal reveals a deeper reluctance: a part of you that fears the very expansion you claim to want. Growth means leaving the shore behind, and the shore — for all its limitations — is known and safe. You may also be experiencing a crisis of vision, unable to see the path ahead clearly, questioning whether your goals were ever realistic to begin with.",
    reflection:
      "Are the obstacles truly external, or is some part of you resisting the journey? What would you attempt if you trusted the timing of your life?",
    guidance:
      "Delays are not denials. Revisit your plans with fresh eyes — adjust, refine, but do not abandon. If fear of the unknown is the real barrier, take one small step beyond your comfort zone today. The ships will sail; sometimes they simply need a different wind.",
  },
};

export default threeOfWands;
