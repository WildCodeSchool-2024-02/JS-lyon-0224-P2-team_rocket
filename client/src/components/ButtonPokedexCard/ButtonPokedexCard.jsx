import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./ButtonPokedexCard.module.css";
import BtnNext from "../../assets/images/logo-btn/IconFlecheDroite.png";
import BtnPrev from "../../assets/images/logo-btn/IconFlecheGauche.png";

function ButtonPokedexCard({ pokemons, setDisplayedPokemons }) {
  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons.slice(startIndex, startIndex + 6));
    }
  }, [startIndex, pokemons, setDisplayedPokemons]);

  function handlePrevious() {
    let newIndex = startIndex - 6;
    if (newIndex < 0) {
      newIndex = Math.floor(pokemons.length / 6) * 6;
    }
    setStartIndex(newIndex);
  }

  function handleNext() {
    let newIndex = startIndex + 6;
    if (newIndex >= pokemons.length) {
      newIndex = 0;
    }
    setStartIndex(newIndex);
  }
  return (
    <div className={styles.container_btn}>
      <button type="button" onClick={handlePrevious} id={styles.btn}>
        <img src={BtnPrev} alt="icon-btn" />
        Prev
      </button>
      <button type="button" onClick={handleNext} id={styles.btn}>
        Next
        <img src={BtnNext} alt="icon-btn" />
      </button>
    </div>
  );
}

export default ButtonPokedexCard;

ButtonPokedexCard.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setDisplayedPokemons: PropTypes.func.isRequired,
};
