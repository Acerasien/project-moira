import type { TarotCard } from "../types";

const theHermit: TarotCard = {
  id: "the-hermit",
  name: "The Hermit",
  arcana: "major",
  number: 9,
  keywords: ["Solitude", "Introspection", "Wisdom", "Guidance"],
  image: "/cards/major/the-hermit.png",
  upright: {
    summary: "The light you seek is not out there — it is the lantern you already carry into the quiet dark.",
    meaning: "The Hermit stands alone on a mountain peak, holding a lantern that illuminates only the next step — no more. This is the card of sacred withdrawal: not loneliness, but chosen solitude. When the noise of the world becomes too loud to hear your own thoughts, The Hermit calls you to step back, to descend into the interior landscape where truth waits in stillness. Wisdom is not accumulated in crowds; it is distilled in silence. The answers you need are not lost — they are simply buried beneath the clamor.",
    reflection: "What might you discover if you gave yourself permission to step away — from the scroll, the notifications, the endless asking — and simply sat with yourself?",
    guidance: "Carve out an hour of true solitude today. No input, no output. Let your own thoughts be the only voice in the room. See what rises.",
  },
  reversed: {
    summary: "Isolation has turned from refuge into prison — or the lantern has been turned outward, searching for answers in every face but your own.",
    meaning: "When The Hermit appears reversed, solitude has curdled into something less nourishing. You may be hiding — withdrawing not for wisdom but to avoid the demands of connection. Or you may be desperately seeking guidance from everyone around you, outsourcing your inner compass to whichever voice is loudest. The lantern's beam has swung outward or been extinguished entirely. This reversal asks: are you alone by choice, or by fear?",
    reflection: "Are you hiding from the world under the guise of introspection? Or have you been frantically seeking answers from others because you're afraid of what you'll find if you look within?",
    guidance: "If you've been hiding, reach out to one person today — briefly, honestly. If you've been seeking, stop asking and sit with the question. Your answer is already forming.",
  },
};

export default theHermit;
