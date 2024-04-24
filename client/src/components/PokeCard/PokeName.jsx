import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";

function PokeName() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  return (
    <div className="pokeName">
      <h2>{pokemons[random].name}</h2>
      <p>#{pokemons[random].id}</p>
    </div>
  );
}

export default PokeName;
