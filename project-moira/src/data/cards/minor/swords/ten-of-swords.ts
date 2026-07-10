import type { TarotCard } from "../../types";

const tenOfSwords: TarotCard = {
  id: "ten-of-swords",
  name: "Ten of Swords",
  arcana: "minor",
  suit: "swords",
  number: 10,
  keywords: ["Endings", "Rock Bottom", "Release", "Finality"],
  image: "/cards/minor/swords/ten-of-swords.png",
  upright: {
    summary:
      "Ten blades in the back, face-down at the water's edge — the worst has already happened, and dawn is breaking.",
    meaning:
      "The Ten of Swords is the most dramatic image in the suit: a figure lying face-down, ten swords plunged into their back, the sky dark above but glowing gold on the horizon. This is the card of rock bottom — the moment when things cannot possibly get worse, when the ending is absolute and irrevocable. And yet, there is something strangely freeing about the Ten of Swords. When the worst has already happened, there is nothing left to fear. The swords represent the mental anguish, the betrayal, the collapse of a situation you may have seen coming but could not prevent. The figure is down, but the sun is rising. This is not just an ending — it is the end of the ending. The only direction from here is up.",
    reflection:
      "What situation or chapter in your life has definitively ended? Can you let it be fully over, without trying to resurrect it?",
    guidance:
      "Stop picking at the wound. The ending has happened. Let yourself grieve, then turn toward the horizon. The dawn is not a metaphor — it is a promise.",
  },
  reversed: {
    summary:
      "You rise from the ground, pulling the swords from your own back — the worst is over, but the healing has just begun.",
    meaning:
      "Reversed, the Ten of Swords signals recovery. You have survived the collapse, and now the slow work of rebuilding begins. This reversal can also point to a refusal to let the ending be final — a desperate attempt to revive something that has already died, to re-fight a battle that is already lost. The danger of the Ten reversed is getting stuck in the narrative of victimhood, replaying the betrayal or the failure instead of moving forward. But the truer message is one of resurrection: you are still here, the swords are being removed, and the light on the horizon is no longer distant — it is warming your skin.",
    reflection:
      "Are you ready to stop being the person this happened to, and start being the person who survived it? What is the first thing you will build on the other side?",
    guidance:
      "The past is not a room you live in — it is a place you visited and left. Take one action today that affirms you are moving forward, not looking back.",
  },
};

export default tenOfSwords;
