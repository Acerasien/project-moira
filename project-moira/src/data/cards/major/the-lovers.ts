import type { TarotCard } from "../types";

const theLovers: TarotCard = {
  id: "the-lovers",
  name: "The Lovers",
  arcana: "major",
  number: 6,
  keywords: ["Love", "Harmony", "Choice", "Alignment"],
  image: "/cards/major/the-lovers.png",
  upright: {
    summary: "A choice made from the heart — not between right and wrong, but between paths that define who you become.",
    meaning: "The Lovers depicts more than romance; it is the card of meaningful choice. Two figures stand beneath a radiant angel — naked, vulnerable, unguarded — embodying the moment when a decision must be made not from calculation but from alignment with your deepest values. This is the crossroads where logic and desire meet, and you are asked: what do you truly love? The answer will shape everything that follows. Love here is not just passion — it is clarity, commitment, and the courage to choose.",
    reflection: "What choice have you been avoiding because it asks you to define what — and who — really matters? What would change if you chose from love instead of fear?",
    guidance: "Name the choice you've been postponing. Then ask yourself: if you already knew what your heart wanted, what would you do differently today?",
  },
  reversed: {
    summary: "A fracture in the bond — values in conflict, a choice unmade, or love that has lost its honesty.",
    meaning: "When The Lovers appears reversed, harmony is disrupted. You may be at odds with a partner, or more crucially, at odds with yourself — your actions pulling in one direction while your heart pulls in another. This reversal can signal a refusal to choose, a betrayal of trust, or a relationship built on misalignment rather than genuine connection. The angel's blessing feels distant now, and the vulnerability that once felt sacred feels dangerous.",
    reflection: "Where are you out of alignment with your own values? Is there a relationship or commitment where you've stopped being honest — with them, or with yourself?",
    guidance: "Have one honest conversation today — with a partner, or with yourself. Name the misalignment. You cannot heal a fracture you refuse to acknowledge.",
  },
};

export default theLovers;
