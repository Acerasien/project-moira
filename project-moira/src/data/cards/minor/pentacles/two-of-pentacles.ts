import type { TarotCard } from "../../types";

const twoOfPentacles: TarotCard = {
  id: "two-of-pentacles",
  name: "Two of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 2,
  keywords: ["Balance", "Adaptability", "Juggling", "Flexibility"],
  image: "/cards/minor/pentacles/two-of-pentacles.png",
  upright: {
    summary:
      "You are dancing with life's demands — and somehow, you are keeping the rhythm.",
    meaning:
      "The Two of Pentacles pictures someone juggling two coins, swaying with the motion of an unpredictable sea. This is the card of the beautiful, messy dance of everyday life: balancing work and rest, income and expenses, the urgent and the important. It acknowledges that you are being pulled in multiple directions, but it also reminds you that you are more adaptable than you think. The secret is not stillness — it is flow. Move with the rhythm, and the coins stay in the air.",
    reflection:
      "What are you currently juggling? Which of these demands is genuinely important, and which one are you holding onto out of habit?",
    guidance:
      "Prioritize what matters, but do not expect perfect stillness. Some seasons of life are meant to feel like a dance. Find your rhythm instead of fighting the movement.",
  },
  reversed: {
    summary:
      "The rhythm breaks — too many balls in the air, too little ground beneath your feet.",
    meaning:
      "When the Two of Pentacles reverses, the juggling act has become unsustainable. You may be overcommitted, financially stretched, or simply exhausted from trying to keep everything in motion. The sea beneath you has grown choppy, and the coins are threatening to fall. This reversal is not a failure — it is a signal. Something must be set down before everything collapses.",
    reflection:
      "What are you holding onto that you cannot afford — in time, money, or energy? What would happen if you let one thing drop?",
    guidance:
      "You cannot juggle everything forever. Choose the coin that matters most and hold it with both hands. Let the rest wait — it will still be there when you are ready.",
  },
};

export default twoOfPentacles;
