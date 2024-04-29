import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./ButtonPokedexCard.module.css";
import BtnNext from "../../assets/images/logo-btn/IconFlecheDroite.png";
import BtnPrevious from "../../assets/images/logo-btn/IconFlecheGauche.png";
import BtnN from "../../assets/images/Btn-next.png";
import BtnP from "../../assets/images/Btn-previous.png";

function ButtonPokedexCard({ pokemons, setDisplayedPokemons }) {
  const [startIndex, setStartIndex] = useState(0);
  const [perPage, setPerPage] = useState(window.innerWidth < 800 ? 6 : 9);
  const isMobile = window.innerWidth < 800;
  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons.slice(startIndex, startIndex + perPage));
    }
  }, [startIndex, pokemons, setDisplayedPokemons, perPage]);

  function handlePrevious() {
    let newIndex = startIndex - perPage;
    if (newIndex < 0) {
      newIndex = Math.floor(pokemons.length / perPage) * perPage;
    }
    setStartIndex(newIndex);
  }

  function handleNext() {
    let newIndex = startIndex + perPage;
    if (newIndex >= pokemons.length) {
      newIndex = 0;
    }
    setStartIndex(newIndex);
  }

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth < 800 ? 6 : 9);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.container_btn}>
      {isMobile ? (
        <button type="button" onClick={handlePrevious} id={styles.btn}>
          <img src={BtnPrevious} alt="icon-btn" />
          Prev
        </button>
      ) : (
        <button
          type="button"
          className={styles.btn_Previous}
          onClick={handlePrevious}
        >
          <img src={BtnP} alt="icon-btn" className={styles.desktopPrevious} />
        </button>
      )}

      {isMobile ? (
        <button type="button" onClick={handleNext} id={styles.btn}>
          Next
          <img src={BtnNext} alt="icon-btn" />
        </button>
      ) : (
        <button
          type="button"
          className={styles.btn_desktop}
          onClick={handleNext}
        >
          <img src={BtnN} alt="icon-btn" className={styles.desktopNext} />
        </button>
      )}
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
