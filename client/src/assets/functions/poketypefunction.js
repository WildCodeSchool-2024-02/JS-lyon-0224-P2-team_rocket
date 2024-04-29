import typeImg from "../typeImg";

function poketype(pokemons, random) {
  let typeImgUrl = [];
  let count = 0;
  for (let i = 0; i < pokemons[random].apiTypes.length; i += 1) {
    const type = [];
    type[i] = pokemons[random].apiTypes[i].name;

    for (let j = 0; j < typeImg.length; j += 1) {
      if (type[i] === typeImg[j].id) {
        typeImgUrl[count] = typeImg[j];
        count += 1;
      }
    }
    typeImgUrl = typeImgUrl.reverse();
  }
  return typeImgUrl;
}

export default poketype;
