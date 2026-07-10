import type { TarotCard } from "../../types";

const knightOfPentacles: TarotCard = {
  id: "knight-of-pentacles",
  name: "Knight of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 12,
  keywords: ["Reliability", "Hard Work", "Routine", "Persistence"],
  image: "/cards/minor/pentacles/knight-of-pentacles.png",
  upright: {
    summary:
      "Slow and steady does not just win the race — it builds the road along the way.",
    meaning:
      "The Knight of Pentacles sits on a sturdy horse, surveying the field before him. He is not galloping — he never gallops. He moves with deliberate, patient purpose, because he understands that the work worth doing is rarely the work done quickly. This card represents the steady builder, the reliable presence, the person who shows up day after day without fanfare. It may not be the most exciting energy, but it is the energy that finishes things. Trust this pace. It will carry you further than speed ever could.",
    reflection:
      "Where in your life are you being called to move slowly and steadily rather than quickly and brilliantly? Can you trust that consistency will get you there?",
    guidance:
      "Keep going. Not faster, not harder — just keep going. The Knight of Pentacles does not need to be the fastest. They only need to be the one who never stops.",
  },
  reversed: {
    summary:
      "The horse stands still — stubbornness, stagnation, or burnout has set in.",
    meaning:
      "Reversed, the Knight of Pentacles becomes stuck. The patience that once served you has calcified into stubbornness; the steady pace has slowed to a complete halt. You may be resisting necessary change, clinging to routines that no longer serve you, or simply so exhausted by the grind that you cannot find the energy to move forward. Alternatively, this reversal can signal a reckless impatience — the opposite extreme, where you abandon the slow path and charge ahead without preparation.",
    reflection:
      "Have you stopped moving because you are being patient, or because you are afraid of what comes next? Is your routine supporting you or suffocating you?",
    guidance:
      "If you are stuck, examine whether it is fear or fatigue holding you in place. Rest if you need to, but do not confuse resting with avoiding. The horse is still beneath you — you only need to nudge it forward.",
  },
};

export default knightOfPentacles;
