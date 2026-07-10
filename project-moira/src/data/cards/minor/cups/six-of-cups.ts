import type { TarotCard } from "../../types";

const sixOfCups: TarotCard = {
  id: "six-of-cups",
  name: "Six of Cups",
  arcana: "minor",
  suit: "cups",
  number: 6,
  keywords: ["Nostalgia", "Innocence", "Memories", "Reunion"],
  image: "/cards/minor/cups/six-of-cups.png",
  upright: {
    summary:
      "A child offers a cup of flowers to a smaller child. The past reaches forward with a gift: memory, sweetness, and the purity of simpler days.",
    meaning:
      "The Six of Cups is a card of tender return. It carries the scent of childhood — of places and people that shaped you before you knew you were being shaped. This may manifest as a literal reunion, a nostalgic revisiting of old haunts, or a moment when you find yourself acting from the unguarded innocence you thought you had outgrown. The card does not ask you to live in the past, only to let it nourish you. There is wisdom in what you once knew instinctively: how to trust, how to play, how to love without calculating the cost. Let that younger version of you offer their flowers. Something in your present life needs that sweetness.",
    reflection:
      "What memory keeps returning to you lately, and why might it be knocking now? What did you know as a child about joy that you have since unlearned?",
    guidance:
      "Revisit something that made you happy before the world told you to be serious. Look at an old photograph, call someone who knew you back then, or simply give yourself permission to be soft. Not everything needs to be productive to be worthwhile.",
  },
  reversed: {
    summary:
      "You are stuck in a loop, looking backward so intently that the present fades. Or the past holds pain that has not been integrated.",
    meaning:
      "Reversed, the Six of Cups warns of being trapped by nostalgia. You may be romanticizing a time that was not as golden as memory paints it, or holding onto a relationship, a place, or a version of yourself that no longer exists. The past can be a sanctuary, but it can also be a cage. Alternatively, this reversal can signal unresolved childhood wounds that are surfacing now, asking to be healed rather than relived. You are not the same person who experienced those things, and you have resources now that you did not have then. The question is whether you will use them.",
    reflection:
      "Are you clinging to a memory because the present feels too uncertain? Is there a younger part of you that still needs to be heard — not indulged, but truly heard?",
    guidance:
      "Honor the past, but do not live there. If old pain is resurfacing, meet it with the compassion you would offer a child — not dismissal, not obsession, but gentle acknowledgment. Then turn back toward today.",
  },
};

export default sixOfCups;
