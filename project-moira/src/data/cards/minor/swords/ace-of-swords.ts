import type { TarotCard } from "../../types";

const aceOfSwords: TarotCard = {
  id: "ace-of-swords",
  name: "Ace of Swords",
  arcana: "minor",
  suit: "swords",
  number: 1,
  keywords: ["Clarity", "Truth", "Breakthrough", "New Idea"],
  image: "/cards/minor/swords/ace-of-swords.png",
  upright: {
    summary:
      "A blade of pure clarity cuts through the fog — truth arrives, undeniable and sharp.",
    meaning:
      "The Ace of Swords rises from the clouds, a single blade crowned and unadorned, held aloft by a hand that knows exactly what it offers. This is the gift of mental clarity — the moment a solution crystallizes, a conviction hardens, a truth you can no longer ignore. Swords are the suit of the mind, and the Ace is its purest expression: raw intellect, unfiltered perception, the power to name what is real. It does not soften the blow, but it does illuminate the path. When this card appears, you are being handed a sword — the question is whether you will wield it.",
    reflection:
      "What truth have you been circling that is now ready to be named? Where in your life is clarity asking you to stop equivocating?",
    guidance:
      "Speak the truth that is rising in you. Write it down, say it aloud, or share it with someone who can hold it steady. The clarity you seek is already present — give it language.",
  },
  reversed: {
    summary:
      "The blade is dulled — confusion clouds the mind, and truth feels just out of reach.",
    meaning:
      "When the Ace of Swords appears reversed, the gift of clarity has been obscured. Perhaps the fog has rolled back in, or the truth you glimpsed now feels too sharp to hold. This reversal can signal mental blockages, self-deception, or an idea that arrived before its time. The sword is still there — but it is pointing inward, tangled in doubt and second-guessing. You may feel unable to articulate what you know, or afraid that speaking it aloud will sever something you are not ready to lose. But avoidance does not dull the blade; it only delays the cut.",
    reflection:
      "What are you afraid of seeing clearly? What story are you telling yourself to avoid a difficult truth?",
    guidance:
      "Sit with the confusion rather than fighting it. Sometimes clarity needs stillness to re-emerge. Ask yourself: if there were no consequences, what would I say is true right now?",
  },
};

export default aceOfSwords;
