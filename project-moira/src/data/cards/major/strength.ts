import type { TarotCard } from "../types";

const strength: TarotCard = {
  id: "strength",
  name: "Strength",
  arcana: "major",
  number: 8,
  keywords: ["Courage", "Patience", "Inner Power", "Compassion"],
  image: "/cards/major/strength.png",
  upright: {
    summary: "True power doesn't roar — it soothes. The gentlest hand tames the wildest heart.",
    meaning: "Strength depicts a woman gently closing the jaws of a lion — not with force, but with calm, unwavering presence. This is the card of inner fortitude: the courage that doesn't shout, the patience that outlasts fury, the compassion that disarms what aggression never could. You are not being asked to fight harder but to trust the quiet power already within you. The lion is not your enemy — it is the raw, untamed part of yourself that only tenderness can reach.",
    reflection: "Where in your life are you trying to overpower something that might respond better to gentleness — a person, a situation, or a part of yourself?",
    guidance: "Approach something difficult today with softness instead of force. Listen before you argue. Breathe before you react. Let patience do what pressure cannot.",
  },
  reversed: {
    summary: "The lion has slipped its leash — or you have forgotten you ever held it.",
    meaning: "When Strength appears reversed, the inner beast is running the show. You may be lashing out, overwhelmed by anger or fear, or you may have collapsed into self-doubt, convinced you lack the power you actually possess. Both are a disconnect from your core steadiness. The woman and the lion are still there — but they are no longer in conversation. This reversal asks you to find your way back to the calm center that can hold anything.",
    reflection: "What emotion is currently driving you that you haven't fully acknowledged? Are you acting from that raw place, or have you shut down to avoid it?",
    guidance: "Name the feeling you've been suppressing or unleashing unchecked. Sit with it for five minutes without trying to change it. Your power returns when you stop fighting yourself.",
  },
};

export default strength;
