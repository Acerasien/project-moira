import type { TarotCard } from "../types";

const wheelOfFortune: TarotCard = {
  id: "wheel-of-fortune",
  name: "Wheel of Fortune",
  arcana: "major",
  number: 10,
  keywords: ["Change", "Destiny", "Cycles", "Turning Point"],
  image: "/cards/major/wheel-of-fortune.png",
  upright: {
    summary: "The wheel turns — and with it, your season shifts. What rises was always meant to; what falls has served its purpose.",
    meaning: "The Wheel of Fortune spins with figures rising on one side and descending on the other, a reminder that nothing — joy or sorrow, triumph or defeat — stays fixed. This is the card of cycles, of fate's inexorable turning. You are at a pivot point: a stroke of luck, a sudden shift, the closing of one chapter and the opening of another. You cannot control the wheel, but you can choose how you ride it. The only constant is that everything changes — and right now, change is arriving.",
    reflection: "What cycle in your life is completing, and what new one is beginning? Can you feel the shift — and are you ready to move with it rather than resist?",
    guidance: "Notice where you've been gripping the past or bracing against the future. Today, loosen your hold. Say yes to the turn, whatever direction it takes.",
  },
  reversed: {
    summary: "The wheel stalls — or spins so fast you can't find your footing. Either way, fortune feels out of reach.",
    meaning: "When the Wheel of Fortune appears reversed, the natural rhythm of change has been disrupted. You may feel stuck in a downturn that won't end — bad luck compounding, doors staying shut. Or you may be caught in chaos, change happening to you rather than through you, leaving you dizzy and disoriented. This reversal is not permanent — no card is more temporary than this one — but it asks you to examine whether you are resisting a necessary turn or clinging to a cycle that has already ended.",
    reflection: "Are you fighting a change that life is asking you to accept? Or are you passively waiting for luck to arrive instead of positioning yourself for it?",
    guidance: "If you feel stuck, change one small thing today — your routine, your route, your response. If you feel overwhelmed, find one fixed point to steady yourself against. The wheel always moves.",
  },
};

export default wheelOfFortune;
