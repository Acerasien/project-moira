import type { TarotCard } from "../types";

const theHangedMan: TarotCard = {
  id: "the-hanged-man",
  name: "The Hanged Man",
  arcana: "major",
  number: 12,
  keywords: ["Surrender", "Perspective", "Pause", "Sacrifice"],
  image: "/cards/major/the-hanged-man.png",
  upright: {
    summary: "Suspended between what was and what will be — sometimes the only way forward is to stop moving and see differently.",
    meaning: "The Hanged Man hangs upside down from a living tree, his expression serene, a halo of understanding around his head. This is not punishment — it is voluntary suspension, a chosen pause that transforms perspective. When forward motion no longer serves, this card invites you to stop, to let go of the need to push, and to view your situation from an angle you haven't tried. Surrender here is not defeat; it is the wisdom of knowing when effort has become its own obstacle.",
    reflection: "What if the thing you've been fighting isn't the problem — but your angle on it is? What might you see if you stopped struggling and simply observed?",
    guidance: "Release your grip on one problem today — not to abandon it, but to let it breathe. Step back, get quiet, and ask: what would this look like from the opposite direction?",
  },
  reversed: {
    summary: "Refusing the pause — thrashing against the rope, or offering yourself up when no sacrifice was asked.",
    meaning: "When The Hanged Man appears reversed, the wisdom of suspension is being resisted. You may be fighting desperately against a pause that life is demanding — filling every silence with activity, refusing to sit with discomfort. Or you may be stuck in martyrdom, sacrificing yourself unnecessarily, mistaking self-abandonment for virtue. Either way, the stillness that could heal has become a source of suffering. The question is: are you avoiding the pause, or are you living in it when it's time to get down?",
    reflection: "Are you resisting a necessary pause by staying busy? Or have you been hanging so long — in a job, a relationship, a mindset — that you've forgotten you can choose to stand up?",
    guidance: "If you've been running, stop — even for an hour. If you've been frozen, take one small action that reasserts your agency. The pause is a teacher, not a sentence.",
  },
};

export default theHangedMan;
