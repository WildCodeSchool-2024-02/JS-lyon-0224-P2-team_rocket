import PropTypes from "prop-types";

function PokeCardMobile({ pokemon }) {
  return (
    <div key={pokemon.id}>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
      <h1>{pokemon.name}</h1>
      <button
        type="button"
        style={{
          border: "none",
          opacity: "0.40",
          height: "24px",
          width: "24px",
          padding: " 0",
          borderRadius: "50%",
        }}
      >
        <img
          src="./src/assets/images/Button-Pokedex-mobile.svg"
          alt="button-fleche"
        />
      </button>
    </div>
  );
}

export default PokeCardMobile;

PokeCardMobile.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
