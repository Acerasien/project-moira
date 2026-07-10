import type { TarotCard } from "../../types";

const twoOfWands: TarotCard = {
  id: "two-of-wands",
  name: "Two of Wands",
  arcana: "minor",
  suit: "wands",
  number: 2,
  keywords: ["Planning", "Future Vision", "Discovery", "Decisions"],
  image: "/cards/minor/wands/two-of-wands.png",
  upright: {
    summary:
      "You stand at the threshold of a decision, holding the world in your hands and gazing toward the horizon with ambition and anticipation.",
    meaning:
      "The Two of Wands captures the moment after inspiration strikes but before the journey begins. You hold a globe in one hand — a symbol of the possibilities you sense — and a wand in the other, representing the power you already possess. The second wand is fixed to the wall behind you, a reminder that you have built a foundation sturdy enough to launch from. Now you must choose: stay within the safety of what you know, or step beyond the familiar and into the unknown territory of your vision. This is a card of personal power and forward planning. It asks you to think big, to map the route, and to trust that you are ready for more than your current circumstances can contain. The world is larger than it looked yesterday, and you are being invited to expand with it.",
    reflection:
      "What decision have you been postponing because it feels too large? What would change if you finally chose the path that scares you a little?",
    guidance:
      "Make the plan. Not the safe plan — the real one. Then take the first step, even if it feels small. The horizon will not come to you; you must walk toward it. Trust that the foundation beneath your feet is strong enough to hold the weight of your next chapter.",
  },
  reversed: {
    summary:
      "Indecision keeps you frozen at the crossroads — fear of the unknown or reluctance to leave your comfort zone stalls your progress.",
    meaning:
      "Reversed, the Two of Wands reveals a soul caught between longing and fear. You want to move forward, but something — perhaps the comfort of the known, perhaps a fear of making the wrong choice — holds you in place. You may be over-planning, mistaking preparation for action, or hesitating because the path ahead lacks guarantees. Sometimes this reversal points to a fear of success itself: if you achieve what you dream of, everything changes, and change is rarely comfortable. It can also indicate that you have outgrown your current situation but feel guilt or obligation about leaving it behind. The globe is still in your hands, but you have turned your back to the horizon, choosing to look at what you already have rather than what could be.",
    reflection:
      "What is the real cost of staying where you are? Is your caution wisdom, or is it a disguise for fear?",
    guidance:
      "Name the fear. Write it down, look at it plainly, and ask yourself if it is truly bigger than the regret of never trying. You do not need to leap blindly — but you do need to move. Take one risk this week, however small, that points in the direction of your deeper longing.",
  },
};

export default twoOfWands;
