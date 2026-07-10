import type { TarotCard } from "../../types";

const sevenOfCups: TarotCard = {
  id: "seven-of-cups",
  name: "Seven of Cups",
  arcana: "minor",
  suit: "cups",
  number: 7,
  keywords: ["Fantasy", "Choice", "Illusion", "Wishful Thinking"],
  image: "/cards/minor/cups/seven-of-cups.png",
  upright: {
    summary:
      "Seven cups float in a cloud, each holding a different vision — treasure, dragon, castle, serpent. So many dreams, so little clarity. Which one is real?",
    meaning:
      "The Seven of Cups is the card of beautiful overwhelm. Possibilities shimmer before you, each more seductive than the last, and your imagination is running wild with what could be. This is the energy of daydreams, creative visions, and the intoxicating rush of options. But not every glittering cup holds what it promises. Some are illusions, wishful thinking dressed in costume. The challenge here is discernment. You are being shown a buffet of futures, and your task is not to sample everything — it is to identify which vision aligns with your deepest truth, not just your current appetite. Fantasy is a powerful tool, but it becomes a trap when it replaces action.",
    reflection:
      "Which of your current dreams is grounded in who you actually are, and which is a reaction to boredom, fear, or restlessness? If you could only choose one, which would survive the cut?",
    guidance:
      "Do not decide in the fog. Write down your options. Separate what excites you from what merely distracts you. The most dazzling cup is not always the one that will hold water. Give yourself time to see through the glamour.",
  },
  reversed: {
    summary:
      "The fog clears. You have made your choice, or you have seen through the illusions. Clarity replaces confusion, and action becomes possible.",
    meaning:
      "Reversed, the Seven of Cups marks the end of indecision. The daydream has served its purpose, and now you are ready to choose — or you have already chosen and are simply acknowledging it. This is the moment when fantasy meets the ground. You see through the illusions that once captivated you, and you recognize which cup actually holds what you need. This reversal can also warn against escapism that has gone too far — the person who prefers the dream to the reality, or who uses imagination to avoid hard truths. Clarity is a gift, but it also comes with responsibility: once you see clearly, you must act.",
    reflection:
      "What have you been avoiding by keeping your options open? What becomes possible when you finally commit to one path and let the others dissolve?",
    guidance:
      "Choose. Not perfectly — just genuinely. Pick the cup that scares you a little and excites you a lot. The rest were always mirages anyway. You have been ready longer than you know.",
  },
};

export default sevenOfCups;
