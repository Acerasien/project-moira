import type { TarotCard } from "../../types";

const fourOfWands: TarotCard = {
  id: "four-of-wands",
  name: "Four of Wands",
  arcana: "minor",
  suit: "wands",
  number: 4,
  keywords: ["Celebration", "Homecoming", "Harmony", "Stability"],
  image: "/cards/minor/wands/four-of-wands.png",
  upright: {
    summary:
      "A moment of joyful arrival — the hard work has paid off, and now is the time to celebrate, rest, and feel truly at home.",
    meaning:
      "The Four of Wands is one of the most joyful cards in the deck. It depicts a canopy of flowers suspended between four sturdy wands, a scene of celebration, community, and well-earned peace. This card often marks a milestone: a wedding, a graduation, a new home, the completion of a creative project, or simply the feeling of belonging somewhere at last. The energy here is grounded and warm — this is not the wild, fleeting excitement of a new idea, but the deeper satisfaction of something built and sustained. The Four of Wands reminds you that celebration is not a luxury; it is an essential part of the creative cycle. Before you rush toward the next goal, pause. Let joy in. Let the people who love you gather around. You have arrived at a place worth honoring.",
    reflection:
      "What milestone — large or small — have you recently reached that deserves more recognition than you have given it?",
    guidance:
      "Celebrate intentionally. Host the gathering, light the candle, say the words of gratitude aloud. Allow yourself to feel the stability you have worked so hard to create. This is not the end of the journey, but it is a sacred resting place — let it fill you up for the road ahead.",
  },
  reversed: {
    summary:
      "A celebration feels incomplete, harmony is disrupted, or the stability you thought you had built is beginning to wobble.",
    meaning:
      "Reversed, the Four of Wands suggests that something is off in the places you call home — literally or metaphorically. Perhaps a long-awaited milestone arrived with unexpected hollowness, or a relationship you counted on feels suddenly unsteady. You may be going through the motions of celebration while feeling disconnected from genuine joy. Sometimes this card points to unfinished business: you skipped the celebration and moved straight into the next grind, and now the lack of closure weighs on you. It can also indicate tension within a family, a household, or a close-knit community — the kind of friction that makes a space feel less like home and more like a battlefield. The foundation is not broken, but it needs attention.",
    reflection:
      "Where in your life do you feel unsettled despite outward appearances of stability? What would it take to feel truly at ease?",
    guidance:
      "Do not force the celebration if it does not feel genuine — but do not skip the closure, either. Address the cracks with honesty, whether that means a difficult conversation or simply giving yourself permission to rest without guilt. Home is something you build daily, not something you arrive at once and forget.",
  },
};

export default fourOfWands;
