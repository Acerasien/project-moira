import type { SpreadDefinition } from "./types";

const newMoon: SpreadDefinition = {
  id: "new-moon",
  name: "New Moon / Full Moon",
  description: "A four-card spread aligned with lunar cycles — for setting intentions and releasing what no longer serves.",
  cardCount: 4,
  category: "reflection",
  difficulty: "intermediate",
  positions: [
    { index: 1, label: "New Moon", description: "What is beginning — the seed you are planting.", row: 0, col: 0 },
    { index: 2, label: "Full Moon", description: "What is culminating — what has come to fullness.", row: 0, col: 1 },
    { index: 3, label: "Waning", description: "What to release as the moon fades.", row: 1, col: 0 },
    { index: 4, label: "Waxing", description: "What to nurture as the moon grows.", row: 1, col: 1 },
  ],
  synthesis:
    "The moon does not hurry, and neither should you. This spread mirrors the lunar cycle: a beginning, a peak, a release, and a nurturing. The New Moon card holds your intention — what you are planting now, even if you cannot yet see it. The Full Moon card reveals what has ripened, what is ready to be seen and celebrated. The Waning card asks what must be let go as the light fades. The Waxing card tells you what to tend as the light returns. You are always in all four phases at once, in different parts of your life. Let this spread show you which phase each part is in.",
};

export default newMoon;
