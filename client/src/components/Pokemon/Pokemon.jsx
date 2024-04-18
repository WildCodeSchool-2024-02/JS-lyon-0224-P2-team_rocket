import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";
import styles from "./Pokemon.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";

function Pokemon({ pokemon, setRandom }) {
  const lastType = pokemon.apiTypes.length - 1;
  let typePokemonClass = pokemon.apiTypes[lastType].name;
  typePokemonClass = noAccentAndToLower(typePokemonClass);

  return (
    <div
      className={`${styles.containerInfo} ${styles[typePokemonClass]}`}
      key={pokemon.id}
    >
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%" }} />
      <div className={styles.pokeInfo}>
        <h1>{pokemon.name}</h1>
        <Link to="/pokecard">
          <button
            className={styles.btnPokecard}
            type="button"
            onClick={() => setRandom(pokemon.id - 1)}
          >
            <img src={Btn} alt="button-fleche" className={styles.imgBtn} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  setRandom: PropTypes.func.isRequired,
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
