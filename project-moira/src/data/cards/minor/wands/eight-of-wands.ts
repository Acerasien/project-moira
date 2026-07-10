import type { TarotCard } from "../../types";

const eightOfWands: TarotCard = {
  id: "eight-of-wands",
  name: "Eight of Wands",
  arcana: "minor",
  suit: "wands",
  number: 8,
  keywords: ["Speed", "Momentum", "Action", "Swift Change"],
  image: "/cards/minor/wands/eight-of-wands.png",
  upright: {
    summary:
      "Everything accelerates — the wands fly through the air, and momentum carries events forward with exhilarating speed and clarity.",
    meaning:
      "The Eight of Wands is one of the most dynamic cards in the deck. Eight wands streak diagonally across an open sky, unimpeded, aligned, and moving fast. There are no figures, no obstacles — just pure forward motion. This card arrives when the waiting is over. Messages come in, travel plans lock into place, projects that were stalled suddenly find their rhythm. The energy is swift, almost breathtaking. It can manifest as a flurry of communication — emails, calls, news — or as a rapid succession of events that change your landscape overnight. The Eight of Wands asks you to stay present and responsive. Do not try to slow things down to make them more manageable; instead, trust the momentum. The arrow is already in flight. Your role now is to align with its trajectory, not to redirect it midair.",
    reflection:
      "What area of your life is suddenly picking up speed? Are you resisting the pace, or are you leaning into the current?",
    guidance:
      "Move with the momentum, not against it. Respond quickly to what arrives — hesitation is the only thing that can miss this window. Clear your schedule, say yes to the invitation, send the message you have been drafting. The universe is in a hurry on your behalf. Let it be.",
  },
  reversed: {
    summary:
      "Momentum stalls — delays, miscommunication, or scattered energy pull you off course just when things should be taking flight.",
    meaning:
      "When the Eight of Wands reverses, the wands lose their alignment. The clear sky clouds over, and what should have been swift becomes sluggish. Delays frustrate you. Messages get lost, travel plans unravel, and the exciting momentum you felt just yesterday seems to have evaporated. This reversal can also point to a different kind of problem: chaos disguised as speed. You are moving fast, but in too many directions at once, scattering your energy without making real progress. Miscommunication runs rampant — you are speaking, but no one is hearing, or you are hearing things that were never said. Sometimes this card warns of a situation accelerating toward a collision you cannot yet see. The brakes exist for a reason. Not all speed is progress.",
    reflection:
      "Are the delays protecting you from a misstep, or are they revealing where your plans need refinement? Is your scattered energy serving you?",
    guidance:
      "When the wands tangle, do not force them apart. Pause, breathe, and gather your focus. Check for misunderstandings before they compound. If the delay is beyond your control, use the stillness to realign — because when the momentum returns, you will want to be aimed at the right target.",
  },
};

export default eightOfWands;
