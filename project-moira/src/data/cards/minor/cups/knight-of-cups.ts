import type { TarotCard } from "../../types";

const knightOfCups: TarotCard = {
  id: "knight-of-cups",
  name: "Knight of Cups",
  arcana: "minor",
  suit: "cups",
  number: 12,
  keywords: ["Romance", "Charm", "Idealism", "Proposal"],
  image: "/cards/minor/cups/knight-of-cups.png",
  upright: {
    summary:
      "A knight in shining armor rides a white horse, holding out a golden cup like an offering. Romance, charm, and the arrival of a heartfelt invitation.",
    meaning:
      "The Knight of Cups is the romantic idealist of the tarot, riding toward you — or riding out from within you — with a heart full of beauty and a cup full of dreams. This card often signals a proposal, a declaration of love, or an artistic vision that demands to be pursued. The Knight is graceful, emotionally intelligent, and deeply in touch with what is beautiful. They do not charge like the Knight of Swords or blaze like the Knight of Wands; they glide. Their power is in their sincerity. Whether this energy represents a person entering your life or a part of yourself awakening, the message is the same: follow what moves your heart. Let yourself be romantic — about love, about art, about life.",
    reflection:
      "What would you pursue if you trusted your heart completely? Is there an offer — romantic, creative, or spiritual — that you have been hesitating to accept?",
    guidance:
      "Ride toward it. The Knight of Cups does not wait for guarantees. Say the words you have been holding back. Make the gesture. Create the thing. Romance is not just something that happens to you — it is a way of moving through the world with your heart forward.",
  },
  reversed: {
    summary:
      "The knight has fallen from the horse, or the cup he offers is empty. Unrealistic expectations, emotional manipulation, or a love that was never quite real.",
    meaning:
      "Reversed, the Knight of Cups warns of idealism that has curdled into delusion. You — or someone in your life — may be spinning a fantasy that bears little resemblance to reality. This can manifest as a suitor who is all charm and no substance, an artistic vision that never moves beyond the dream phase, or your own tendency to fall in love with potential rather than actual people. There is also a risk of emotional manipulation here: the person who uses their sensitivity to control others, or who weaponizes vulnerability to avoid accountability. The question is whether the romance is nourishing you or distracting you from something that needs to be faced.",
    reflection:
      "Are you in love with a person, or with a story you have told yourself about them? What would change if you stopped projecting and started seeing what is actually in front of you?",
    guidance:
      "Take off the armor. The real work of love — of art, of life — happens when the fantasy meets the ground. If someone is offering you a beautiful story with no substance, you are allowed to decline. And if you are the one making empty promises, the bravest thing you can do is stop.",
  },
};

export default knightOfCups;
