import type { TarotCard } from "../../types";

const fiveOfSwords: TarotCard = {
  id: "five-of-swords",
  name: "Five of Swords",
  arcana: "minor",
  suit: "swords",
  number: 5,
  keywords: ["Conflict", "Defeat", "Tension", "Winning at a Cost"],
  image: "/cards/minor/swords/five-of-swords.png",
  upright: {
    summary:
      "The battle is won, but the field is empty — victory tastes bitter on the tongue.",
    meaning:
      "The Five of Swords depicts a figure smirking, swords gathered from defeated opponents who walk away in the distance. This is the card of hollow victory — the argument you won but the relationship you lost, the point you proved that changed nothing, the competition that left everyone diminished. Swords govern the intellect, and the Five shows what happens when intellect becomes a weapon: someone must lose. The card asks you to examine your victories. Did you win because you were right, or because you were ruthless? And was the win worth what it cost?",
    reflection:
      "What recent conflict are you still replaying in your mind? What did winning — or losing — actually cost you?",
    guidance:
      "Before entering your next disagreement, ask yourself: do I want to be right, or do I want to be connected? Choose your battles with care. Some fights are not meant to be won.",
  },
  reversed: {
    summary:
      "The swords lay scattered — a chance to reconcile, or the sting of lingering defeat.",
    meaning:
      "Reversed, the Five of Swords signals the aftermath of conflict — and the possibility of repair. The tension is easing, and there may be an opening for reconciliation, if you are willing to be humble. Alternatively, this reversal can point to an internal battle: the self-criticism and harsh inner dialogue that leaves you feeling defeated even when no one else is fighting you. Either way, the message is the same: the war is over, and it is time to pick up the pieces rather than re-fight the battle.",
    reflection:
      "Are you holding onto a grudge that is only hurting you? What would it feel like to lay the sword down?",
    guidance:
      "If reconciliation is possible, make the first move — not to win, but to heal. If the conflict is internal, speak to yourself with the kindness you would offer a wounded friend.",
  },
};

export default fiveOfSwords;
