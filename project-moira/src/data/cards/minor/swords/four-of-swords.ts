import type { TarotCard } from "../../types";

const fourOfSwords: TarotCard = {
  id: "four-of-swords",
  name: "Four of Swords",
  arcana: "minor",
  suit: "swords",
  number: 4,
  keywords: ["Rest", "Recovery", "Meditation", "Retreat"],
  image: "/cards/minor/swords/four-of-swords.png",
  upright: {
    summary:
      "A quiet sanctuary — the mind lays down its weapons and surrenders to stillness.",
    meaning:
      "The Four of Swords shows a figure in repose, hands in prayer, three swords hanging above and one resting beside them. This is the card of deliberate rest — not laziness, but strategic withdrawal. After the heartbreak of the Three, the Four offers sanctuary. The mind, so often overworked in the suit of Swords, is given permission to stop. This is the retreat you take not because you are weak, but because you know that clarity requires distance. Sleep, meditation, a change of scenery — whatever restores your inner quiet belongs here. The battle will still be there when you return, but you will meet it with renewed perspective.",
    reflection:
      "Where in your life is your mind exhausted? What would it look like to give yourself genuine, guilt-free rest?",
    guidance:
      "Take one hour today — truly, one hour — and do nothing productive. No screens, no planning, no solving. Let your mind drift. Restoration is not earned; it is necessary.",
  },
  reversed: {
    summary:
      "Restlessness breaks the silence — the mind refuses to power down.",
    meaning:
      "Reversed, the Four of Swords signals an inability to rest even when rest is desperately needed. The body may be still, but the mind is racing — replaying conversations, anticipating problems, solving problems that have not yet arrived. You may be burning out, unable to unplug, caught in a cycle of anxiety that masquerades as productivity. This reversal can also suggest that a period of withdrawal has gone on too long, and it is time to re-engage with the world. The question is whether you are resting or hiding.",
    reflection:
      "Is your stillness restorative or restless? Are you recharging, or are you avoiding something by staying withdrawn?",
    guidance:
      "If your mind will not quiet, try a walking meditation or journaling — give the thoughts a channel, then close it. If you have been hiding, take one small step back into the world today.",
  },
};

export default fourOfSwords;
