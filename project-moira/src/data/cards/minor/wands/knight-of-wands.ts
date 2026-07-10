import type { TarotCard } from "../../types";

const knightOfWands: TarotCard = {
  id: "knight-of-wands",
  name: "Knight of Wands",
  arcana: "minor",
  suit: "wands",
  number: 12,
  keywords: ["Adventure", "Passion", "Impulsivity", "Energy"],
  image: "/cards/minor/wands/knight-of-wands.png",
  upright: {
    summary:
      "Charging forward with fiery confidence and a thirst for adventure — the Knight of Wands arrives in a blaze of passion and bold action.",
    meaning:
      "The Knight of Wands rides a rearing horse, wand raised like a torch, armor gleaming in the sun. This is the card of the passionate adventurer — someone who does not wait for permission, who acts first and thinks later, who lives for the thrill of the chase. When this energy enters your life, things move fast. A sudden trip, a whirlwind romance, a bold career move, a creative burst that demands immediate expression. The Knight brings courage, charisma, and an almost magnetic intensity. People are drawn to this fire. But the Knight's gift is also their shadow: the flame that lights the way can also burn bridges. This card asks you to embrace your boldness while remaining aware of its impact. Charge forward, yes — but glance back occasionally to make sure you have not left something precious in the dust.",
    reflection:
      "Where in your life are you being called to act boldly, without overthinking? What would you do today if you trusted your own fire?",
    guidance:
      "Go. Now. The moment is ripe for action, and hesitation is the only true enemy. Let passion lead — but pack a little patience in your saddlebag. The fire that burns brightest also burns fastest. Channel your intensity into sustained effort, not just dramatic gestures.",
  },
  reversed: {
    summary:
      "Recklessness has outpaced wisdom — or the fire has gone out entirely, leaving frustration, scattered energy, and stalled momentum.",
    meaning:
      "When the Knight of Wands reverses, the gallop becomes a stumble. The boldness that once propelled you forward has tipped into recklessness — you are charging ahead without a map, burning through resources, leaving a trail of half-finished projects and frayed relationships in your wake. Impulsivity has become your master rather than your servant. Alternatively, this reversal can manifest as the opposite extreme: the fire has died. You feel aimless, uninspired, unable to summon the energy that once came so naturally. Projects stall. Passion fades. You are restless but directionless, and that restlessness curdles into frustration or self-destructive choices. Sometimes the reversed Knight points to someone in your life — a person whose charisma and energy are intoxicating but ultimately unreliable, a flame that dazzles but never warms.",
    reflection:
      "Is your current speed sustainable, or are you running from something? If the fire has dimmed, what — or who — extinguished it?",
    guidance:
      "Slow the horse. Speed without direction is just noise. If you have been reckless, pause long enough to survey the damage and make amends. If the fire has gone out, do not force it — rest, retreat, and let the embers gather heat again. True passion is not a sprint; it is a pilgrimage.",
  },
};

export default knightOfWands;
