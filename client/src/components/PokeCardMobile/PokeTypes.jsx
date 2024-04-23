import PropTypes from "prop-types";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";

function Poketypes({ pokemons, random }) {
  const currentPokemon = pokemons[random];

  return (
    <div className="types">
      {currentPokemon.apiTypes.map((type) => (
        <div
          key={type.name}
          className={`${noAccentAndToLower(type.name)}Back typesDiv`}
        >
          <img className="type" src={type.image} alt={type.name} />
          <p>{type.name}</p>
        </div>
      ))}
    </div>
  );
}
Poketypes.propTypes = {
  random: PropTypes.number.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default Poketypes;
