export interface SpreadPosition {
  index: number;
  label: string;
  description: string;
  row: number;
  col: number;
}

export interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  category: "general" | "love" | "career" | "reflection";
  difficulty: "beginner" | "intermediate" | "advanced";
  positions: SpreadPosition[];
  synthesis: string;
}
