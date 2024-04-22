import "./PokeCardMobile.css";
import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import Poketypes from "./PokeTypes";
import typeImg from "../../assets/typeImg";
import ButtonNextPrev from "./ButtonNextPrev/ButtonNextPrev";
import StatsPoke from "../Stats/StatsPoke";
import "../../App.css";

function PokeCardMobile() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);

  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();
  let typeImgUrl = [];

  function poketype() {
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
  }

  poketype();
  return (
    <div id="container">
      <div id="pokeCard">
        <div id="pokemonImg" className={typeImgUrl[0].backColor}>
          <img
            id="pokemon"
            src={pokemons[random].image}
            alt={pokemons[random].name}
          />
          <img
            className="typeSvg"
            alt={typeImgUrl[0].id}
            src={typeImgUrl[0].cardBack}
          />
        </div>
        <ButtonNextPrev random={random} setRandom={setRandom} />
        <div className="pokeName">
          <h2>{pokemons[random].name}</h2>
          <p>#{pokemons[random].id}</p>
        </div>
        <Poketypes pokemons={pokemons} random={random} />
        <div className="center">
          <StatsPoke
            pokemons={pokemons}
            random={random}
            typeImgUrl={typeImgUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default PokeCardMobile;
