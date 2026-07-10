import type { TarotCard } from "../data/cards/types";

// Major Arcana (22)
import theFool from "../data/cards/major/the-fool";
import theMagician from "../data/cards/major/the-magician";
import theHighPriestess from "../data/cards/major/the-high-priestess";
import theEmpress from "../data/cards/major/the-empress";
import theEmperor from "../data/cards/major/the-emperor";
import theHierophant from "../data/cards/major/the-hierophant";
import theLovers from "../data/cards/major/the-lovers";
import theChariot from "../data/cards/major/the-chariot";
import strength from "../data/cards/major/strength";
import theHermit from "../data/cards/major/the-hermit";
import wheelOfFortune from "../data/cards/major/wheel-of-fortune";
import justice from "../data/cards/major/justice";
import theHangedMan from "../data/cards/major/the-hanged-man";
import death from "../data/cards/major/death";
import temperance from "../data/cards/major/temperance";
import theDevil from "../data/cards/major/the-devil";
import theTower from "../data/cards/major/the-tower";
import theStar from "../data/cards/major/the-star";
import theMoon from "../data/cards/major/the-moon";
import theSun from "../data/cards/major/the-sun";
import judgement from "../data/cards/major/judgement";
import theWorld from "../data/cards/major/the-world";

// Cups (14)
import aceOfCups from "../data/cards/minor/cups/ace-of-cups";
import twoOfCups from "../data/cards/minor/cups/two-of-cups";
import threeOfCups from "../data/cards/minor/cups/three-of-cups";
import fourOfCups from "../data/cards/minor/cups/four-of-cups";
import fiveOfCups from "../data/cards/minor/cups/five-of-cups";
import sixOfCups from "../data/cards/minor/cups/six-of-cups";
import sevenOfCups from "../data/cards/minor/cups/seven-of-cups";
import eightOfCups from "../data/cards/minor/cups/eight-of-cups";
import nineOfCups from "../data/cards/minor/cups/nine-of-cups";
import tenOfCups from "../data/cards/minor/cups/ten-of-cups";
import pageOfCups from "../data/cards/minor/cups/page-of-cups";
import knightOfCups from "../data/cards/minor/cups/knight-of-cups";
import queenOfCups from "../data/cards/minor/cups/queen-of-cups";
import kingOfCups from "../data/cards/minor/cups/king-of-cups";

// Pentacles (14)
import aceOfPentacles from "../data/cards/minor/pentacles/ace-of-pentacles";
import twoOfPentacles from "../data/cards/minor/pentacles/two-of-pentacles";
import threeOfPentacles from "../data/cards/minor/pentacles/three-of-pentacles";
import fourOfPentacles from "../data/cards/minor/pentacles/four-of-pentacles";
import fiveOfPentacles from "../data/cards/minor/pentacles/five-of-pentacles";
import sixOfPentacles from "../data/cards/minor/pentacles/six-of-pentacles";
import sevenOfPentacles from "../data/cards/minor/pentacles/seven-of-pentacles";
import eightOfPentacles from "../data/cards/minor/pentacles/eight-of-pentacles";
import nineOfPentacles from "../data/cards/minor/pentacles/nine-of-pentacles";
import tenOfPentacles from "../data/cards/minor/pentacles/ten-of-pentacles";
import pageOfPentacles from "../data/cards/minor/pentacles/page-of-pentacles";
import knightOfPentacles from "../data/cards/minor/pentacles/knight-of-pentacles";
import queenOfPentacles from "../data/cards/minor/pentacles/queen-of-pentacles";
import kingOfPentacles from "../data/cards/minor/pentacles/king-of-pentacles";

