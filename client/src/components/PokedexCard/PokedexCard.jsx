import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PokedexCard.module.css";

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
    <>
      {displayedPokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <img
            src={pokemon.image}
            alt={pokemon.name}
            style={{ width: "100%" }}
          />
          <h1 className={styles.Blue}>{pokemon.name}</h1>
        </div>
      ))}

      <button type="button" onClick={handlePrevious}>
        Previous
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
    // <>
    //   <img
    //     src={pokemons[index].image}
    //     alt={pokemons[index].name}
    //     style={{ width: "100%" }}
    //   />
    //   <h1 className={styles.Blue}>{pokemons[0].name}</h1>
    //   <button type="button">
    //     <img
    //       src="./src/assets/images/Button-PokedexCard-mobile.svg"
    //       alt="button-fleche"
    //     />
    //   </button>

    //   {/* <button type="button" onClick={getPokemon}>
    //     GetPokemon
    //   </button> */}
    // </>
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
