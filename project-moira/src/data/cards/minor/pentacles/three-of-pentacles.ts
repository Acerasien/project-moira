import type { TarotCard } from "../../types";

const threeOfPentacles: TarotCard = {
  id: "three-of-pentacles",
  name: "Three of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 3,
  keywords: ["Collaboration", "Skill", "Craftsmanship", "Teamwork"],
  image: "/cards/minor/pentacles/three-of-pentacles.png",
  upright: {
    summary:
      "Great work is never done alone — and yours is taking beautiful shape.",
    meaning:
      "The Three of Pentacles shows a craftsperson at work while others consult, review, and contribute. This is the card of collaboration at its finest: the architect, the builder, and the patron each bringing their unique skill to a shared vision. It speaks to the dignity of craft — the pride of doing something well, and the humility of knowing you cannot do it alone. Whether you are building a project, a career, or a relationship, this card says: invite others in. Their eyes will see what yours cannot.",
    reflection:
      "Who are you building with? Are you allowing others to contribute their wisdom to your work, or are you insisting on carrying the blueprint alone?",
    guidance:
      "Seek feedback. Share your work in progress, even if it feels unfinished. The right collaborators will not diminish your contribution — they will elevate it into something you could not have made alone.",
  },
  reversed: {
    summary:
      "The blueprint sits untouched — miscommunication or isolation stalls the work.",
    meaning:
      "Reversed, the Three of Pentacles points to friction in collaboration. Perhaps your team is not aligned, feedback has turned critical instead of constructive, or you have withdrawn from the collective effort entirely. It can also signal a lack of skill or preparation — reaching for mastery before doing the foundational work. The cathedral will not rise if no one agrees on the plans.",
    reflection:
      "Where has collaboration broken down in your life? Are you resisting help, or is the help you are receiving actually undermining you?",
    guidance:
      "Return to the table. Clarify the vision. If the team is wrong, find a better one. If you are the one who stepped away, ask yourself what you are afraid others will see.",
  },
};

export default threeOfPentacles;
