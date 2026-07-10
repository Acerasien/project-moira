import type { TarotCard } from "../types";

const theHighPriestess: TarotCard = {
  id: "the-high-priestess",
  name: "The High Priestess",
  arcana: "major",
  number: 2,
  keywords: ["Intuition", "Mystery", "Subconscious", "Inner Voice"],
  image: "/cards/major/the-high-priestess.png",
  upright: {
    summary: "Stillness speaks louder than words — the answer you seek is already whispering within.",
    meaning: "The High Priestess sits between two pillars — darkness and light, mystery and knowledge — holding a scroll of hidden wisdom. She does not chase answers; she waits for them to surface. This card invites you to turn inward, to trust the quiet knowing that doesn't arrive with fanfare. Not every truth is found by searching; some must be received in silence. Your subconscious holds a map the conscious mind hasn't yet learned to read.",
    reflection: "What have you been asking everyone else that only you can truly answer? When was the last time you sat in stillness and simply listened?",
    guidance: "Today, pause before you seek external advice. Close your eyes, breathe deeply, and ask yourself the question you've been carrying. Trust the first quiet answer.",
  },
  reversed: {
    summary: "Disconnected from the inner compass — noise has drowned out the signal.",
    meaning: "When The High Priestess appears reversed, the inner voice has been silenced — not because it stopped speaking, but because you stopped listening. You may be seeking validation from others at the expense of your own knowing, or mistaking anxiety for intuition. The scroll remains, but it sits unread. This reversal asks: what truth are you avoiding by staying busy, staying distracted, staying loud?",
    reflection: "What are you afraid you'll hear if you actually get quiet? Is there a truth you've been drowning out with activity, noise, or the opinions of others?",
    guidance: "Create space for silence today — even five minutes without input. No music, no scrolling, no asking. Just listen. What rises to the surface?",
  },
};

export default theHighPriestess;
