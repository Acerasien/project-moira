import type { TarotCard } from "../../types";

const queenOfCups: TarotCard = {
  id: "queen-of-cups",
  name: "Queen of Cups",
  arcana: "minor",
  suit: "cups",
  number: 13,
  keywords: ["Compassion", "Emotional Depth", "Nurturing", "Empathy"],
  image: "/cards/minor/cups/queen-of-cups.png",
  upright: {
    summary:
      "A queen sits upon a throne at the edge of the sea, gazing into an ornate cup. She is the master of the inner world — deeply feeling, profoundly intuitive, and utterly present.",
    meaning:
      "The Queen of Cups is the emotional heart of the tarot. She does not fear the depths; she lives there, and she has learned to breathe underwater. This card signals a time when your intuition is operating at full power — when you can sense what others are feeling before they speak, when your dreams carry messages, when your heart knows things your mind has not yet caught up to. The Queen does not drown in emotion; she holds it. She is the counselor, the healer, the friend who listens without fixing. She reminds you that true strength is not the absence of feeling but the capacity to feel everything and still remain centered. You are being called to lead with empathy.",
    reflection:
      "What would it look like to trust your intuition as much as your logic? Who in your life needs you to simply sit with them, without solving, without advising — just being there?",
    guidance:
      "Listen more than you speak. The Queen's power is in her receptivity. Create space for others to feel safe. And when you look into the cup of your own heart, do not flinch at what you see — welcome it. Every feeling is a messenger.",
  },
  reversed: {
    summary:
      "The cup has become a mirror in which the Queen sees only herself. Emotional codependency, martyrdom, or a complete disconnection from one's own inner life.",
    meaning:
      "Reversed, the Queen of Cups reveals the shadow side of deep feeling. Empathy without boundaries becomes enmeshment; nurturing without reciprocity becomes depletion. You may be absorbing everyone else's emotions to the point where you no longer know which feelings are yours. Alternatively, this reversal can signal emotional coldness — a Queen who has been hurt so deeply that she has retreated from her own heart, becoming distant, manipulative, or dismissive of vulnerability. The intuitive channel is either flooded with noise or completely shut down. Either way, the connection to the authentic self has been compromised.",
    reflection:
      "Where have you been giving from an empty cup? Are you caring for others as a way of avoiding your own pain? What would happen if you turned that compassion inward?",
    guidance:
      "Boundaries are not walls; they are the shoreline that allows the sea to be vast without flooding the village. Protect your emotional energy. Say no to what drains you. And if you have been numb, start with one honest feeling — just one — and let it be true.",
  },
};

export default queenOfCups;
