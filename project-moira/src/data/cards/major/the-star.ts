import type { TarotCard } from "../types";

const theStar: TarotCard = {
  id: "the-star",
  name: "The Star",
  arcana: "major",
  number: 17,
  keywords: ["Hope", "Inspiration", "Healing", "Renewal"],
  image: "/cards/major/the-star.png",
  upright: {
    summary: "After the storm, a quiet light — the kind of hope that doesn't shout but steadily shines.",
    meaning: "The Star shows a woman kneeling by a pool, pouring water onto the earth and back into the stream — an endless cycle of giving and receiving. Above her, a great star and seven smaller stars illuminate the night sky. This card arrives after The Tower's devastation, offering the first gentle light of healing. It is not the loud optimism of denial but the quiet, grounded hope that comes from having survived the worst and found yourself still whole. You are being replenished. Trust the restoration.",
    reflection: "What in you is beginning to heal — quietly, almost imperceptibly? Can you let yourself believe that hope is not naive but earned?",
    guidance: "Do one thing today that feels like restoration — a walk, a bath, a call to someone who sees you clearly. Let yourself receive what you've been pouring out.",
  },
  reversed: {
    summary: "The light has dimmed — not because it's gone, but because you've forgotten how to look for it.",
    meaning: "When The Star appears reversed, hope feels distant. You may be caught in despair, convinced that things will never improve, or you may have become cynical — rejecting possibility before it can disappoint you. Healing has stalled; the well of inspiration has run dry. But The Star reversed is not the absence of light — it is a failure of faith, a temporary blindness to the goodness that still exists. The stars haven't gone anywhere. You've just stopped looking up.",
    reflection: "What are you telling yourself is impossible that might simply be taking longer than you'd like? Where have you closed the door on hope to protect yourself from disappointment?",
    guidance: "Look for one small sign of goodness today — a kindness, a coincidence, a moment of unexpected beauty. Let it be enough. Hope rebuilds one star at a time.",
  },
};

export default theStar;
