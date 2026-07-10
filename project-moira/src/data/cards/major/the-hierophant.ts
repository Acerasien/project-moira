import type { TarotCard } from "../types";

const theHierophant: TarotCard = {
  id: "the-hierophant",
  name: "The Hierophant",
  arcana: "major",
  number: 5,
  keywords: ["Tradition", "Wisdom", "Belief", "Spiritual Guidance"],
  image: "/cards/major/the-hierophant.png",
  upright: {
    summary: "Wisdom has a lineage — and you are invited to sit at its feet and learn.",
    meaning: "The Hierophant sits between two pillars, much like The High Priestess, but where she guards esoteric mystery, he teaches received wisdom — the traditions, rituals, and teachings passed down through generations. This card signals a time for learning within a structure: a mentor, a course, a community of belief. It is not about blind obedience but about recognizing that you don't have to forge every path alone. Some bridges have already been built; you are allowed to walk across them.",
    reflection: "What tradition, teaching, or mentor has been calling to you — one you've perhaps dismissed as too conventional or too structured? What might you gain by submitting to a practice larger than yourself?",
    guidance: "Seek out a teacher, a text, or a tradition today. Not to replace your own knowing, but to deepen it. Let someone else's wisdom hold the lantern for a while.",
  },
  reversed: {
    summary: "The structure has become a cage — dogma has replaced discovery.",
    meaning: "When The Hierophant appears reversed, the institution that once nourished you may now feel confining. Rules have hardened into rigidity; questions are met with silence or rebuke. Alternatively, you may be rebelling against all structure — rejecting wisdom simply because it comes from authority. This reversal challenges you to distinguish between tradition that grounds you and tradition that stifles you. The teacher who once guided may now be the one you've outgrown.",
    reflection: "Is there a belief or rule you're following that no longer serves you — one you've never stopped to question? Or are you rejecting guidance out of pride rather than discernment?",
    guidance: "Question one 'rule' you live by today. Where did it come from? Does it still hold truth for the person you are now? If not, what might replace it?",
  },
};

export default theHierophant;
