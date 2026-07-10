import type { TarotCard } from "../types";

const theSun: TarotCard = {
  id: "the-sun",
  name: "The Sun",
  arcana: "major",
  number: 19,
  keywords: ["Joy", "Vitality", "Success", "Clarity"],
  image: "/cards/major/the-sun.png",
  upright: {
    summary: "The light has returned — uncomplicated, generous, and undeniably yours.",
    meaning: "The Sun shines above a child riding a white horse through a field of sunflowers, arms open, face radiant. After the shadowy journey of The Moon, The Sun arrives as pure, unmediated joy. This is the card of clarity, vitality, and success that doesn't require struggle — the kind of happiness that feels earned but effortless. The child doesn't question whether they deserve the light; they simply bask in it. You are being invited to do the same. Let yourself be happy. Let yourself be seen. The warmth is real.",
    reflection: "What joy have you been postponing — waiting for permission, or for conditions to be perfect? What if this moment, exactly as it is, is already enough to celebrate?",
    guidance: "Do something today purely because it brings you joy — not productive joy, not earned joy, just joy. Dance, sing, play. The Sun doesn't ask for your resume.",
  },
  reversed: {
    summary: "The light is there — but a cloud has passed over it, or you've turned away from its warmth.",
    meaning: "When The Sun appears reversed, the brightness is dimmed but not extinguished. You may be struggling to access joy — not because it's absent, but because grief, doubt, or exhaustion has built a filter between you and the light. The inner child has gone quiet; the sunflowers seem to droop. This reversal can also signal a success that feels hollow, an achievement reached at the cost of your spirit. The Sun hasn't set. It's waiting for you to look up again.",
    reflection: "What is standing between you and your joy right now? Is it a real obstacle, or a story you've been telling yourself about why you can't be happy yet?",
    guidance: "Find one small, genuine pleasure today and let yourself fully inhabit it — without guilt, without analysis. Even five minutes of real sunlight changes everything.",
  },
};

export default theSun;
