import { useState } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";

function Poketypes() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();

  let type = [];

  function typeArray() {
    for (let i = 0; i < pokemons[random].apiTypes.length; i += 1) {
      type[i] = pokemons[random].apiTypes[i];
    }
  }
  typeArray();
  type = type.reverse();

  return (
    <div className="types">
      {type.map((types) => (
        <div
          key={types.name}
          className={`${noAccentAndToLower(types.name)}Back typesDiv`}
        >
          <img className="type" src={types.image} alt={types.name} />
          <p>{types.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Poketypes;
