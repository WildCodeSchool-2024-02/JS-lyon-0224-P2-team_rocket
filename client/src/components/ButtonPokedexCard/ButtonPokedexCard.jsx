import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ButtonPokedexCard({ pokemons, setDisplayedPokemons }) {
  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    if (pokemons.length > 0) {
      setDisplayedPokemons(pokemons.slice(startIndex, startIndex + 6));
    }
  }, [startIndex, pokemons, setDisplayedPokemons]);

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
    <div style={{ border: "2px purple solid" }}>
      <button type="button" onClick={handlePrevious}>
        Previous
      </button>
      <button type="button" onClick={handleNext}>
        Next
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
