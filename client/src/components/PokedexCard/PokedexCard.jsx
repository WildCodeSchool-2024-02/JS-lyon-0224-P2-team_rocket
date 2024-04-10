import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PokedexCard.module.css";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";

function PokedexCard({ pokemons }) {
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons.slice(startIndex, startIndex + 6));
    }
  }, [startIndex, pokemons]);

  function handlePrevious() {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  }

  function handleNext() {
    if (startIndex + 6 <= pokemons.length) {
      setStartIndex(startIndex + 6);
    }
  }
  return (
    <div className={styles.pokedexCard}>
      {displayedPokemons.map((pokemon) => (
        <PokeCardMobile key={pokemon.id} pokemon={pokemon} />
      ))}
      <div style={{ border: "2px purple solid" }}>
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

PokedexCard.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokedexCard;
