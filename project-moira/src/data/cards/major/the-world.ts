import type { TarotCard } from "../types";

const theWorld: TarotCard = {
  id: "the-world",
  name: "The World",
  arcana: "major",
  number: 21,
  keywords: ["Completion", "Fulfillment", "Wholeness", "Achievement"],
  image: "/cards/major/the-world.png",
  upright: {
    summary: "The circle closes — not as an ending, but as a homecoming to the self you were always becoming.",
    meaning: "The World shows a figure dancing within a laurel wreath, surrounded by the four fixed signs of the zodiac — the totality of experience held in a single, perfect frame. This is the final card of the Major Arcana, the culmination of The Fool's journey: not a finish line, but a moment of wholeness. Every lesson, every loss, every triumph has brought you here. You have integrated what you learned and become someone who can hold it all. This is completion — not the end of the story, but the satisfying close of a chapter that makes the next one possible.",
    reflection: "What cycle is reaching its natural completion in your life? Can you pause to honor how far you've come before rushing into what's next?",
    guidance: "Celebrate the closing of this chapter. Take a moment — a real one — to acknowledge what you've learned, who you've become, and the wholeness that is already yours.",
  },
  reversed: {
    summary: "The finish line is in sight — but you're hesitating, or the final piece refuses to click into place.",
    meaning: "When The World appears reversed, completion is near but not yet realized. You may be sabotaging yourself at the threshold — afraid of what comes after the achievement, uncertain of who you'll be when this chapter closes. Or you may feel that the final piece is missing: a lingering loose end, an unresolved lesson, a sense that the circle won't quite seal. This reversal is not failure; it's a delay that asks you to examine what's keeping you from stepping fully into your own wholeness.",
    reflection: "What's stopping you from closing this chapter? Is there a loose end that genuinely needs tying, or are you simply afraid of the silence that follows a completed thing?",
    guidance: "Identify the one thing — one conversation, one decision, one act of closure — that would bring this cycle to its natural end. Then do it. The next journey is waiting.",
  },
};

export default theWorld;
