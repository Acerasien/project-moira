import type { TarotCard } from "../../types";

const sevenOfPentacles: TarotCard = {
  id: "seven-of-pentacles",
  name: "Seven of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 7,
  keywords: ["Patience", "Assessment", "Growth", "Investment"],
  image: "/cards/minor/pentacles/seven-of-pentacles.png",
  upright: {
    summary:
      "You have been tending the soil for a long time — pause now and see what has grown.",
    meaning:
      "The Seven of Pentacles shows a gardener leaning on their hoe, gazing at a bush heavy with pentacles. This is the card of the long pause — the moment after the work and before the harvest, when you step back to assess what you have built. It asks you to consider: is this crop worth the seasons you have given it? Have your investments of time, energy, and love yielded what you hoped? There is no urgency here. Just the quiet, honest act of taking stock.",
    reflection:
      "Look at what you have been cultivating — your career, your relationships, your habits. Is the harvest matching the effort? What needs more time, and what might need to be pruned?",
    guidance:
      "Be patient with what is still growing. But be honest about what is not. Not every seed was meant to become a tree. Some were lessons, and those have already ripened.",
  },
  reversed: {
    summary:
      "The harvest feels thin — impatience or poor investment has taken its toll.",
    meaning:
      "Reversed, the Seven of Pentacles brings the frustration of delayed results. You have worked hard, but the return feels disproportionate to the effort. Perhaps you spread your energy too thin, or perhaps you are judging the harvest before it is ready. This card can also point to restlessness — the urge to abandon a project that simply needs more time. The danger is that you will pull up the roots before the fruit has a chance to form.",
    reflection:
      "Are you being impatient with something that genuinely needs more time? Or are you pouring energy into soil that was never fertile to begin with?",
    guidance:
      "Distinguish between a slow harvest and a barren field. If the growth is real but slow, stay. If nothing has taken root despite your care, it may be time to plant elsewhere.",
  },
};

export default sevenOfPentacles;
