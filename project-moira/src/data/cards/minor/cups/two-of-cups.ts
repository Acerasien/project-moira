import type { TarotCard } from "../../types";

const twoOfCups: TarotCard = {
  id: "two-of-cups",
  name: "Two of Cups",
  arcana: "minor",
  suit: "cups",
  number: 2,
  keywords: ["Partnership", "Connection", "Mutual Attraction", "Unity"],
  image: "/cards/minor/cups/two-of-cups.png",
  upright: {
    summary:
      "Two souls meet, and something clicks into place. This is the electricity of mutual recognition — romantic, platonic, or creative — a bond that feels destined.",
    meaning:
      "The Two of Cups is the card of coming together. It speaks of attraction that flows both ways, of understanding that arrives without translation. Whether this is a new romance, a deepening friendship, or a collaboration that makes your work feel like play, the energy here is reciprocal. You are seen, and you see in return. This is not a merger that erases individuality — it is a meeting of equals, each holding their own cup while offering a drink to the other. The caduceus above the cups reminds us that healing happens in connection. Let this bond be a mirror that reflects your best self back to you.",
    reflection:
      "Who in your life makes you feel more like yourself, not less? What partnership — current or potential — would ask you to rise rather than shrink?",
    guidance:
      "Reach out. The connection you are hoping for will not manifest through wishing alone. Extend your hand, your words, your presence. And when the other reaches back, receive them with the same openness you hope to be received with.",
  },
  reversed: {
    summary:
      "The cups have separated. Trust is fractured, or the connection was never truly mutual. Imbalance has crept in where harmony once lived.",
    meaning:
      "Reversed, the Two of Cups reveals a partnership out of alignment. One person may be giving far more than the other, or communication has broken down so thoroughly that you are speaking different languages. This can point to a breakup, a falling-out, or the slow drift of two people who stopped truly seeing each other. It may also signal a fear of intimacy — pulling away just as things get real. The mirror is cracked, and what it reflects is distorted. Before you blame the other person, examine your own reflection. Are you showing up fully, or have you already checked out?",
    reflection:
      "Where in this relationship have you stopped being honest? Is the imbalance something you contributed to, or something you have been tolerating? What would it cost you to name it out loud?",
    guidance:
      "Separation is not always the answer, but neither is clinging. If the bond can be repaired, it will require radical honesty from both sides. If it cannot, honor what it taught you and release it with grace. You deserve a love that pours back.",
  },
};

export default twoOfCups;
