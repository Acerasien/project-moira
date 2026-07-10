import type { SpreadDefinition } from "./types";

const careerPath: SpreadDefinition = {
  id: "career-path",
  name: "Career Path",
  description: "Guidance for professional decisions, growth, and finding meaningful work.",
  cardCount: 5,
  category: "career",
  difficulty: "intermediate",
  positions: [
    { index: 1, label: "Current", description: "Where you stand in your work life now.", row: 0, col: 0 },
    { index: 2, label: "Calling", description: "What you are truly drawn toward.", row: 1, col: 0 },
    { index: 3, label: "Obstacle", description: "What stands between you and your next step.", row: 2, col: 0 },
    { index: 4, label: "Strength", description: "The skill or quality you should lean into.", row: 3, col: 0 },
    { index: 5, label: "Next Step", description: "The action to take now.", row: 4, col: 0 },
  ],
  synthesis:
    "Your work is not just what you do — it is where your energy meets the world. These five cards form a staircase: where you stand, what calls you, what blocks you, what empowers you, and what to do next. The gap between your current position and your calling is not a failure — it is the plot of your story. The obstacle is not a wall; it is the thing you are meant to work through. The strength card is your tool. The next step is already visible. Take it.",
};

export default careerPath;
