import "./PokeCard.scss";
import PropTypes from "prop-types";
import Poketypes from "./pokeType";
import TypeImg from "../../assets/typeImg";

let random = 0;
function PokeCard({ getPokemon, pokemons }) {
  function GetNewPoke() {
    getPokemon();
    random = parseInt(Math.random() * 100, 10);
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
            className="pokemon"
            src={pokemons[random].image}
            alt={pokemons[random].name}
          />
        </div>
        <div className="pokeName">
          <h2>{pokemons[random].name}</h2>
          <p>#{pokemons[random].id}</p>
        </div>
        <Poketypes typeImgUrl={typeImgUrl} />
        <div className="center">
          <div id="stats" className={typeImgUrl[0].color}>
            <p className="stat">HP : {pokemons[random].stats.HP}</p>
            <p className="stat">Attaque : {pokemons[random].stats.attack}</p>
            <p className="stat">Defense : {pokemons[random].stats.defense}</p>
            <p className="stat">Speed : {pokemons[random].stats.speed} </p>
          </div>
        </div>
      </div>
      <button type="button" onClick={GetNewPoke}>
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
