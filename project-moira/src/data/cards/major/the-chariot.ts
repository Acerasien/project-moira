import type { TarotCard } from "../types";

const theChariot: TarotCard = {
  id: "the-chariot",
  name: "The Chariot",
  arcana: "major",
  number: 7,
  keywords: ["Determination", "Willpower", "Victory", "Control"],
  image: "/cards/major/the-chariot.png",
  upright: {
    summary: "Momentum is on your side — harness the opposing forces and drive forward.",
    meaning: "The Chariot shows a warrior in a vehicle pulled by two creatures — often sphinxes, one dark and one light — moving in different directions yet held steady by the driver's will. This is the card of triumph through focus: not the absence of conflict, but the mastery of it. You have competing impulses, desires, or obligations pulling at you, but you are not their victim. You are the one holding the reins. Victory comes not from eliminating tension but from channeling it into motion.",
    reflection: "What opposing forces are currently pulling at you — and how might you steer them in the same direction rather than letting them tear you apart?",
    guidance: "Identify the two strongest, most contradictory urges you feel right now. Instead of suppressing one, ask: how can both serve the same destination? Then move.",
  },
  reversed: {
    summary: "The reins have slipped — scattered energy, lost direction, or a collision of forces you couldn't contain.",
    meaning: "When The Chariot appears reversed, the driver has lost control. The opposing forces that once propelled you forward are now pulling you apart. This may show up as scattered focus, a project stalling, or an ego-driven push that ignores the needs of others — or your own limits. The chariot itself is intact, but without a steady hand, it careens. This reversal asks: are you driving, or are you being dragged?",
    reflection: "Where have you been pushing too hard, or in too many directions at once? What would happen if you paused, regrouped, and chose one clear path?",
    guidance: "Stop fighting on every front. Choose one battle today — the one that truly matters — and put the others on hold. Control returns when focus narrows.",
  },
};

export default theChariot;
