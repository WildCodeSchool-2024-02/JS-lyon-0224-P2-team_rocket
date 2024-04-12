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

const typeImg = [
  {
    id: "Plante",
    typeImg: typeGrass,
    color: "green",
    backColor: "greenBack",
    cardBack: grassSvg,
  },
  {
    id: "Insecte",
    typeImg: typeInsecte,
    color: "green",
    backColor: "greenBack",
    cardBack: bugSvg,
  },
  {
    id: "Dragon",
    typeImg: "Pokemon_Type_Icon_Dragon.png",
    color: "blue",
    backColor: "orangeBack",
    cardBack: dragonSvg,
  },
  {
    id: "Électrik",
    typeImg: typeElec,
    color: "yellow",
    backColor: "yellowBack",
    cardBack: electricSvg,
  },
  {
    id: "Fée",
    typeImg: typeFee,
    color: "pink",
    backColor: "pinkBack",
    cardBack: fairySvg,
  },
  {
    id: "Combat",
    typeImg: typeCombat,
    color: "orange",
    backColor: "orangeBack",
    cardBack: fightSvg,
  },
  {
    id: "Poison",
    typeImg: typePoison,
    color: "purple",
    backColor: "purpleBack",
    cardBack: poisonSvg,
  },
  {
    id: "Eau",
    typeImg: typeEau,
    color: "blue",
    backColor: "blueBack",
    cardBack: waterSvg,
  },
  {
    id: "Feu",
    typeImg: typeFeu,
    color: "orange",
    backColor: "orangeBack",
    cardBack: fireSvg,
  },
  {
    id: "Vol",
    typeImg: typeVol,
    color: "yellow",
    backColor: "yellowBack",
    cardBack: flyingSvg,
  },
  {
    id: "Glace",
    typeImg: typeGlace,
    color: "blue",
    backColor: "blueBack",
    cardBack: iceSvg,
  },
  {
    id: "Psy",
    typeImg: typePsy,
    color: "purple",
    backColor: "purpleBack",
    cardBack: psychicSvg,
  },
  {
    id: "Sol",
    typeImg: typeSol,
    color: "orange",
    backColor: "yellowBack",
    cardBack: groundSvg,
  },
  {
    id: "Roche",
    typeImg: typePierre,
    color: "yellow",
    backColor: "yellowBack",
    cardBack: rockSvg,
  },
  {
    id: "Spectre",
    typeImg: typeSpectre,
    color: "blue",
    backColor: "blueBack",
    cardBack: ghostSvg,
  },
  {
    id: "Normal",
    typeImg: typeNormal,
    color: "yellow",
    backColor: "yellowBack",
    cardBack: normalSvg,
  },
];

export default typeImg;
