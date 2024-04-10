import PropTypes from "prop-types";

import styles from "./PokeCardMobile.module.css";

function PokeCardMobile({ pokemon }) {
  return (
    <div
      className={styles.containerInfo}
      key={pokemon.id}
      // style={{ border: "1px solid red", backgroundColor: "#35DC96" }}
    >
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
      <div className={styles.pokeButton}>
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
            // style={{
            //   borderRadius: "50%",
            // }}
          />
        </button>
      </div>
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
