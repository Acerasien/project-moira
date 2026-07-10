import type { SpreadDefinition } from "../data/spreads/types";
import singleCard from "../data/spreads/single-card";
import pastPresentFuture from "../data/spreads/past-present-future";
import mindBodySpirit from "../data/spreads/mind-body-spirit";
import celticCross from "../data/spreads/celtic-cross";
import horseshoe from "../data/spreads/horseshoe";
import relationship from "../data/spreads/relationship";
import careerPath from "../data/spreads/career-path";
import yesNo from "../data/spreads/yes-no";
import starGuide from "../data/spreads/star-guide";
import newMoon from "../data/spreads/new-moon";

const allSpreads: SpreadDefinition[] = [
  singleCard,
  pastPresentFuture,
  mindBodySpirit,
  celticCross,
  horseshoe,
  relationship,
  careerPath,
  yesNo,
  starGuide,
  newMoon,
];

export function getAllSpreads(): SpreadDefinition[] {
  return allSpreads;
}

export function getSpreadById(id: string): SpreadDefinition | undefined {
  return allSpreads.find((s) => s.id === id);
}

export function getSpreadsByCategory(
  category: SpreadDefinition["category"] | "all",
): SpreadDefinition[] {
  if (category === "all") return allSpreads;
  return allSpreads.filter((s) => s.category === category);
}
