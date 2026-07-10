export interface Interpretation {
  summary: string;
  meaning: string;
  reflection: string;
  guidance: string;
}

export interface TarotCard {
  id: string;
  name: string;
  arcana: "major" | "minor";
  suit?: "cups" | "pentacles" | "swords" | "wands";
  number: number;
  keywords: string[];
  image: string;
  upright: Interpretation;
  reversed: Interpretation;
}
