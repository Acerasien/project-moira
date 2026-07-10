import type { TarotCard } from "../../types";

const pageOfPentacles: TarotCard = {
  id: "page-of-pentacles",
  name: "Page of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 11,
  keywords: ["Ambition", "Study", "New Skill", "Practicality"],
  image: "/cards/minor/pentacles/page-of-pentacles.png",
  upright: {
    summary:
      "You are a student again — bright-eyed, grounded, and ready to learn something real.",
    meaning:
      "The Page of Pentacles holds a single coin, studying it with the focused wonder of someone who has just discovered that the world is full of things worth learning. This is the card of the beginner's mind applied to practical matters — a new course of study, a fresh career path, a skill you are eager to master. Unlike other Pages, this one is unhurried, methodical, grounded. They know that real growth takes time and are willing to give it. There is something beautiful in that earnestness.",
    reflection:
      "What new skill or knowledge is calling to you right now? Are you giving yourself permission to be a beginner — to not know, to ask, to stumble?",
    guidance:
      "Enroll in the class. Buy the book. Find the mentor. The seed of curiosity you plant today, however small, can grow into the competence and confidence you will carry for a lifetime.",
  },
  reversed: {
    summary:
      "The student has lost focus — distraction, laziness, or fear of failure holds them back.",
    meaning:
      "Reversed, the Page of Pentacles suggests a lack of direction or discipline. You may be procrastinating on a learning opportunity, bouncing between interests without committing to any, or letting the fear of not being good enough keep you from even starting. The coin is still in your hand, but you are no longer looking at it with wonder — you are scrolling past it, waiting for motivation that never arrives.",
    reflection:
      "What practical goal have you been avoiding? Is it lack of interest, or is it the fear that you will not be good at it?",
    guidance:
      "Start small. One lesson, one chapter, one practice session. Motivation follows action, not the other way around. The Page does not become a master overnight — but they do become one by beginning.",
  },
};

export default pageOfPentacles;
