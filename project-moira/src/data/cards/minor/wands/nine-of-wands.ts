import type { TarotCard } from "../../types";

const nineOfWands: TarotCard = {
  id: "nine-of-wands",
  name: "Nine of Wands",
  arcana: "minor",
  suit: "wands",
  number: 9,
  keywords: ["Resilience", "Perseverance", "Final Push", "Guarded"],
  image: "/cards/minor/wands/nine-of-wands.png",
  upright: {
    summary:
      "You are weary but still standing — the finish line is near, and every scar you carry is proof of how far you have already come.",
    meaning:
      "The Nine of Wands shows a figure leaning on a wand, bandaged and battle-worn, with eight more wands standing like a fence behind them. This is the card of the wounded warrior — someone who has been through the fire and is still upright, still watching the horizon for the next challenge. You are tired. You have every right to be. The journey has demanded more than you expected, and the cost is visible in the lines on your face and the caution in your eyes. But here is what matters: you did not fall. The Nine of Wands is not about fresh enthusiasm or easy victories; it is about the stubborn, unglamorous persistence that keeps you going when enthusiasm has long since faded. You are closer to the end than you realize. The wall of wands behind you is a fortress built from everything you have survived. Trust it. Trust yourself. One more push.",
    reflection:
      "What has this journey cost you, and what have you gained that you could not have received any other way? What keeps you going when the excitement is gone?",
    guidance:
      "Rest if you must, but do not stop. The final stretch is often the hardest because it tests not your skill but your spirit. Draw strength from how far you have come, not from how far remains. Set one small boundary, take one deep breath, and take one more step.",
  },
  reversed: {
    summary:
      "The walls you built for protection have become a prison — stubbornness, burnout, or an inability to trust keeps you stuck and isolated.",
    meaning:
      "Reversed, the Nine of Wands reveals the shadow side of resilience: the point where perseverance curdles into stubbornness, and healthy boundaries become impenetrable walls. You may be so exhausted that you have stopped letting anyone in — refusing help, rejecting comfort, convinced that you must carry this alone. The bandages you wear have become your identity. Alternatively, this reversal can signal that you are on the verge of giving up entirely. The final push feels impossible, and the temptation to walk away is overwhelming. Sometimes the card points to paranoia — you are seeing threats where none exist, bracing for battles that are already over, so conditioned by hardship that you have forgotten how to relax. The war has ended, but no one told your nervous system.",
    reflection:
      "Are you protecting yourself, or are you hiding? Who could you let in right now if you allowed yourself to be seen in your exhaustion?",
    guidance:
      "Stubbornness is not the same as strength. If you are exhausted, ask for help — not as a failure, but as a strategy. If the walls you built are now keeping out love as well as danger, it is time to open a gate. You are allowed to rest. You are allowed to be held.",
  },
};

export default nineOfWands;
