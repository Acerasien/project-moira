import type { TarotCard } from "../../types";

const sevenOfSwords: TarotCard = {
  id: "seven-of-swords",
  name: "Seven of Swords",
  arcana: "minor",
  suit: "swords",
  number: 7,
  keywords: ["Deception", "Strategy", "Evasion", "Cunning"],
  image: "/cards/minor/swords/seven-of-swords.png",
  upright: {
    summary:
      "A figure slips away with stolen swords — stealth outruns confrontation, but at what cost?",
    meaning:
      "The Seven of Swords shows a figure tiptoeing away from a military encampment, five swords cradled in their arms, two left behind, glancing back with a sly expression. This is the card of strategy, cunning, and sometimes outright deception. It speaks to the moments when the direct approach is not available to you — or when you choose the indirect path because it feels safer. The Seven of Swords can represent clever problem-solving, thinking outside the box, and getting what you need through wit rather than force. But it also carries a warning: stealth can become secrecy, and strategy can slide into manipulation. Ask yourself whether you are being clever — or just being dishonest.",
    reflection:
      "Where in your life are you taking an indirect path? Is it strategic wisdom, or are you avoiding something that needs to be faced directly?",
    guidance:
      "Use your cleverness, but do not let it become your crutch. If there is a conversation you have been avoiding, consider whether the direct path, though harder, might actually be the shorter one.",
  },
  reversed: {
    summary:
      "The scheme unravels — hidden truths surface, and the stolen swords must be returned.",
    meaning:
      "Reversed, the Seven of Swords signals exposure. The strategy that worked in secret is now being revealed, or the deception you have been carrying is becoming too heavy to hold. This can show up as being caught in a lie, as a confession you finally need to make, or as the dawning realization that someone has been dishonest with you. The reversed Seven also points to self-deception — the stories you tell yourself to justify shortcuts or avoid accountability. The two swords left behind were never forgotten; they were evidence. And evidence has a way of surfacing.",
    reflection:
      "What truth are you hiding — from others, or from yourself? What would it feel like to come clean?",
    guidance:
      "If you have been withholding something, consider the relief of disclosure. If someone has deceived you, trust what your instincts are telling you. The truth, once spoken, cannot be stolen back.",
  },
};

export default sevenOfSwords;
