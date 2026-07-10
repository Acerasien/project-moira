import type { TarotCard } from "../../types";

const fiveOfWands: TarotCard = {
  id: "five-of-wands",
  name: "Five of Wands",
  arcana: "minor",
  suit: "wands",
  number: 5,
  keywords: ["Competition", "Conflict", "Rivalry", "Challenge"],
  image: "/cards/minor/wands/five-of-wands.png",
  upright: {
    summary:
      "Conflict and competition heat up around you — egos clash, perspectives collide, and the path forward feels like a battlefield.",
    meaning:
      "The Five of Wands shows five figures brandishing wands in what looks like chaotic combat, yet no one is wounded. This is the friction of competing ideas, not a war of destruction. You may find yourself in an environment where voices are raised, ambitions overlap, and everyone has a strong opinion about the right way forward. It could be a workplace turf war, a creative disagreement, a family argument, or the internal conflict of too many passions pulling you in different directions. The gift hidden within this card is that conflict, when engaged constructively, sharpens ideas and reveals truths that comfort cannot. Iron sharpens iron. The question is not whether you will encounter resistance — you will — but whether you can stay in the fray without losing yourself to the heat.",
    reflection:
      "What conflict in your life right now is actually trying to teach you something? Are you competing because you want to win, or because you fear losing?",
    guidance:
      "Pick your battles. Not every disagreement is your fight. When you do engage, do so with respect — aim for resolution, not domination. If the competition is draining rather than sharpening you, step back and ask whether this arena is even one you want to be in.",
  },
  reversed: {
    summary:
      "The conflict is receding — either you have chosen to walk away, or internal friction has replaced external battles.",
    meaning:
      "When the Five of Wands reverses, the external chaos begins to settle, but the peace may feel uneasy. Perhaps you have withdrawn from a conflict that was going nowhere, and now you face the quiet aftermath — relief, yes, but also the question of what was lost in the retreat. Alternatively, the battle may have turned inward. You are no longer fighting others, but you are fighting yourself: self-doubt, perfectionism, the relentless inner critic that wields wands of its own. This reversal can also signal a fear of conflict that leads to avoidance, a pattern of swallowing your truth to keep the peace. Harmony achieved through silence is not harmony at all — it is a truce with a hidden cost.",
    reflection:
      "Are you avoiding a necessary conversation? What would you say if you trusted that conflict could lead to deeper understanding rather than damage?",
    guidance:
      "If the external battles are over, allow yourself to truly rest — but do not mistake avoidance for resolution. If the conflict has moved inward, treat yourself with the same fairness you would offer a respected opponent. Speak your truth with kindness, starting with the person in the mirror.",
  },
};

export default fiveOfWands;
