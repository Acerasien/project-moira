import type { TarotCard } from "../../types";

const aceOfPentacles: TarotCard = {
  id: "ace-of-pentacles",
  name: "Ace of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 1,
  keywords: ["New Opportunity", "Prosperity", "Manifestation", "Abundance"],
  image: "/cards/minor/pentacles/ace-of-pentacles.png",
  upright: {
    summary:
      "A seed of tangible possibility — the universe hands you something real.",
    meaning:
      "The Ace of Pentacles arrives like an open door you can walk through with your feet on the ground. A new job offer, a financial windfall, a practical idea that feels solid enough to build upon. This is not the kind of abundance that lives only in the mind — it is earthy, touchable, ready to be shaped. The hand that offers the golden coin does so without condition. The question is whether you will reach out and receive it.",
    reflection:
      "What opportunity has recently presented itself to you — one that feels grounded, practical, and worth investing in? Are you hesitating to accept it?",
    guidance:
      "Say yes to the tangible gift. Plant this seed now, even if the harvest is months away. The foundation you lay today will support everything that follows.",
  },
  reversed: {
    summary:
      "A missed door, a delayed harvest — prosperity feels just out of reach.",
    meaning:
      "Reversed, the Ace of Pentacles suggests a promising opportunity slipping through your fingers. Perhaps you overlooked it, undervalued it, or let fear convince you it was too good to be true. It can also point to financial carelessness — spending before you have earned, or investing energy in something that lacks solid footing. The coin is still there, but you are looking the other way.",
    reflection:
      "Where have you been turning away from practical abundance? Is there an opportunity you dismissed that deserves a second look?",
    guidance:
      "Pause and look again. The seed has not disappeared — it has simply fallen from your hand. Pick it back up. This time, plant it with intention.",
  },
};

export default aceOfPentacles;
