import type { TarotCard } from "../../types";

const aceOfCups: TarotCard = {
  id: "ace-of-cups",
  name: "Ace of Cups",
  arcana: "minor",
  suit: "cups",
  number: 1,
  keywords: ["New Love", "Emotional Beginning", "Overflow", "Intuition"],
  image: "/cards/minor/cups/ace-of-cups.png",
  upright: {
    summary:
      "A vessel overflows with pure emotion — a gift from the heart, freely given. This is the seed of love, a new wellspring of feeling rising within you.",
    meaning:
      "The Ace of Cups signals the arrival of something deeply tender. A new relationship may blossom, a creative spark may ignite, or you may simply find yourself flooded with gratitude for no reason at all. The cup overflows not because it is forced, but because it is full. This is emotion in its most pristine form — unpolluted by expectation or fear. Trust what rises within you now. The heart knows a language that the mind cannot parse, and right now it is speaking clearly. Say yes to what moves you.",
    reflection:
      "When was the last time you let yourself feel something fully, without editing it or talking yourself out of it? What would open in your life if you gave your heart permission to lead, just this once?",
    guidance:
      "Let the feeling come. Do not name it too quickly or demand it prove its worth. The beginning of anything true is tender and easily dismissed. Protect this seed with quiet attention, not loud declarations.",
  },
  reversed: {
    summary:
      "The cup is overturned, or the flow is blocked. Emotion sits stagnant, or it leaks away before it can be offered. Something inside you is withholding.",
    meaning:
      "Reversed, the Ace of Cups suggests emotional numbness, blocked creativity, or a reluctance to open your heart. You may be guarding yourself so thoroughly that nothing can enter — or exit. Perhaps a past wound has convinced you that vulnerability is dangerous, or maybe you are simply depleted and have nothing left to pour. This is not a punishment; it is a signal. The well needs tending before it can give again. Pay attention to what you are numbing. Behind every locked door there is something asking to be felt.",
    reflection:
      "What emotion have you been avoiding? Is there a grief, a longing, or even a joy that feels too big to hold? Who taught you that overflowing was the same as losing control?",
    guidance:
      "Start small. You do not need to flood the landscape — a single honest tear, a single true word, is enough to crack the dam. Ask yourself what you need before you ask what you should give.",
  },
};

export default aceOfCups;
