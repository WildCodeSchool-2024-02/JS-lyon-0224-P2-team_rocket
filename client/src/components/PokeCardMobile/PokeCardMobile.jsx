import PropTypes from "prop-types";

import styles from "./PokeCardMobile.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";

function PokeCardMobile({ pokemon }) {
  return (
    <div className={styles.containerInfo} key={pokemon.id}>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
      <div className={styles.pokeButton}>
        <h1>{pokemon.name}</h1>
        <button
          type="button"
          style={{
            border: "none",
            backgroundColor: "transparent",
            padding: "0",

            height: "24px",
            width: "24px",
            borderRadius: "50%",
          }}
        >
          <img
            src={Btn}
            alt="button-fleche"
            style={{ height: "24px", width: "24px" }}
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
