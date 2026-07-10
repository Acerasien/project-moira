import type { TarotCard } from "../../types";

const pageOfCups: TarotCard = {
  id: "page-of-cups",
  name: "Page of Cups",
  arcana: "minor",
  suit: "cups",
  number: 11,
  keywords: ["Creativity", "Intuition", "New Feelings", "Curiosity"],
  image: "/cards/minor/cups/page-of-cups.png",
  upright: {
    summary:
      "A young page stands by the water, holding a cup from which a fish peers out. Surprise, wonder, and the first stirrings of creative inspiration.",
    meaning:
      "The Page of Cups arrives with the energy of a gentle nudge from the unconscious. This is the card of the beginner's heart — open, curious, and unafraid to be delighted. A new creative impulse is surfacing, or perhaps a fresh emotion that you cannot yet name but cannot ignore. The fish in the cup is the symbol of something unexpected emerging from the depths: a surprising idea, a tender crush, a hunch that will not leave you alone. The Page does not have the mastery of the King or the depth of the Queen, but they have something just as valuable — willingness. They are ready to feel, to explore, to follow the thread without knowing where it leads.",
    reflection:
      "What is the quiet idea or feeling that has been tapping on your shoulder lately, asking for attention? What would happen if you took it seriously, even before it made logical sense?",
    guidance:
      "Follow the curiosity. Journal, sketch, hum, daydream. The Page reminds you that not every creative impulse needs to become a masterpiece — sometimes it just needs to be expressed. Give form to the fish before you decide what kind of creature it is.",
  },
  reversed: {
    summary:
      "The fish has slipped back into the water, or perhaps it was never really there. Creative blocks, emotional immaturity, or a refusal to engage with your own inner world.",
    meaning:
      "Reversed, the Page of Cups can signal creative drought or emotional avoidance. You may feel uninspired, blocked, or unable to access the well of feeling that usually comes naturally. Alternatively, this reversal can point to emotional immaturity — being ruled by passing moods, wearing sensitivity as a weapon, or confusing drama for depth. The Page reversed is the person who feels everything intensely but does nothing with it, who mistakes the stirring of emotion for the completion of a creative act. The invitation here is to grow up without hardening. You can honor your feelings without being ruled by them.",
    reflection:
      "Are you genuinely blocked, or are you afraid of what might surface if you let yourself create? Is your emotional world something you engage with, or something you perform?",
    guidance:
      "Creativity is not a faucet you can turn on and off, but it does respond to presence. Sit with the silence. Let the water still. The fish will return when you stop thrashing. And when it does, pick up the cup.",
  },
};

export default pageOfCups;
