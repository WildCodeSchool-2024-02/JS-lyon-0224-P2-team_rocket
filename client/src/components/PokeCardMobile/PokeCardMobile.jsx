import "./PokeCardMobile.css";
import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import poketype from "../../assets/functions/poketypefunction";
import ButtonNextPrev from "./ButtonNextPrev/ButtonNextPrev";
import StatsPoke from "../Stats/StatsPoke";
import PokeName from "../PokeCard/PokeName";
import "../../App.css";
import CardImg from "../PokeCard/CardImg";
import Poketypes from "./PokeTypes/PokeTypes";

function PokeCardMobile(isMobile) {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);

  return (
    <div id="container">
      <div id="pokeCard">
        <div id="pokemonImg" className={typeImgUrl[0].backColor}>
          <CardImg />
        </div>
        <ButtonNextPrev random={random} setRandom={setRandom} />
        <PokeName />
        <Poketypes pokemons={pokemons} random={random} isMobile={isMobile} />
        <div className="center">
          <StatsPoke
            pokemons={pokemons}
            random={random}
            typeImgUrl={typeImgUrl}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

export default PokeCardMobile;
