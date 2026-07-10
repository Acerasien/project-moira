import type { TarotCard } from "../types";

const theMoon: TarotCard = {
  id: "the-moon",
  name: "The Moon",
  arcana: "major",
  number: 18,
  keywords: ["Illusion", "Fear", "Subconscious", "Uncertainty"],
  image: "/cards/major/the-moon.png",
  upright: {
    summary: "The path ahead is lit only by moonlight — and moonlight distorts as much as it reveals.",
    meaning: "The Moon hangs in a night sky above a winding path that disappears into dark hills, with a crayfish emerging from the depths of a pool. Two dogs — one wild, one tame — howl at the light. This is the card of the subconscious: dreams, fears, intuitions, and the things that stir beneath the surface of your waking mind. You cannot see clearly now, and you are not meant to. The Moon invites you to navigate by feel, to trust the pull of the tide even when the shore is hidden. Not every journey can be mapped in daylight.",
    reflection: "What uncertainty are you currently moving through? Can you accept that not knowing is part of the process — not a sign that you're lost, but that you're in the deep?",
    guidance: "Tonight, pay attention to your dreams. Write down what surfaces before you reach for logic. The subconscious speaks in symbols; let it speak without demanding translation.",
  },
  reversed: {
    summary: "The fog is lifting — but what it hid was not as frightening as the stories you told yourself in the dark.",
    meaning: "When The Moon appears reversed, the illusions that have haunted you are beginning to dissolve. Fears that loomed large in the darkness are shrinking in the growing light. You may be emerging from a period of confusion, anxiety, or self-deception — seeing situations and people as they actually are, not as your shadows painted them. This reversal can also warn of repressed fears returning: truths you've buried that are now demanding to be faced. Either way, clarity is arriving. Meet it with courage.",
    reflection: "What fear have you been feeding with imagination rather than evidence? What would change if you shone a direct light on it instead of letting it grow in the shadows?",
    guidance: "Name one fear that has been haunting you. Then ask: is this based on what is, or on what I'm afraid might be? Let the answer guide your next step.",
  },
};

export default theMoon;
