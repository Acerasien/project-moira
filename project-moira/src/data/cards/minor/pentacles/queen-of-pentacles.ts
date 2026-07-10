import type { TarotCard } from "../../types";

const queenOfPentacles: TarotCard = {
  id: "queen-of-pentacles",
  name: "Queen of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 13,
  keywords: ["Nurturing", "Practical", "Comfort", "Abundance"],
  image: "/cards/minor/pentacles/queen-of-pentacles.png",
  upright: {
    summary:
      "She tends to everything — the home, the body, the garden, the soul — with equal reverence.",
    meaning:
      "The Queen of Pentacles sits on a throne in nature, a coin cradled in her lap, her gaze warm and knowing. She is the embodiment of practical nurturing — the one who knows how to make a house feel like a home, how to stretch a budget without making anyone feel deprived, how to care for others without losing herself in the process. She reminds you that caring for the physical world — your body, your space, your finances — is a sacred act. Comfort is not frivolous. It is the soil in which everything else grows.",
    reflection:
      "How are you tending to your physical world — your home, your body, your daily rhythms? Are you giving these things the reverence they deserve?",
    guidance:
      "Make your space beautiful in small ways. Cook a meal with care. Tend to your body as you would tend to a garden. The Queen of Pentacles knows that abundance begins with how you treat the life you already have.",
  },
  reversed: {
    summary:
      "The caretaker has forgotten to care for herself — or is smothering others with her attention.",
    meaning:
      "Reversed, the Queen of Pentacles reveals the shadow of nurturing: over-giving to the point of depletion, or using caretaking as a way to control. You may be neglecting your own physical or financial needs while pouring everything into others. Alternatively, you may have become so focused on material comfort that you have lost touch with the deeper, emotional nourishment that makes life feel full. The garden is overgrown in one direction and barren in another.",
    reflection:
      "Who are you caring for at your own expense? Or have you become so focused on comfort and security that you have forgotten how to connect?",
    guidance:
      "Refill your own cup before you pour for others. If you have been neglecting yourself, start with one small act of self-care today. If you have been hiding behind domesticity, step outside and let the world touch you.",
  },
};

export default queenOfPentacles;
