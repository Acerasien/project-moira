import type { TarotCard } from "../../types";

const kingOfSwords: TarotCard = {
  id: "king-of-swords",
  name: "King of Swords",
  arcana: "minor",
  suit: "swords",
  number: 14,
  keywords: ["Authority", "Truth", "Intellect", "Justice"],
  image: "/cards/minor/swords/king-of-swords.png",
  upright: {
    summary:
      "The mind enthroned — authority earned through clarity, power wielded with precision.",
    meaning:
      "The King of Swords sits in judgment, sword held upright, his expression calm and unreadable. He is the master of the mental realm — the judge, the strategist, the leader whose authority comes not from force but from understanding. This card represents the mature intellect: disciplined, fair, capable of seeing every angle without being swayed by sentiment. The King of Swords does not decide from emotion, but neither is he cold. He has learned that true justice requires both clarity of thought and integrity of character. When this card appears, you are being called to lead with your mind — to make the decision you have been avoiding, to set the boundary you have been hesitating to draw, to speak with the authority that is rightfully yours.",
    reflection:
      "Where in your life are you being asked to step into authority — not dominance, but clear, fair leadership? What decision needs your clarity today?",
    guidance:
      "Make the call. Set the standard. You know more than you think you do, and your judgment is sounder than you give it credit for. Trust your mind.",
  },
  reversed: {
    summary:
      "The throne becomes a weapon — intellect used to dominate, or authority corrupted by ego.",
    meaning:
      "Reversed, the King of Swords reveals the dark side of intellectual power: the tyrant who uses logic to justify cruelty, the leader who mistakes control for wisdom. This reversal can signal an abuse of authority — whether you are on the giving or receiving end. It may point to someone in your life who uses their intellect as a cudgel, or to your own tendency to wield your sharp mind in ways that intimidate rather than illuminate. The King reversed can also indicate a crisis of confidence: a mind that has lost faith in its own judgment, a leader who cannot lead. Either way, the question is the same: what are you doing with the power of your mind?",
    reflection:
      "Are you using your intellect to serve or to dominate? Have you confused being right with being wise?",
    guidance:
      "If you have been wielding your authority too harshly, soften your grip. If you have been doubting your own judgment, remember: the King earned his throne. So did you.",
  },
};

export default kingOfSwords;
