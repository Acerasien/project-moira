import type { TarotCard } from "../../types";

const kingOfPentacles: TarotCard = {
  id: "king-of-pentacles",
  name: "King of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 14,
  keywords: ["Prosperity", "Security", "Leadership", "Discipline"],
  image: "/cards/minor/pentacles/king-of-pentacles.png",
  upright: {
    summary:
      "You have built an empire not of gold but of steadiness — and it is unshakable.",
    meaning:
      "The King of Pentacles sits on a throne adorned with vines and bulls, a scepter in one hand and a coin in the other. He is the master of the material realm — not because he seized it, but because he earned it through discipline, patience, and an unshakeable commitment to what lasts. He represents financial mastery, wise stewardship, and the kind of leadership that creates security for everyone under his care. He does not need to impress you. His presence alone is the proof. When this card appears, you are being called to embody that same grounded authority — to own your expertise, your resources, and your ability to create lasting stability.",
    reflection:
      "Where in your life have you earned the right to stand in your own authority? Are you owning your competence, or are you downplaying it?",
    guidance:
      "Step into your power — not with arrogance, but with the quiet confidence of someone who has done the work. The King of Pentacles does not need to shout. He simply is, and that is enough.",
  },
  reversed: {
    summary:
      "The throne wobbles — greed, rigidity, or financial mismanagement undermines the kingdom.",
    meaning:
      "When the King of Pentacles reverses, the stability he represents has been compromised. This can manifest as obsession with wealth at the expense of relationships, stubborn refusal to adapt, or financial recklessness disguised as confidence. It can also point to a loss of authority — feeling unmoored, financially insecure, or unable to provide the stability you once could. The king has become either a tyrant or a beggar, and neither version serves the kingdom well.",
    reflection:
      "Is your relationship with money and power one of stewardship or of control? Are you leading from grounded wisdom, or from fear of losing what you have?",
    guidance:
      "Wealth is a tool, not an identity. If you have been rigid, soften. If you have been reckless, steady yourself. The true king does not rule by grasping — he rules by trusting that what he has built will hold.",
  },
};

export default kingOfPentacles;
