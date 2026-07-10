import type { TarotCard } from "../../types";

const tenOfPentacles: TarotCard = {
  id: "ten-of-pentacles",
  name: "Ten of Pentacles",
  arcana: "minor",
  suit: "pentacles",
  number: 10,
  keywords: ["Legacy", "Wealth", "Family", "Tradition"],
  image: "/cards/minor/pentacles/ten-of-pentacles.png",
  upright: {
    summary:
      "What you have built will outlast you — and that is the deepest form of wealth.",
    meaning:
      "The Ten of Pentacles is the culmination of the suit: a family gathered beneath an archway, generations connected by shared prosperity, tradition, and belonging. This card speaks to enduring wealth — not just money, but legacy, heritage, the kind of stability that shelters more than one life. It is the family business passed down, the home that holds decades of memory, the values that ripple forward through your children and their children. You are not building for yourself alone. You are laying stones for a path others will walk long after you.",
    reflection:
      "What are you building that is bigger than your own lifetime? How does your sense of belonging — to family, community, or tradition — shape the choices you make?",
    guidance:
      "Think in generations, not years. The investments you make today — in relationships, in values, in the structures that hold life together — are the inheritance you leave. Build accordingly.",
  },
  reversed: {
    summary:
      "The foundation cracks — inheritance becomes burden, family becomes fracture.",
    meaning:
      "Reversed, the Ten of Pentacles reveals instability beneath the surface of apparent wealth. Family conflict over money, the weight of inheritance turning into obligation, or a legacy that has become a cage rather than a gift. It can point to financial loss that threatens not just your comfort but your sense of belonging. The archway still stands, but the family beneath it is no longer whole.",
    reflection:
      "Where is there tension between your material security and your relationships? Is the legacy you are inheriting — or creating — one of freedom or of burden?",
    guidance:
      "Wealth without connection is hollow. If money is dividing your family, address it directly. If tradition has become suffocation, give yourself permission to build something new. A true legacy is one that liberates, not one that binds.",
  },
};

export default tenOfPentacles;
