import type { TarotCard } from "../types";

const justice: TarotCard = {
  id: "justice",
  name: "Justice",
  arcana: "major",
  number: 11,
  keywords: ["Fairness", "Truth", "Consequence", "Accountability"],
  image: "/cards/major/justice.png",
  upright: {
    summary: "Truth cuts both ways — and the scales will find their balance, whether you help them or not.",
    meaning: "Justice sits with sword in one hand and scales in the other — the sword of clarity, the scales of consequence. This card arrives when a decision must be made with honesty, when the truth can no longer be bent to fit convenience. It is not punishment; it is alignment. Every action has rippled outward, and now the ripples return. This is the card of accountability — not the cold kind, but the kind that restores integrity. You are being asked to see clearly, judge fairly, and act with the courage that truth demands.",
    reflection: "Where in your life is it time to face the facts — not as you wish they were, but as they actually are? What truth have you been softening to avoid a difficult reckoning?",
    guidance: "Make one decision today based on what is true, not what is comfortable. Even a small act of honesty tips the scales toward wholeness.",
  },
  reversed: {
    summary: "The scales are tipped — by denial, dishonesty, or an unwillingness to accept what you already know.",
    meaning: "When Justice appears reversed, something is out of balance. You may be avoiding accountability for your own actions, or you may be on the receiving end of unfairness — a decision that stings with its lack of truth. This reversal can also signal self-deception: the stories you tell yourself to escape the weight of your choices. Justice delayed is not justice denied, but it is justice made heavier. The longer you avoid the reckoning, the sharper the sword.",
    reflection: "What truth are you refusing to accept — about a situation, a relationship, or yourself? What would it cost you to finally name it, and what would it cost you to keep hiding?",
    guidance: "Write down the truth you've been avoiding. Not to punish yourself — to free yourself. Clarity is the first step back toward balance.",
  },
};

export default justice;
