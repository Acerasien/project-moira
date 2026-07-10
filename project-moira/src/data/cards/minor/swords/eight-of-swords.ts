import type { TarotCard } from "../../types";

const eightOfSwords: TarotCard = {
  id: "eight-of-swords",
  name: "Eight of Swords",
  arcana: "minor",
  suit: "swords",
  number: 8,
  keywords: ["Restriction", "Entrapment", "Self-Imposed Limits", "Helplessness"],
  image: "/cards/minor/swords/eight-of-swords.png",
  upright: {
    summary:
      "Bound and blindfolded, surrounded by swords — the prison is real, but the door was never locked.",
    meaning:
      "The Eight of Swords depicts a woman blindfolded and loosely bound, standing in a circle of eight swords planted in the ground. The sky is gray, the ground is wet, and yet — she could walk free if she only knew. This is the card of self-imposed limitation, the mental prison built from fear, doubt, and negative self-talk. The swords are not piercing her; they are merely surrounding her. The bonds are not tight. The blindfold is fabric, not stone. The Eight of Swords reminds us that the most confining cages are often the ones we build in our own minds. The situation may be difficult, but the helplessness is a story — and stories can be rewritten.",
    reflection:
      "What limits have you accepted as fact that might actually be assumptions? Where are you waiting for rescue when you could walk free on your own?",
    guidance:
      "Question one limiting belief today. Write it down and ask: is this absolutely true? What would I do differently if I knew it was not true?",
  },
  reversed: {
    summary:
      "The blindfold falls — you see the cage for what it was, and freedom becomes possible.",
    meaning:
      "Reversed, the Eight of Swords signals the beginning of liberation. The blindfold is coming off, and with it comes the startling recognition that the prison was largely of your own making. This is the moment of awakening — when you realize the story you have been telling yourself is not the only story, and perhaps not even a true one. This reversal can also point to external restrictions finally lifting: an oppressive situation ending, a period of isolation concluding. But the deeper truth of the Eight reversed is that the power was always yours. The swords are still there, but now you see them for what they are: obstacles, not walls.",
    reflection:
      "What story about your limitations are you ready to release? What becomes possible when you stop believing you are trapped?",
    guidance:
      "Take one action today that your 'trapped' self would not have taken. Prove the prison was never locked by walking through the door.",
  },
};

export default eightOfSwords;
