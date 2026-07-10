import type { TarotCard } from "../types";

const theFool: TarotCard = {
  id: "the-fool",
  name: "The Fool",
  arcana: "major",
  number: 0,
  keywords: ["Beginnings", "Innocence", "Spontaneity", "Leap of Faith"],
  image: "/cards/major/the-fool.png",
  upright: {
    summary:
      "A new journey begins — untethered, unafraid, and full of possibility.",
    meaning:
      "The Fool stands at the edge of a cliff, gazing upward, a small dog at their heels. They carry only a light bundle — enough for the journey, nothing more. This card speaks to the courage of beginnings: the moment before you know the outcome, when hope outweighs caution. It is not naivety but trust — trust in the path, in the unknown, in your own capacity to meet what comes.",
    reflection:
      "Where in your life are you standing at the edge of something new? What would it feel like to take the step without needing to know where you'll land?",
    guidance:
      "Today, let yourself be a beginner. Say yes before you're ready. The preparation you already carry is enough.",
  },
  reversed: {
    summary:
      "A hesitation at the threshold — fear wearing the mask of caution.",
    meaning:
      "When The Fool appears reversed, the leap feels less like freedom and more like risk. You may be holding back from a new beginning — not out of wisdom, but out of fear dressed as prudence. The dog at your heels is no longer a companion but a warning. This reversal asks: is your caution protecting you, or is it keeping you from something that is truly yours to begin?",
    reflection:
      "What new beginning have you been postponing? What would you need to feel safe enough to take the first step — and is that need real, or is it a delay?",
    guidance:
      "Name the fear that is holding you back. Speak it aloud or write it down. Then ask yourself: is this fear protecting me, or is it keeping me small?",
  },
};

export default theFool;
