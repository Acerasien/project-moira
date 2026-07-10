import type { TarotCard } from "../../types";

const eightOfPentacles: TarotCard = {
  id: "eight-of-pentacles",
  name: "Eight of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 8,
  keywords: ["Diligence", "Mastery", "Craft", "Dedication"],
  image: "/cards/minor/pentacles/eight-of-pentacles.png",
  upright: {
    summary:
      "The work is quiet, repetitive, and deeply sacred — this is how mastery is made.",
    meaning:
      "The Eight of Pentacles shows an artisan bent over their workbench, chiseling one pentacle after another with focused attention. This is not the glamorous work of inspiration — it is the humble, daily practice of showing up and doing the thing again, and again, until your hands know what your mind once struggled to grasp. It is the card of apprenticeship, of skill-building, of the long hours that no one applauds. And yet, this is where excellence is forged: one careful, unremarkable repetition at a time.",
    reflection:
      "What skill are you currently developing through steady practice? Are you honoring the process, or only chasing the result?",
    guidance:
      "Do not rush toward mastery. Love the repetition. The thousandth attempt will be better than the first — not because you tried harder, but because you kept showing up. This is the quiet work that changes everything.",
  },
  reversed: {
    summary:
      "The workbench is abandoned — boredom, perfectionism, or burnout has taken its place.",
    meaning:
      "Reversed, the Eight of Pentacles signals a loss of focus or motivation. You may be cutting corners, rushing through tasks that deserve care, or feeling trapped in a monotonous routine that has lost all meaning. Alternatively, perfectionism may be paralyzing you — the fear that your work is not good enough keeps you from doing it at all. Either way, the craft suffers when the craftsman loses heart.",
    reflection:
      "Have you lost connection to the work you once cared about? Are you rushing, avoiding, or over-polishing — and what is underneath that impulse?",
    guidance:
      "Reconnect with why you started. If the work has become drudgery, find a way to bring curiosity back into it. If perfectionism is the block, remember: done is better than flawless, and done well comes later.",
  },
};

export default eightOfPentacles;
