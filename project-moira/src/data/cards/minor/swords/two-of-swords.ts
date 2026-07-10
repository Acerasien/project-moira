import type { TarotCard } from "../../types";

const twoOfSwords: TarotCard = {
  id: "two-of-swords",
  name: "Two of Swords",
  arcana: "minor",
  suit: "swords",
  number: 2,
  keywords: ["Indecision", "Stalemate", "Difficult Choice", "Blindness"],
  image: "/cards/minor/swords/two-of-swords.png",
  upright: {
    summary:
      "Two paths, one heart — you sit blindfolded at the crossroads, swords crossed in stalemate.",
    meaning:
      "The Two of Swords depicts a figure seated before the sea, blindfolded, holding two crossed swords in perfect equilibrium. This is the card of the impossible choice — the moment when both options carry weight, and choosing one feels like betraying the other. The blindfold is not punishment; it is protection. It suggests that the answer will not come through more information or sharper logic, but through stillness. Beneath the surface, the waters of intuition stir. The stalemate is temporary, but it will not break through force — only through honesty about what you truly want.",
    reflection:
      "What choice have you been avoiding? What would you choose if no one else's opinion mattered?",
    guidance:
      "Stop gathering more data. Sit quietly with both options and notice which one your body relaxes toward. Trust the wisdom beneath the logic.",
  },
  reversed: {
    summary:
      "The blindfold slips — information floods in, but the heart still cannot decide.",
    meaning:
      "Reversed, the Two of Swords signals that the stalemate is cracking — but not necessarily in a helpful way. New information may arrive, or the pressure to choose becomes unbearable. You might feel exposed, forced into a decision before you are ready. The crossed swords begin to tremble; the balance cannot hold much longer. This reversal can also suggest that you are pretending not to know what you already know, and the strain of that pretense is wearing you thin. The choice was never between two options — it was between fear and honesty.",
    reflection:
      "What would it cost you to admit what you already know? What are you protecting by staying undecided?",
    guidance:
      "Let the decision make itself. Instead of forcing a choice, ask: which path feels lighter? Which one makes you exhale? Your body already knows the answer.",
  },
};

export default twoOfSwords;
