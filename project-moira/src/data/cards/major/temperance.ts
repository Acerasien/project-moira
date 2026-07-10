import type { TarotCard } from "../types";

const temperance: TarotCard = {
  id: "temperance",
  name: "Temperance",
  arcana: "major",
  number: 14,
  keywords: ["Balance", "Moderation", "Harmony", "Patience"],
  image: "/cards/major/temperance.png",
  upright: {
    summary: "The alchemy of the middle way — blending opposites until something new and whole emerges.",
    meaning: "Temperance shows an angel pouring water between two cups, a stream flowing in both directions without spilling a drop. This is the card of equilibrium: not the static balance of a scale, but the living, breathing harmony of elements in motion. It calls you to integrate what feels contradictory — work and rest, passion and patience, logic and intuition — not by choosing one over the other, but by blending them into something richer than either alone. Healing happens here, in the gentle art of moderation.",
    reflection: "Where in your life have you been living in extremes — all in or all out, burning hot or frozen cold? What would the middle ground look like, and what might it create?",
    guidance: "Find one area of excess or deprivation today and gently adjust it. Eat when you're hungry, rest when you're tired, speak when you're ready. Small corrections, steadily made.",
  },
  reversed: {
    summary: "The stream has overflowed — or dried up entirely. Extremes have taken the wheel.",
    meaning: "When Temperance appears reversed, the careful alchemy has broken down. You may be living in excess — overworking, overindulging, burning through your reserves — or in scarcity, withholding what you need to thrive. Impatience may be driving rash decisions, or lethargy may have settled into your bones. The angel's cups have tipped; the steady flow has become a flood or a drought. This reversal is a call to return to center — gently, without judgment.",
    reflection: "What area of your life has swung too far in one direction? Are you exhausted from over-giving, or restless from under-living?",
    guidance: "Do not try to fix everything at once. Choose one small imbalance today and nudge it back toward center. A single deep breath. A single boundary. A single kind word to yourself.",
  },
};

export default temperance;
