import type { TarotCard } from "../../types";

const fiveOfCups: TarotCard = {
  id: "five-of-cups",
  name: "Five of Cups",
  arcana: "minor",
  suit: "cups",
  number: 5,
  keywords: ["Loss", "Grief", "Regret", "Disappointment"],
  image: "/cards/minor/cups/five-of-cups.png",
  upright: {
    summary:
      "Three cups have spilled; two remain standing behind you. Grief has your full attention, and you cannot yet see what has survived.",
    meaning:
      "The Five of Cups is the card of heartbreak in its rawest form. Something you loved has been lost — a relationship, a dream, a version of the future you had already furnished with hope. You stand cloaked in black, staring at the spill, and it is impossible right now to feel anything but the absence. This card does not ask you to rush toward healing. Grief deserves its hour. But notice: two cups still stand behind you. They have not been knocked over. They hold what remains — the lessons, the love that was real, the part of you that is still whole. You are not being asked to ignore the loss, only to remember that it is not the whole story.",
    reflection:
      "What have you lost that you have not allowed yourself to fully mourn? And what remains — even if it is smaller than before — that is still worth turning toward?",
    guidance:
      "Let yourself grieve, but do not build a house in the rubble. The bridge ahead leads somewhere, even if you cannot see the destination yet. When you are ready — not before — turn around and count what survived.",
  },
  reversed: {
    summary:
      "The worst has passed. You are beginning to lift your eyes from the spilled cups and notice the ones that still stand. Recovery has begun.",
    meaning:
      "Reversed, the Five of Cups signals the slow, tender work of recovery. You are not fully healed — that takes time and cannot be rushed — but you are no longer frozen in place. The black cloak is loosening. You can see the bridge now, and more importantly, you are willing to cross it. This may also indicate a refusal to let go of guilt or regret that has outlived its purpose. There is a difference between honoring a loss and letting it define you. If you find yourself replaying the same sorrow, ask whether the grieving has become a kind of hiding. You are allowed to move forward without betraying what you lost.",
    reflection:
      "What would it feel like to forgive yourself? Is there a grief you have been carrying that has become more familiar than frightening?",
    guidance:
      "Pick up one of the remaining cups and take a sip. A single act of self-compassion — a walk, a call to a friend, an hour without blame — is how the return begins. You do not need to be whole to take the next step.",
  },
};

export default fiveOfCups;
