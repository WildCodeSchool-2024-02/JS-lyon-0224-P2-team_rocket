import "./PokeCardMobile.css";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import Poketypes from "./PokeTypes";
import typeImg from "../../assets/typeImg";
import ButtonNextPrev from "./ButtonNextPrev/ButtonNextPrev";

import "../../App.css";

function PokeCardMobile() {
  const pokemonsData = useRouteLoaderData("pokeCard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();

  function getNewPoke() {
    setRandom(parseInt(Math.random() * 100, 10));
  }

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
          <div id="stats" className={typeImgUrl[0].color}>
            <span className="stat">
              <h3>HP</h3>
              <p>{pokemons[random].stats.HP}</p>
            </span>
            <span className="stat">
              <h3>Attaque</h3>
              <p>{pokemons[random].stats.attack}</p>
            </span>
            <span className="stat">
              <h3>Defense</h3>
              <p>{pokemons[random].stats.defense}</p>
            </span>
            <span className="stat">
              <h3>Speed</h3>
              <p>{pokemons[random].stats.speed} </p>
            </span>
          </div>
        </div>
      </div>
      <button className="button" type="button" onClick={getNewPoke}>
        New Pokemon
      </button>
    </div>
  );
}

export default PokeCardMobile;
