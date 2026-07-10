import type { TarotCard } from "../types";

const death: TarotCard = {
  id: "death",
  name: "Death",
  arcana: "major",
  number: 13,
  keywords: ["Transformation", "Endings", "Release", "Renewal"],
  image: "/cards/major/death.png",
  upright: {
    summary: "What no longer serves you is being cleared away — not as punishment, but as preparation for what comes next.",
    meaning: "Death rides through the landscape on a pale horse, and before them, all that has outlived its purpose falls away. This is the most misunderstood card in the deck — it rarely signals physical death, but the necessary ending of a chapter, a pattern, an identity. The fields are being cleared not to leave them barren but to make room for new growth. Transformation is rarely gentle, but it is always sacred. Let the old fall. It was never meant to last forever, and you were never meant to stay the same.",
    reflection: "What in your life has already ended but you haven't yet let yourself grieve — or release? What are you still holding onto that is holding you back?",
    guidance: "Name one thing you're ready to let go of. Say it aloud. Write it down. Then do one small thing today that loosens its hold — delete the message, close the door, speak the goodbye.",
  },
  reversed: {
    summary: "Stagnation dressed as stability — the transformation you're resisting is the very thing that could set you free.",
    meaning: "When Death appears reversed, you are clinging to something that has already died. A relationship, a career path, a version of yourself — the pulse is gone, but you keep breathing into it, hoping for resurrection. This resistance to necessary endings breeds a slow, quiet decay: the life that could be blooming is held hostage by the life that's already over. Death reversed is not a reprieve; it is a delay. The clearing will come. The question is whether you'll walk through it willingly or be dragged.",
    reflection: "What ending are you refusing to accept? What would become possible if you stopped trying to revive what has already reached its natural conclusion?",
    guidance: "Honor what needs to end. Light a candle, write a letter you'll never send, or simply speak the words: 'Thank you. I release you.' Then turn toward the open field.",
  },
};

export default death;
