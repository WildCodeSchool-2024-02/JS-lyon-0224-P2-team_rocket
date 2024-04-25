import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import noAccentAndToLower from "../../../assets/functions/noAccentAndToLower";
import styles from "./PokeTypes.module.css";

function Poketypes({ pokemons, random }) {
  const currentPokemon = pokemons[random];
  const [isMobile, setIsmobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
};
export default Poketypes;
