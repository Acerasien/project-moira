import type { TarotCard } from "../../types";

const fourOfCups: TarotCard = {
  id: "four-of-cups",
  name: "Four of Cups",
  arcana: "minor",
  suit: "cups",
  number: 4,
  keywords: ["Apathy", "Contemplation", "Discontent", "Reevaluation"],
  image: "/cards/minor/cups/four-of-cups.png",
  upright: {
    summary:
      "A hand extends from the clouds, offering a fourth cup — but you are too absorbed in what you already have to notice. A call to look up.",
    meaning:
      "The Four of Cups captures a mood of quiet discontent. You sit beneath a tree, arms crossed, staring at three cups while a fourth hovers just outside your awareness. Nothing is wrong, exactly — but nothing feels right either. This is the restlessness of a heart that has grown numb to its own blessings. You may be bored, underwhelmed, or simply tired of the same emotional patterns repeating. The gift being offered is not obvious, and that is the point. It requires you to shift your gaze. The discontent you feel is not a flaw; it is a signal that something inside you is ready for more, even if you cannot yet name what that something is.",
    reflection:
      "What opportunity or connection have you been overlooking because it does not look the way you expected? Is your dissatisfaction about what is missing, or about your own willingness to receive?",
    guidance:
      "Pause before you reject. The offer may not come wrapped in excitement, but that does not make it less real. Sometimes the most transformative gifts arrive quietly, disguised as the ordinary. Uncross your arms and look again.",
  },
  reversed: {
    summary:
      "The fog lifts. You are ready to see what you have been missing, and the fourth cup is suddenly visible. A fresh sense of possibility stirs.",
    meaning:
      "Reversed, the Four of Cups signals the end of emotional stagnation. The apathy that had settled over you begins to break apart, and you find yourself newly curious about the world — and about your place in it. This is the moment you look up and realize there has been a hand offering you something all along. It may be a renewed sense of purpose, a surprise opportunity, or simply the return of your own enthusiasm. The key is that you are no longer blocking your own reception. When you stop demanding that life entertain you, life often becomes genuinely interesting again.",
    reflection:
      "What shifted? Was it the situation, or was it your perspective? What are you now willing to receive that you were not ready for before?",
    guidance:
      "Act on this clarity while it is fresh. Say yes to something you would have dismissed a week ago. The world has not changed — you have — and that is all the difference you need.",
  },
};

export default fourOfCups;
