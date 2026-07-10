import type { TarotCard } from "../../types";

const fourOfPentacles: TarotCard = {
  id: "four-of-pentacles",
  name: "Four of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 4,
  keywords: ["Security", "Control", "Hoarding", "Conservation"],
  image: "/cards/minor/pentacles/four-of-pentacles.png",
  upright: {
    summary:
      "You are holding on tightly — but ask yourself whether you are protecting or imprisoning.",
    meaning:
      "The Four of Pentacles depicts a figure clutching coins to their chest, arms wrapped around their possessions with a grip that leaves no room for anything else. This card speaks to the instinct to protect what you have built — savings, stability, boundaries. There is wisdom in conservation. But there is also a quiet warning: when holding on becomes holding too tight, security starts to look like stagnation. The coins are safe, but the hands that grip them are not free to receive anything new.",
    reflection:
      "What are you holding onto that you are afraid to lose? Is your grip protecting something precious — or is it keeping something else from reaching you?",
    guidance:
      "It is wise to save, to guard, to build reserves. But loosen your fingers just enough to let life circulate. A closed fist can hold only what it already has.",
  },
  reversed: {
    summary:
      "The grip finally breaks — releasing control, for better or worse.",
    meaning:
      "When the Four of Pentacles reverses, the tight hold loosens. This can be liberating: you are finally ready to share, to spend, to risk. Generosity flows where fear once blocked it. But it can also signal loss — financial instability, overspending, or a boundary that crumbled too quickly. The release is happening; the question is whether you are choosing it or it is choosing you.",
    reflection:
      "Are you letting go by choice or by circumstance? What do you fear will happen if you stop holding on so tightly?",
    guidance:
      "Release with intention, not from panic. If you are spending, spend on what matters. If you are giving, give from abundance, not from a need to prove something. Letting go can be freedom — but only when it is done with awareness.",
  },
};

export default fourOfPentacles;
