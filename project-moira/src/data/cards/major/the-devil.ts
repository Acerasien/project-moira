import type { TarotCard } from "../types";

const theDevil: TarotCard = {
  id: "the-devil",
  name: "The Devil",
  arcana: "major",
  number: 15,
  keywords: ["Bondage", "Attachment", "Shadow", "Temptation"],
  image: "/cards/major/the-devil.png",
  upright: {
    summary: "The chains you wear are looser than they look — and you hold the key to every lock.",
    meaning: "The Devil shows two figures chained loosely at the neck, standing before a horned figure who presides over their bondage. But look closer: the chains are not tight. The figures could slip free if they chose. This card exposes the shadows we pretend not to see — addiction, obsession, toxic attachment, the stories we tell ourselves about why we can't leave, can't change, can't choose differently. The Devil is not an external force; it is the part of you that believes the cage is home. The door is open. It always has been.",
    reflection: "What pattern, person, or belief are you chained to — not because you must be, but because leaving feels more terrifying than staying? What lie is keeping you bound?",
    guidance: "Name your chain today. Speak it aloud to someone you trust, or write it down where only you can see. Naming it is the first act of loosening it.",
  },
  reversed: {
    summary: "The chains are breaking — but freedom, when it arrives, can feel as disorienting as it is liberating.",
    meaning: "When The Devil appears reversed, you are beginning to see the cage for what it is. The grip of addiction, fear, or unhealthy attachment is loosening — not because the shadow has vanished, but because you are finally turning to face it. This is a fragile, powerful moment: the light hurts after so long in the dark, and the old patterns will call you back with familiar comfort. But you have glimpsed the door. You know it's open. Now you must decide whether to walk through.",
    reflection: "What are you in the process of freeing yourself from? What still tempts you to turn back — and what is waiting for you on the other side of that door?",
    guidance: "Celebrate the progress you've made, even if it feels fragile. Then take one more step away from the old pattern. You are not who you were when you first put on those chains.",
  },
};

export default theDevil;
