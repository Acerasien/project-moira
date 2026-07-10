import type { TarotCard } from "../../types";

const tenOfWands: TarotCard = {
  id: "ten-of-wands",
  name: "Ten of Wands",
  arcana: "minor",
  suit: "wands",
  number: 10,
  keywords: ["Burden", "Responsibility", "Overwhelm", "Hard Work"],
  image: "/cards/minor/wands/ten-of-wands.png",
  upright: {
    summary:
      "You are carrying too much — the weight of obligations presses down on you, and the load that once felt manageable has become a burden.",
    meaning:
      "The Ten of Wands shows a figure bent under the weight of ten heavy wands, struggling toward a town visible in the distance. The destination is near, but the load obscures the view. This is the card of overcommitment — the moment when the responsibilities you took on willingly have become a crushing weight. You may be carrying the expectations of others, the demands of a job that has expanded beyond its boundaries, or the emotional labor of holding everything together for everyone around you. The Ten of Wands honors your effort — you have worked hard, and that work is real — but it also asks a difficult question: at what cost? The wands in your arms are blocking your sight. You cannot see the path ahead because you are too busy managing what is already in your hands. Something must be set down.",
    reflection:
      "Which of the burdens you carry are truly yours, and which belong to someone else? What would become possible if you put even one of them down?",
    guidance:
      "You cannot carry everything and still move forward with grace. Delegate. Say no. Release the belief that everything will collapse without your constant effort — it will not. Identify one wand you can set down today, and let yourself feel the lightness that follows.",
  },
  reversed: {
    summary:
      "You have dropped the load — or it has dropped you. A breaking point has been reached, forcing a reckoning with limits and priorities.",
    meaning:
      "When the Ten of Wands reverses, the burden has become unsustainable, and something has to give. This can manifest as a breakdown, a burnout, a resignation, or a long-overdue release. The wands scatter, and for a moment there is chaos — but also space to breathe. You may have been forced to confront your limits in a way that felt like failure, but the reversal of this card is often a liberation in disguise. Alternatively, this reversal can indicate that you are still clinging to the load out of pride or fear, even as your body and spirit scream for relief. You are afraid that setting things down will make you look weak, unreliable, or incapable. But the real weakness is refusing to acknowledge that you are human, with human limits. The town on the horizon is closer than you think — but you will not reach it if you collapse on the road.",
    reflection:
      "What would it feel like to let yourself be supported? What story are you telling yourself about why you must carry everything alone?",
    guidance:
      "Let the wands fall. You do not need to carry what is not yours, and you do not need to carry what is yours all at once. Release does not mean failure — it means wisdom. Ask for help. Rest deeply. Rebuild with only what truly matters.",
  },
};

export default tenOfWands;
