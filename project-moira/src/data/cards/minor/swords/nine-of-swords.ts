import type { TarotCard } from "../../types";

const nineOfSwords: TarotCard = {
  id: "nine-of-swords",
  name: "Nine of Swords",
  arcana: "minor",
  suit: "swords",
  number: 9,
  keywords: ["Anxiety", "Worry", "Nightmares", "Overthinking"],
  image: "/cards/minor/swords/nine-of-swords.png",
  upright: {
    summary:
      "In the dark hours, the mind becomes its own worst enemy — every fear magnified, every shadow a threat.",
    meaning:
      "The Nine of Swords shows a figure sitting up in bed, head in hands, nine swords mounted horizontally on the wall behind them. This is the card of the 3 a.m. mind — the hour when worries multiply, when every mistake replays, when the worst-case scenario feels like prophecy. The swords on the wall are not actively threatening; they are the accumulated fears, regrets, and anxieties that haunt the quiet hours. The Nine of Swords speaks to the uniquely human capacity to suffer from things that have not happened and may never happen. It is the card of overthinking spiraling into despair. But the dawn always comes, and what felt catastrophic in the dark often shrinks in the light.",
    reflection:
      "What worry has been keeping you awake? Is it a real problem to solve, or a story your mind is telling on repeat?",
    guidance:
      "When the spiral begins, ground yourself in the physical: name five things you can see, four you can touch, three you can hear. The body is always in the present, even when the mind is not.",
  },
  reversed: {
    summary:
      "The night begins to lift — the worries are still there, but their grip is loosening.",
    meaning:
      "Reversed, the Nine of Swords signals the beginning of relief from mental anguish. The anxiety is not gone, but it is no longer in control. You may be learning to name your fears and see them for what they are — thoughts, not truths. This reversal can also point to the release that comes from speaking your worries aloud, from sharing the burden with someone who can offer perspective. Sometimes the reversed Nine appears when you are ready to seek help: therapy, honest conversation, or simply the decision to stop suffering in silence. The swords remain on the wall, but you are no longer lying beneath them.",
    reflection:
      "What fear have you been carrying alone that might shrink if you shared it? Who could you trust with the weight you have been holding?",
    guidance:
      "Reach out. Speak the worry that feels unspeakable. You will likely find that saying it aloud strips it of much of its power. You are not alone in the dark.",
  },
};

export default nineOfSwords;
