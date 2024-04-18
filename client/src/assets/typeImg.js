import typeGrass from "./images/types/Grass@2x.png";
import typePoison from "./images/types/Poison@2x.png";
import typeCombat from "./images/types/Fight@2x.png";
import typeInsecte from "./images/types/Bug@2x.png";
import typeFee from "./images/types/Fairy@2x.png";
import typeElec from "./images/types/Electric@2x.png";
import typeEau from "./images/types/Water@2x.png";
import typeFeu from "./images/types/Fire@2x.png";
import typeVol from "./images/types/Flying@2x.png";
import typeGlace from "./images/types/Ice@2x.png";
import typePsy from "./images/types/Psychic@2x.png";
import typeSol from "./images/types/Ground@2x.png";
import typePierre from "./images/types/Rock@2x.png";
import typeSpectre from "./images/types/Ghost@2x.png";
import typeNormal from "./images/types/Normal@2x.png";
import grassSvg from "./images/back/grass.svg";
import bugSvg from "./images/back/bug.svg";
import dragonSvg from "./images/back/dragon.svg";
import electricSvg from "./images/back/electric.svg";
import fairySvg from "./images/back/fairy.svg";
import fightSvg from "./images/back/fighting.svg";
import poisonSvg from "./images/back/poison.svg";
import waterSvg from "./images/back/water.svg";
import fireSvg from "./images/back/fire.svg";
import flyingSvg from "./images/back/flying.svg";
import iceSvg from "./images/back/ice.svg";
import psychicSvg from "./images/back/psychic.svg";
import groundSvg from "./images/back/ground.svg";
import rockSvg from "./images/back/rock.svg";
import ghostSvg from "./images/back/ghost.svg";
import normalSvg from "./images/back/normal.svg";
import tenebreSvg from "./images/back/tenebre.png";

const typeImg = [
  {
    id: "Plante",
    typeImg: typeGrass,
    color: "plante",
    backColor: "planteBack",
    cardBack: grassSvg,
  },
  {
    id: "Insecte",
    typeImg: typeInsecte,
    color: "insecte",
    backColor: "insecteBack",
    cardBack: bugSvg,
  },
  {
    id: "Dragon",
    typeImg: "Pokemon_Type_Icon_Dragon.png",
    color: "dragon",
    backColor: "dragonBack",
    cardBack: dragonSvg,
  },
  {
    id: "Électrik",
    typeImg: typeElec,
    color: "elec",
    backColor: "electrikBack",
    cardBack: electricSvg,
  },
  {
    id: "Fée",
    typeImg: typeFee,
    color: "fee",
    backColor: "feeBack",
    cardBack: fairySvg,
  },
  {
    id: "Combat",
    typeImg: typeCombat,
    color: "combat",
    backColor: "combatBack",
    cardBack: fightSvg,
  },
  {
    id: "Poison",
    typeImg: typePoison,
    color: "poison",
    backColor: "poisonBack",
    cardBack: poisonSvg,
  },
  {
    id: "Eau",
    typeImg: typeEau,
    color: "eau",
    backColor: "eauBack",
    cardBack: waterSvg,
  },
  {
    id: "Feu",
    typeImg: typeFeu,
    color: "feu",
    backColor: "feuBack",
    cardBack: fireSvg,
  },
  {
    id: "Vol",
    typeImg: typeVol,
    color: "vol",
    backColor: "volBack",
    cardBack: flyingSvg,
  },
  {
    id: "Glace",
    typeImg: typeGlace,
    color: "glace",
    backColor: "glaceBack",
    cardBack: iceSvg,
  },
  {
    id: "Psy",
    typeImg: typePsy,
    color: "psy",
    backColor: "psyBack",
    cardBack: psychicSvg,
  },
  {
    id: "Sol",
    typeImg: typeSol,
    color: "sol",
    backColor: "solBack",
    cardBack: groundSvg,
  },
  {
    id: "Roche",
    typeImg: typePierre,
    color: "roche",
    backColor: "rocheBack",
    cardBack: rockSvg,
  },
  {
    id: "Spectre",
    typeImg: typeSpectre,
    color: "spectre",
    backColor: "spectreBack",
    cardBack: ghostSvg,
  },
  {
    id: "Normal",
    typeImg: typeNormal,
    color: "normal",
    backColor: "normalBack",
    cardBack: normalSvg,
  },
  {
    id: "Ténèbre",
    color: "tenebre",
    backColor: "tenebreBack",
    cardBack: tenebreSvg,
  },
];

export default typeImg;
