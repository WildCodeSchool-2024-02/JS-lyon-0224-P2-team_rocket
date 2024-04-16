import PropTypes from "prop-types";

function Poketypes({ pokemons, random }) {
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
          className={`${types.name.toLowerCase()}Back typesDiv`}
        >
          <img className="type" src={types.image} alt={types.name} />
          <p>{types.name}</p>
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
