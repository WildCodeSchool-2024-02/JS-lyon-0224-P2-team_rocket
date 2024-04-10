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
import grassSvg from "./images/back/grass.svg";
// import blueBack from "./images/color/blue.png";
// import greenBack from "./images/color/green.png";

const TypeImg = [
  {
    id: "Plante",
    typeImg: typeGrass,
    color: "green",
    cardBack: grassSvg,
    backColor: "blueBack",
  },
  {
    id: "Insecte",
    typeImg: typeInsecte,
    color: "green",
    backColor: "greenBack",
  },
  { id: "Dragon", typeImg: "Pokemon_Type_Icon_Dragon.png" },
  {
    id: "Electrique",
    typeImg: typeElec,
    color: "yellow",
    backColor: "yellowBack",
  },
  { id: "Fée", typeImg: typeFee, color: "pink", backColor: "pinkBack" },
  { id: "Combat", typeImg: typeCombat, color: "red", backColor: "orangeBack" },
  {
    id: "Poison",
    typeImg: typePoison,
    color: "purple",
    backColor: "purpleBack",
  },
  {
    id: "Eau",
    typeImg: typeEau,
    color: "blue",
    backColor: "blueBack",
  },
  { id: "Feu", typeImg: typeFeu, color: "red", backColor: "orangeBack" },
  { id: "Vol", typeImg: typeVol, color: "lightBlue", backColor: "yellowBack" },
  { id: "Glace", typeImg: typeGlace, color: "25fde9", backColor: "blueBack" },
  { id: "Psy", typeImg: typePsy, color: "f2c76e", backColor: "purpleBack" },
  { id: "Sol", typeImg: typeSol, color: "ffa519", backColor: "yellowBack" },
  {
    id: "Pierre",
    typeImg: typePierre,
    color: "faf893",
    backColor: "yellowBack",
  },
];

export default TypeImg;
