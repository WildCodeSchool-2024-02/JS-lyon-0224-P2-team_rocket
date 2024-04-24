import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import PokeName from "./PokeName";
import Poketypes from "../PokeCardMobile/PokeTypes/PokeTypes";
import StatsPoke from "../Stats/StatsPoke";
import CardImg from "./CardImg";
import poketype from "../../assets/functions/poketypefunction";
import "./PokeCard.css";

function PokeCard({ isMobile }) {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();

  const typeImgUrl = poketype(pokemons, random);
  return (
    <div className={`pokeCard ${typeImgUrl[0].color}`}>
      <div id="text">
        <div className="nameAndTypes">
          <PokeName />
          <Poketypes />
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
PokeCard.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
