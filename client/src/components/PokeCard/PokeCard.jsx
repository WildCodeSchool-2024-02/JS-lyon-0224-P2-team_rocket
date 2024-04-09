import "./PokeCard.scss";
import PropTypes from "prop-types";

let random = 0;
function PokeCard({ getPokemon, pokemons }) {
  function GetNewPoke() {
    getPokemon();
    random = parseInt(Math.random() * 100, 10);
  }

  return (
    <div id="container">
      <div id="pokeCard">
        <div className="pokemonImg">
          <img src={pokemons[random].image} alt={pokemons[random].name} />
        </div>
        <div className="pokeName">
          <h2>{pokemons[random].name}</h2>
          <p>#{pokemons[random].id}</p>
        </div>
        <div className="types">
          <p>{pokemons[random].apiTypes[0].name}</p>
        </div>
        <div className="stats">
          <p>HP : {pokemons[random].stats.HP}</p>
          <p>Attaque : {pokemons[random].stats.attack}</p>
          <p>Defense : {pokemons[random].stats.defense}</p>
          <p>Speed : {pokemons[random].stats.speed} </p>
        </div>
        <button type="button" onClick={GetNewPoke}>
          New Pokemon
        </button>
      </div>
    </div>
  );
}
PokeCard.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  pokemons: PropTypes.objectOf().isRequired,
};
export default PokeCard;
