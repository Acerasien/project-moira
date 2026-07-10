import type { TarotCard } from "../../types";

const queenOfSwords: TarotCard = {
  id: "queen-of-swords",
  name: "Queen of Swords",
  arcana: "minor",
  suit: "swords",
  number: 13,
  keywords: ["Clarity", "Independence", "Directness", "Perception"],
  image: "/cards/minor/swords/queen-of-swords.png",
  upright: {
    summary:
      "She sees through everything — and loves you anyway. The Queen of Swords wields truth as both weapon and gift.",
    meaning:
      "The Queen of Swords sits on her throne, sword upright in one hand, the other extended as if in welcome — or warning. Her profile is sharp, her gaze unblinking. This is the card of intellectual sovereignty: the woman who has learned through loss, who has earned her clarity through hardship, who does not flatter or soften the truth to make it more palatable. The Queen of Swords represents the highest expression of the mind — not cold, but clear; not harsh, but honest. She has felt deeply and learned to think clearly. Her independence is not a wall; it is a foundation. To encounter this card is to be invited into her way of seeing: direct, perceptive, unafraid of what the truth might reveal.",
    reflection:
      "Where in your life are you being called to speak the truth, even when it is uncomfortable? What would it mean to trust your own perception fully?",
    guidance:
      "Say the thing you have been avoiding. Be direct, be kind, but do not dilute the message. Your clarity is a gift — to yourself and to those who need to hear it.",
  },
  reversed: {
    summary:
      "The sharp mind turns inward — clarity becomes coldness, perception becomes judgment.",
    meaning:
      "Reversed, the Queen of Swords signals the shadow of intellect: the mind that has grown too sharp for its own good. This reversal can manifest as emotional coldness, as the armor of logic used to keep vulnerability at bay. It may point to bitterness — the wisdom that has hardened into cynicism, the independence that has become isolation. The Queen reversed can also indicate that your perception is being clouded by past hurts; you are seeing the present through the lens of old betrayals. The sword is still sharp, but it is cutting the wrong things. Truth without compassion is just another form of violence.",
    reflection:
      "Has your clarity become coldness? Are you using your intellect to connect, or to keep people at a distance?",
    guidance:
      "Soften the blade. The truth does not need to cut to be effective. Practice saying the honest thing with warmth — not less truth, just more heart.",
  },
};

export default queenOfSwords;
