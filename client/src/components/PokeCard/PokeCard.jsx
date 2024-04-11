import "./PokeCard.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Poketypes from "./pokeType";
import TypeImg from "../../assets/typeImg";

function PokeCard({ getPokemon, pokemons }) {
  const [random, setRandom] = useState(0);
  function GetNewPoke() {
    if (pokemons.length < 2) {
      getPokemon();
    } else {
      setRandom(parseInt(Math.random() * 100, 10));
    }
  }

  let typeImgUrl = [];
  function poketype() {
    let count = 0;
    for (let i = 0; i < pokemons[random].apiTypes.length; i += 1) {
      const type = [];
      type[i] = pokemons[random].apiTypes[i].name;

      for (let j = 0; j < TypeImg.length; j += 1) {
        if (type[i] === TypeImg[j].id) {
          typeImgUrl[count] = TypeImg[j];
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

        <div className="pokeName">
          <h2>{pokemons[random].name}</h2>
          <p>#{pokemons[random].id}</p>
        </div>
        <Poketypes typeImgUrl={typeImgUrl} />
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
      <button className="button" type="button" onClick={GetNewPoke}>
        New Pokemon
      </button>
    </div>
  );
}
PokeCard.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default PokeCard;
