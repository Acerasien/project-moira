import type { TarotCard } from "../types";

const theTower: TarotCard = {
  id: "the-tower",
  name: "The Tower",
  arcana: "major",
  number: 16,
  keywords: ["Upheaval", "Revelation", "Awakening", "Breakdown"],
  image: "/cards/major/the-tower.png",
  upright: {
    summary: "The lightning does not ask permission — it strikes, and what was built on false ground comes crashing down.",
    meaning: "The Tower shows a stone tower struck by lightning, flames bursting from its crown, two figures falling into the unknown. This is the card of sudden, irreversible change — the revelation that shatters the structures you thought were unshakeable. A belief, a relationship, a career, an identity: whatever was built on shaky foundations cannot withstand the truth. The destruction is terrifying, but it is also liberation. The lightning does not come to punish you — it comes to free you from a prison you may not have known you were in.",
    reflection: "What in your life is built on something false — a belief you inherited, a relationship you've outgrown, a version of yourself that no longer fits? What would the lightning reveal?",
    guidance: "Do not brace against the inevitable. If something is crumbling, let it. The clearing will be painful, but it will also be honest. And from honesty, something real can finally be built.",
  },
  reversed: {
    summary: "The storm you're trying to outrun is the one you need to walk through — avoidance only prolongs the collapse.",
    meaning: "When The Tower appears reversed, the lightning has not yet struck — but you can feel it gathering. You may be holding a crumbling structure together with sheer will, denying the cracks in the walls, or numbing yourself against the truth that is trying to break through. This reversal can also signal an internal collapse: the shock that doesn't come from outside but from within — a breakdown of identity, a crisis of meaning. The tower will fall. The only question is whether you'll still be inside when it does.",
    reflection: "What truth are you desperately trying to keep standing? What would happen if you stopped reinforcing the walls and let yourself fall — knowing that the ground will catch you?",
    guidance: "Stop propping up what is already breaking. Take one honest look at the cracks today. Name them. The sooner you step out of the tower, the softer the landing.",
  },
};

export default theTower;
