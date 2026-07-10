import type { TarotCard } from "../types";

const theMagician: TarotCard = {
  id: "the-magician",
  name: "The Magician",
  arcana: "major",
  number: 1,
  keywords: ["Willpower", "Manifestation", "Resourcefulness", "Skill"],
  image: "/cards/major/the-magician.png",
  upright: {
    summary: "The tools are before you — every element aligned, every gift at your command.",
    meaning: "The Magician stands at a table bearing the four suits of the tarot: a cup, a sword, a wand, and a pentacle. One hand points upward to the divine, the other toward the earth, channeling inspiration into form. This is the card of focused will — the moment when desire stops being a wish and becomes a creation. You already possess everything you need; the question is whether you will pick up the tools and begin.",
    reflection: "What gift or skill have you been underestimating in yourself? Where in your life is it time to stop preparing and start doing?",
    guidance: "Take one concrete action today that transforms an intention into reality. No matter how small — the first act breaks the spell of waiting.",
  },
  reversed: {
    summary: "Power misplaced — either dormant from doubt, or twisted toward manipulation.",
    meaning: "When The Magician appears reversed, the channel between vision and action is blocked. You may feel powerless, convinced that you lack what it takes — or you may be using your gifts to deceive, to control, to take shortcuts that erode trust. Either way, the energy is there but it isn't flowing cleanly. The question becomes: where is your will truly pointed, and are you honest about it?",
    reflection: "Are you holding back your power because you're afraid of what you might create — or what others might think? Or are you wielding it in a way that doesn't sit right with you?",
    guidance: "Reclaim your integrity. If you've been hiding your gifts, reveal one today. If you've been misusing them, course-correct with a small act of honesty.",
  },
};

export default theMagician;
