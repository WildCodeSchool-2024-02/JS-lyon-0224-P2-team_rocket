import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PokeName from "./PokeName";
import Poketypes from "../PokeCardMobile/PokeTypes/PokeTypes";
import StatsPoke from "../Stats/StatsPoke";
import CardImg from "./CardImg";
import poketype from "../../assets/functions/poketypefunction";
import "./PokeCard.css";
import useScreenWidth from "../../hooks/useScreenWidth";

function PokeCard() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  const isMobile = useScreenWidth();

  return (
    <div className={`pokeCard ${typeImgUrl[0].color}`}>
      <div id="text">
        <div className="nameAndTypes">
          <PokeName />
          <Poketypes pokemons={pokemons} random={random} isMobile={isMobile} />
        </div>
        <StatsPoke isMobile={isMobile} />
      </div>
      <div id="pokemonImg">
        <CardImg />
      </div>
    </div>
  );
}

export default PokeCard;