// Swords (14)
import aceOfSwords from "../data/cards/minor/swords/ace-of-swords";
import twoOfSwords from "../data/cards/minor/swords/two-of-swords";
import threeOfSwords from "../data/cards/minor/swords/three-of-swords";
import fourOfSwords from "../data/cards/minor/swords/four-of-swords";
import fiveOfSwords from "../data/cards/minor/swords/five-of-swords";
import sixOfSwords from "../data/cards/minor/swords/six-of-swords";
import sevenOfSwords from "../data/cards/minor/swords/seven-of-swords";
import eightOfSwords from "../data/cards/minor/swords/eight-of-swords";
import nineOfSwords from "../data/cards/minor/swords/nine-of-swords";
import tenOfSwords from "../data/cards/minor/swords/ten-of-swords";
import pageOfSwords from "../data/cards/minor/swords/page-of-swords";
import knightOfSwords from "../data/cards/minor/swords/knight-of-swords";
import queenOfSwords from "../data/cards/minor/swords/queen-of-swords";
import kingOfSwords from "../data/cards/minor/swords/king-of-swords";

// Wands (14)
import aceOfWands from "../data/cards/minor/wands/ace-of-wands";
import twoOfWands from "../data/cards/minor/wands/two-of-wands";
import threeOfWands from "../data/cards/minor/wands/three-of-wands";
import fourOfWands from "../data/cards/minor/wands/four-of-wands";
import fiveOfWands from "../data/cards/minor/wands/five-of-wands";
import sixOfWands from "../data/cards/minor/wands/six-of-wands";
import sevenOfWands from "../data/cards/minor/wands/seven-of-wands";
import eightOfWands from "../data/cards/minor/wands/eight-of-wands";
import nineOfWands from "../data/cards/minor/wands/nine-of-wands";
import tenOfWands from "../data/cards/minor/wands/ten-of-wands";
import pageOfWands from "../data/cards/minor/wands/page-of-wands";
import knightOfWands from "../data/cards/minor/wands/knight-of-wands";
import queenOfWands from "../data/cards/minor/wands/queen-of-wands";
import kingOfWands from "../data/cards/minor/wands/king-of-wands";

const allCards: TarotCard[] = [
  // Major Arcana
  theFool,
  theMagician,
  theHighPriestess,
  theEmpress,
  theEmperor,
  theHierophant,
  theLovers,
  theChariot,
  strength,
  theHermit,
  wheelOfFortune,
  justice,
  theHangedMan,
  death,
  temperance,
  theDevil,
  theTower,
  theStar,
  theMoon,
  theSun,
  judgement,
  theWorld,
  // Cups
  aceOfCups,
  twoOfCups,
  threeOfCups,
  fourOfCups,
  fiveOfCups,
  sixOfCups,
  sevenOfCups,
  eightOfCups,
  nineOfCups,
  tenOfCups,
  pageOfCups,
  knightOfCups,
  queenOfCups,
  kingOfCups,
  // Pentacles
  aceOfPentacles,
  twoOfPentacles,
  threeOfPentacles,
  fourOfPentacles,
  fiveOfPentacles,
  sixOfPentacles,
  sevenOfPentacles,
  eightOfPentacles,
  nineOfPentacles,
  tenOfPentacles,
  pageOfPentacles,
  knightOfPentacles,
  queenOfPentacles,
  kingOfPentacles,
  // Swords
  aceOfSwords,
  twoOfSwords,
  threeOfSwords,
  fourOfSwords,
  fiveOfSwords,
  sixOfSwords,
  sevenOfSwords,
  eightOfSwords,
  nineOfSwords,
  tenOfSwords,
  pageOfSwords,
  knightOfSwords,
  queenOfSwords,
  kingOfSwords,
  // Wands
  aceOfWands,
  twoOfWands,
  threeOfWands,
  fourOfWands,
  fiveOfWands,
  sixOfWands,
  sevenOfWands,
  eightOfWands,
  nineOfWands,
  tenOfWands,
  pageOfWands,
  knightOfWands,
  queenOfWands,
  kingOfWands,
];

export function getAllCards(): TarotCard[] {
  return allCards;
}

export function getCardById(id: string): TarotCard | undefined {
  return allCards.find((c) => c.id === id);
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getDailyCard(): TarotCard {
  const now = new Date();
  const seed = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const index = hashCode(seed) % allCards.length;
  return allCards[index];
}

export function drawRandomCards(count: number): TarotCard[] {
  const shuffled = [...allCards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
