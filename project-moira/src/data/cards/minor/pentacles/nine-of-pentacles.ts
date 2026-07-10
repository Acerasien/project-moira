import type { TarotCard } from "../../types";

const nineOfPentacles: TarotCard = {
  id: "nine-of-pentacles",
  name: "Nine of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 9,
  keywords: ["Independence", "Luxury", "Self-Sufficiency", "Reward"],
  image: "/cards/minor/pentacles/nine-of-pentacles.png",
  upright: {
    summary:
      "You have built something beautiful with your own hands — and now you get to enjoy it.",
    meaning:
      "The Nine of Pentacles depicts a woman standing in a lush garden, a falcon resting on her gloved hand. She is elegant, self-possessed, surrounded by the fruits of her own labor. This card celebrates the harvest that comes after seasons of disciplined work — financial independence, refined taste, the quiet confidence of someone who does not need to prove anything because they already know their worth. It is not about ostentation. It is about the deep satisfaction of looking around and realizing: I made this. This life is mine.",
    reflection:
      "What have you built through your own effort that you are proud of? Can you pause and truly savor it, without immediately reaching for the next goal?",
    guidance:
      "Enjoy the garden. Walk through it slowly. You have earned this season of ease — not because you stopped working, but because the work you did has finally bloomed into something you can hold.",
  },
  reversed: {
    summary:
      "The garden feels empty — independence has curdled into isolation.",
    meaning:
      "When the Nine of Pentacles reverses, self-sufficiency tips into loneliness. You may have achieved material comfort, but at the cost of connection. Or perhaps financial independence feels fragile — built on a foundation that is not as solid as it appears. This reversal can also signal a dependence on others that undermines your sense of self-worth. The falcon is still on your hand, but you have forgotten that it was trained to fly.",
    reflection:
      "Has your independence come at the expense of intimacy? Are you truly self-sufficient, or are you hiding the ways you still need others?",
    guidance:
      "Independence is not the same as isolation. Let someone into the garden. The beauty you have cultivated is meant to be shared — not guarded behind walls that keep everyone out.",
  },
};

export default nineOfPentacles;
