import type { TarotCard } from "../../types";

const threeOfSwords: TarotCard = {
  id: "three-of-swords",
  name: "Three of Swords",
  arcana: "minor",
  suit: "swords",
  number: 3,
  keywords: ["Heartbreak", "Sorrow", "Pain", "Betrayal"],
  image: "/cards/minor/swords/three-of-swords.png",
  upright: {
    summary:
      "Three blades pierce the heart — grief arrives, and it demands to be felt.",
    meaning:
      "The Three of Swords is perhaps the most direct card in the deck: a heart pierced by three swords against a backdrop of storm and rain. This is the card of heartbreak, grief, and emotional pain in its most acute form. It does not offer comfort — it offers honesty. The swords of the mind have found their target in the heart, and the result is sorrow that cannot be reasoned away. And yet, there is something clarifying about this pain. It strips away illusion. It tells you exactly what mattered. The rain washes clean. The Three of Swords does not ask you to fix anything — only to feel, fully and without apology.",
    reflection:
      "What loss or betrayal is your heart still holding? Can you give yourself permission to grieve without rushing toward healing?",
    guidance:
      "Let the tears come. Write a letter you will never send. Speak the words you have been swallowing. Pain unexpressed becomes a permanent weight; pain expressed begins its release.",
  },
  reversed: {
    summary:
      "The heart begins to heal — but grief unprocessed lingers like a shadow.",
    meaning:
      "When the Three of Swords appears reversed, the acute phase of pain is receding. The swords are loosening, the storm is passing. But this reversal carries a warning: healing cannot be bypassed. If you have pushed through grief without truly feeling it, it will return — quieter, perhaps, but no less real. This card can also indicate an unwillingness to forgive, a refusal to let go of the wound because it has become part of your identity. Recovery is possible, but it requires you to stop picking at the scar and let it close.",
    reflection:
      "Have you truly processed your grief, or have you simply learned to function around it? What would full release feel like?",
    guidance:
      "Ask yourself: am I healing, or am I numbing? If the pain is still present, sit with it for five minutes today without distraction. Let it speak. Then let it go.",
  },
};

export default threeOfSwords;
