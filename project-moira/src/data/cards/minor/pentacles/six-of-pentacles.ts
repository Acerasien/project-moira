import type { TarotCard } from "../../types";

const sixOfPentacles: TarotCard = {
  id: "six-of-pentacles",
  name: "Six of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 6,
  keywords: ["Generosity", "Charity", "Sharing", "Reciprocity"],
  image: "/cards/minor/pentacles/six-of-pentacles.png",
  upright: {
    summary:
      "Giving and receiving flow through the same open hand — neither is complete without the other.",
    meaning:
      "The Six of Pentacles shows a figure distributing coins to those in need, holding scales in the other hand. This is the card of generosity in its truest form — not charity that condescends, but a balanced exchange that honors both the giver and the receiver. It can appear when you are in a position to give: money, time, mentorship, kindness. It can also appear when you are the one in need of receiving. Either way, it asks you to notice the flow — and to participate in it with humility and grace.",
    reflection:
      "Where are you in the cycle of giving and receiving right now? Are you giving freely, or keeping score? Are you able to receive without guilt?",
    guidance:
      "Give what you can, without strings attached. Receive what is offered, without shame. The scales balance themselves over time — trust the flow.",
  },
  reversed: {
    summary:
      "The scales tip — generosity becomes debt, or need becomes entitlement.",
    meaning:
      "When the Six of Pentacles reverses, the balance of giving and receiving has broken. You may be giving too much — exhausting yourself for people who do not reciprocate, or offering help that comes with hidden conditions. Alternatively, you may be on the receiving end of charity that feels like control, or finding yourself unable to accept help without feeling diminished. The flow has become a transaction, and transactions have a way of hollowing out the heart.",
    reflection:
      "Are your gifts truly free, or do they come with expectations attached? Are you able to ask for help without feeling like you owe something in return?",
    guidance:
      "Examine the strings. If your giving has conditions, name them — to yourself and to others. If you are receiving, remember that accepting help is not a debt. True generosity leaves no one smaller.",
  },
};

export default sixOfPentacles;
