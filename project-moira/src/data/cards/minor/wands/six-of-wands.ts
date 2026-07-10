import type { TarotCard } from "../../types";

const sixOfWands: TarotCard = {
  id: "six-of-wands",
  name: "Six of Wands",
  arcana: "minor",
  suit: "wands",
  number: 6,
  keywords: ["Victory", "Recognition", "Achievement", "Confidence"],
  image: "/cards/minor/wands/six-of-wands.png",
  upright: {
    summary:
      "You have earned your victory — the crowd cheers, recognition arrives, and you ride forward with well-deserved confidence.",
    meaning:
      "The Six of Wands is the triumphant procession after a hard-fought win. A figure rides a white horse through a celebrating crowd, a laurel wreath crowning both head and wand — symbols of honor earned through effort. This is public recognition, the moment when your work is seen and celebrated by others. It may arrive as a promotion, an award, praise from someone you admire, or simply the quiet satisfaction of knowing you did the thing you set out to do. But this card carries a gentle warning beneath its fanfare: victory is a moment, not a destination. Let the applause nourish you, but do not let it define you. The confidence you feel now is real, but it must be carried forward with humility if it is to last. Today you ride the horse; tomorrow you begin again.",
    reflection:
      "What achievement are you ready to own fully, without deflecting or minimizing? How does it feel to let yourself be seen in your success?",
    guidance:
      "Accept the praise. Do not shrink, do not deflect, do not immediately point to the next mountain. Let this moment be what it is — a win. Then, when the celebration fades, carry the confidence forward as fuel for whatever comes next, not as a crown that must be defended.",
  },
  reversed: {
    summary:
      "Recognition feels absent or hollow — your efforts go unnoticed, self-doubt creeps in, or the victory you sought rings empty.",
    meaning:
      "Reversed, the Six of Wands speaks to the ache of unrecognized effort. You have worked hard, poured yourself into something, and yet the applause never came — or it came from the wrong people, or it felt insufficient when it arrived. This reversal can also point to a crisis of confidence. Perhaps the victory was achieved, but imposter syndrome whispers that you do not deserve it. Maybe you are chasing external validation so intensely that you have forgotten what your own approval feels like. In some cases, this card warns of a fall from grace — a reputation damaged, a public misstep, the fickleness of fame. The crowd that cheers today may jeer tomorrow, and the only stable ground is the one you build within yourself.",
    reflection:
      "Whose approval are you really seeking, and why does their voice carry so much weight? What would change if you became your own loudest supporter?",
    guidance:
      "Your worth is not measured by applause. If recognition is slow to arrive, keep building anyway — not for the crowd, but for the craft. If self-doubt has crept in, revisit the evidence of your past wins. You have done hard things before. You will do them again.",
  },
};

export default sixOfWands;
