import type { TarotCard } from "../../types";

const tenOfCups: TarotCard = {
  id: "ten-of-cups",
  name: "Ten of Cups",
  arcana: "minor",
  suit: "cups",
  number: 10,
  keywords: ["Harmony", "Family", "Emotional Fulfillment", "Joy"],
  image: "/cards/minor/cups/ten-of-cups.png",
  upright: {
    summary:
      "A rainbow arcs across the sky above a family standing together before a cottage. This is emotional completion — the kind of happiness that includes others.",
    meaning:
      "The Ten of Cups is the final, full expression of the suit: love that has matured into belonging. This is not the electric spark of the Two or the solitary contentment of the Nine — it is the steady warmth of a life built around genuine connection. It speaks of family, whether born or chosen; of a home that feels like a sanctuary; of the kind of joy that is so complete it spills over into everyone nearby. The rainbow is not a promise that storms will never come — it is evidence that they have come and passed, and that something beautiful was born in their wake. You have arrived at a season of emotional peace. Rest in it.",
    reflection:
      "Who makes up your \u201Cfamily\u201D \u2014 not by blood, but by belonging? What does \u201Cenough\u201D look like for you, and have you already reached it without realizing?",
    guidance:
      "Share this abundance. Emotional fulfillment is one of the few things that grows when you give it away. Tell the people you love that you love them. Let the gratitude you feel become visible. The rainbow is not just for you — it is for everyone standing beside you.",
  },
  reversed: {
    summary:
      "The rainbow has faded, or perhaps it was never fully formed. Family discord, broken dreams, or the realization that the picture you built was never as whole as it seemed.",
    meaning:
      "Reversed, the Ten of Cups exposes fractures in the foundation. The harmonious family you thought you had — or the one you have been trying to build — is showing cracks. This can manifest as conflict with relatives, a home that feels more like a battlefield than a sanctuary, or the painful awareness that you have been chasing an ideal that does not match reality. The dream of perfect happiness can become a tyrant, making you feel like a failure every time life falls short of the postcard. This reversal asks you to examine whether the disappointment is about what is missing, or about the story you have been telling yourself about what should be.",
    reflection:
      "Whose vision of happiness are you measuring yourself against? Is the discord in your external world, or in the gap between your expectations and your reality?",
    guidance:
      "A rainbow cannot be forced. You can only create the conditions and wait. Repair what you can repair. Accept what you cannot. And remember: a real home is not a photograph — it is the place where you are allowed to be imperfect and still belong.",
  },
};

export default tenOfCups;
