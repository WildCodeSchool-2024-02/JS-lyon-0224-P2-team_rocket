import "./PokeCardMobile.css";
import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import Poketypes from "./PokeTypes";
import poketype from "../../assets/functions/poketypefunction";
import ButtonNextPrev from "./ButtonNextPrev/ButtonNextPrev";
import StatsPoke from "../Stats/StatsPoke";
import PokeName from "../PokeCard/PokeName";
import "../../App.css";

function PokeCardMobile() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();

  const typeImgUrl = poketype(pokemons, random);

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
        <PokeName />
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
