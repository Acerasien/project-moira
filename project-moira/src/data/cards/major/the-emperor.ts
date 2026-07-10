import type { TarotCard } from "../types";

const theEmperor: TarotCard = {
  id: "the-emperor",
  name: "The Emperor",
  arcana: "major",
  number: 4,
  keywords: ["Authority", "Structure", "Stability", "Leadership"],
  image: "/cards/major/the-emperor.png",
  upright: {
    summary: "Order rises from chaos — steady hands build the world that vision alone cannot.",
    meaning: "The Emperor sits upon a stone throne, armored and unyielding, the ram's heads carved into its arms signaling determination and dominion. This is the card of structure: the architecture that holds a dream upright, the discipline that turns talent into mastery. Where The Empress nurtures, The Emperor builds — boundaries, systems, foundations. It is not the flash of inspiration but the quiet, relentless work of showing up and building something that lasts. You are being called to lead — a project, a household, your own life — with clarity and resolve.",
    reflection: "Where in your life does structure feel missing? What would it look like to bring order — not rigidity, but a steady, reliable shape — to something that has felt formless?",
    guidance: "Establish one boundary or system today that brings stability to a chaotic corner of your life. A morning routine, a clear expectation, a plan where there was only drift.",
  },
  reversed: {
    summary: "Power without wisdom — either a tyrant's grip or a hollow throne with no one sitting on it.",
    meaning: "When The Emperor appears reversed, authority is out of balance. On one side, the tyrant: controlling, inflexible, demanding obedience without earning respect. On the other, the absent leader: avoiding responsibility, letting things crumble through neglect or fear of wielding power at all. Both are a flight from the true burden of leadership, which is not domination but stewardship. This reversal asks you to examine your relationship with control — are you gripping too tightly, or have you let go entirely?",
    reflection: "Are you imposing order on others to avoid facing your own disorder? Or are you abdicating a role that is yours to hold — out of fear that you'll do it wrong?",
    guidance: "If you lean toward control, loosen one grip today and see what holds on its own. If you lean toward avoidance, take one decisive action — however small — that re-establishes your seat.",
  },
};

export default theEmperor;
