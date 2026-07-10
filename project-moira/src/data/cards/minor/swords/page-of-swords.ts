import type { TarotCard } from "../../types";

const pageOfSwords: TarotCard = {
  id: "page-of-swords",
  name: "Page of Swords",
  arcana: "minor",
  suit: "swords",
  number: 11,
  keywords: ["Curiosity", "New Ideas", "Vigilance", "Communication"],
  image: "/cards/minor/swords/page-of-swords.png",
  upright: {
    summary:
      "A young mind, blade raised, scanning the horizon — curiosity sharpened to a point.",
    meaning:
      "The Page of Swords stands on uneven ground, sword held aloft, body poised as if ready to spring. This is the card of intellectual awakening — the student hungry for knowledge, the detective following a lead, the communicator finding their voice. The Page represents the early stages of mental mastery: raw curiosity, eager questioning, the thrill of a new idea taking shape. There is an alertness here, a vigilance that borders on restless. The Page of Swords does not yet have the wisdom of the Queen or the authority of the King, but they have something equally powerful: the willingness to ask questions no one else is asking.",
    reflection:
      "What new idea or skill is calling to you? Where in your life are you being asked to stay curious rather than certain?",
    guidance:
      "Follow the thread of your curiosity today. Ask the question you have been holding back. Start the research, begin the conversation, pick up the book. The mind grows by reaching.",
  },
  reversed: {
    summary:
      "The blade wavers — sharp words, scattered thoughts, or a curiosity that cuts the wrong way.",
    meaning:
      "Reversed, the Page of Swords signals the shadow side of a quick mind: gossip disguised as information, cynicism dressed as intelligence, or a restlessness that flits from idea to idea without ever landing. This reversal can show up as speaking before thinking, as using words as weapons in moments of defensiveness, or as a mind so hungry for stimulation that it cannot settle into depth. The Page reversed may also indicate that you are gathering information obsessively but not acting on it — analysis paralysis in its earliest form. The sword is still sharp; it just needs better aim.",
    reflection:
      "Are your words building bridges or burning them? Is your curiosity serving growth, or is it keeping you too distracted to commit?",
    guidance:
      "Before you speak, pause and ask: is it true, is it kind, is it necessary? Channel your mental energy into one pursuit instead of scattering it across many.",
  },
};

export default pageOfSwords;
