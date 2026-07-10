import type { TarotCard } from "../types";

const judgement: TarotCard = {
  id: "judgement",
  name: "Judgement",
  arcana: "major",
  number: 20,
  keywords: ["Reckoning", "Awakening", "Renewal", "Calling"],
  image: "/cards/major/judgement.png",
  upright: {
    summary: "The call has sounded — not from above, but from within. It is time to rise and answer.",
    meaning: "Judgement depicts figures rising from their graves at the sound of an angel's trumpet — not in fear, but in recognition. This is the card of awakening: the moment when you hear your true calling and cannot unhear it. It asks you to review your life with honest eyes — to reckon with what you've done, forgive what needs forgiving, and release what no longer belongs to the person you are becoming. This is not external judgment but internal resurrection. You are being summoned to a higher version of yourself. Will you rise?",
    reflection: "What calling have you been ignoring — a purpose, a passion, a truth about who you are — because answering it would require you to change? What would rising look like?",
    guidance: "Take stock of your life today — not with criticism, but with clarity. What needs to be released? What needs to be embraced? The trumpet is sounding. Listen.",
  },
  reversed: {
    summary: "The call has come, but you've pressed the pillow over your ears — or the silence feels like abandonment.",
    meaning: "When Judgement appears reversed, you are avoiding the reckoning. The trumpet sounds, but you refuse to rise — perhaps out of fear of what you'll see when you look honestly at your life, perhaps out of guilt you haven't processed, perhaps out of a stubborn refusal to evolve. Alternatively, you may feel that no call is coming at all — that you've been left in the grave while others rise. This reversal asks: are you hiding from your awakening, or have you convinced yourself you don't deserve one?",
    reflection: "What are you afraid you'll discover if you truly examine your life — your choices, your patterns, your unlived dreams? And what might you discover that could set you free?",
    guidance: "Stop running from the mirror. Sit with your reflection — the full inventory, the mistakes and the miracles — and ask: what is the next right thing? Then do it.",
  },
};

export default judgement;
