import type { TarotCard } from "../../types";

const fiveOfPentacles: TarotCard = {
  id: "five-of-pentacles",
  name: "Five of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 5,
  keywords: ["Hardship", "Lack", "Isolation", "Insecurity"],
  image: "/cards/minor/pentacles/five-of-pentacles.png",
  upright: {
    summary:
      "You are standing in the cold, convinced you are alone — but the warmth is closer than you think.",
    meaning:
      "The Five of Pentacles is a stark image: two figures walking through snow outside a lit church window. This is the card of material hardship, of feeling left out in the cold while warmth and shelter sit just beyond reach. It speaks to financial struggle, health challenges, and the loneliness that can accompany both. But notice the stained glass — it is illuminated. The door is not locked. This card does not promise that hardship is an illusion, but it insists that help exists, even when you cannot see it.",
    reflection:
      "Where in your life are you feeling shut out or left behind? Are you assuming that no help is available, without actually asking?",
    guidance:
      "Look up from the snow. The light in the window is real. Ask for help — from a friend, a community, a professional. You do not have to walk through this alone, and you were never meant to.",
  },
  reversed: {
    summary:
      "The worst of the storm is passing — and you are beginning to see the door.",
    meaning:
      "Reversed, the Five of Pentacles signals the end of a period of deprivation. The snow is thinning, the cold is easing, and you are starting to believe that warmth might be possible again. This can also point to an internal shift: recognizing that your sense of isolation was partly self-imposed, that you turned away from help that was always there. Recovery is not instant, but it has begun.",
    reflection:
      "What resources or support have you been overlooking? How has your sense of isolation shaped the way you see your situation?",
    guidance:
      "Walk toward the light. Accept the hand that reaches out. The hardest part of this journey is behind you — let yourself be guided the rest of the way.",
  },
};

export default fiveOfPentacles;
