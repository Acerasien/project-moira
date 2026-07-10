import type { TarotCard } from "../../types";

const threeOfCups: TarotCard = {
  id: "three-of-cups",
  name: "Three of Cups",
  arcana: "minor",
  suit: "cups",
  number: 3,
  keywords: ["Celebration", "Friendship", "Community", "Joy"],
  image: "/cards/minor/cups/three-of-cups.png",
  upright: {
    summary:
      "Raise your glass — this is a moment worth marking. Friendship, celebration, and the kind of laughter that leaves you breathless. You are not alone.",
    meaning:
      "The Three of Cups dances into your reading with an invitation to gather. This is the card of sisterhood, brotherhood, and chosen family — the people who know your stories and love you anyway. Something is ready to be celebrated: a milestone reached, a season survived, or simply the miracle of being alive together. The energy here is communal and effervescent. Let yourself be lifted by the collective joy. You do not have to earn this happiness or justify it with productivity. Some of the most sacred moments happen when we are simply present with each other, cups raised, hearts open.",
    reflection:
      "When did you last celebrate something just for the joy of it, without waiting for a perfect reason? Who are the people that fill your cup rather than drain it?",
    guidance:
      "Say yes to the invitation. Plan the gathering. Call the friend you have been meaning to call. Joy multiplies when it is shared, and right now the universe is handing you a reason to come together.",
  },
  reversed: {
    summary:
      "The party has gone quiet, or perhaps it was never for you. Isolation, gossip, or overindulgence has replaced genuine connection.",
    meaning:
      "Reversed, the Three of Cups warns of social friction. Friendships may feel strained, a celebration may fall flat, or you may find yourself on the outside of a circle you once belonged to. There is a risk of excess here — too much drinking, too much drama, too much energy spent on surfaces rather than substance. Alternatively, you may be isolating yourself, declining every invitation until the invitations stop coming. Ask yourself whether the distance you feel is self-imposed. Sometimes we withdraw because connection feels too vulnerable, and then we mistake the silence for rejection.",
    reflection:
      "Are you pushing people away, or are they pulling back? Is the social dynamic you are in actually nourishing you, or is it just noise?",
    guidance:
      "Quality over quantity. One honest conversation with a true friend is worth more than a dozen surface-level interactions. If a circle no longer fits, you have permission to find a new one — or to sit in the quiet until you know what you truly need.",
  },
};

export default threeOfCups;
