import { useState, useEffect } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PokeName from "./PokeName";
import Poketypes from "../PokeCardMobile/PokeTypes/PokeTypes";
import StatsPoke from "../Stats/StatsPoke";
import CardImg from "./CardImg";
import poketype from "../../assets/functions/poketypefunction";
import "./PokeCard.css";

function PokeCard() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  const [isMobile, setIsmobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
