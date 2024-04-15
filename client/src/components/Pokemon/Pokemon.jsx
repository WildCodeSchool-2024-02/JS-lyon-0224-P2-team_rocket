import PropTypes from "prop-types";

import styles from "./Pokemon.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";

function Pokemon({ pokemon }) {
  const lastType = pokemon.apiTypes.length - 1;
  const typePokemonClass = pokemon.apiTypes[lastType].name.toLowerCase();
  return (
    <div
      className={`${styles.containerInfo} ${styles[typePokemonClass]}`}
      key={pokemon.id}
    >
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
      <div className={styles.pokeInfo}>
        <h1>{pokemon.name}</h1>
        <button className={styles.btnPokecard} type="button">
          <img src={Btn} alt="button-fleche" className={styles.imgBtn} />
        </button>
      </div>
    </div>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    apiTypes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
