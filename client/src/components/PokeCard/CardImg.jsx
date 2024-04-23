import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import poketype from "../../assets/functions/poketypefunction";

function CardImg() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  return (
    <>
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
    </>
  );
}

export default CardImg;
