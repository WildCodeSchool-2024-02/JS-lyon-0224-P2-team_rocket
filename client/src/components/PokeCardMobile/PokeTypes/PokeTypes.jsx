import PropTypes, { bool } from "prop-types";
import noAccentAndToLower from "../../../assets/functions/noAccentAndToLower";
import styles from "./PokeTypes.module.css";

function Poketypes({ pokemons, random, isMobile }) {
  const currentPokemon = pokemons[random];

  return (
    <div className={isMobile ? styles.types_mobile : styles.types_desktop}>
      {currentPokemon.apiTypes.map((type) => (
        <div
          key={type.name}
          className={`${noAccentAndToLower(type.name)}Back typesDiv`}
        >
          <img className={styles.type} src={type.image} alt={type.name} />
          <p>{type.name}</p>
        </div>
      ))}
    </div>
  );
}
Poketypes.propTypes = {
  random: PropTypes.number.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  isMobile: PropTypes.objectOf(bool).isRequired,
};
export default Poketypes;
