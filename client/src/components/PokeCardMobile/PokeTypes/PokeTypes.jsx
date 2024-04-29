import PropTypes from "prop-types";
import noAccentAndToLower from "../../../assets/functions/noAccentAndToLower";
import styles from "./PokeTypes.module.css";
import useScreenWidth from "../../../hooks/useScreenWidth";

function Poketypes({ pokemons, random }) {
  const currentPokemon = pokemons[random];
  const isMobile = useScreenWidth();

  return (
    <div
      className={isMobile === true ? styles.types_mobile : styles.types_desktop}
    >
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
};
export default Poketypes;
