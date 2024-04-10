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
        // <div
        //   key={pokemon.id}
        //   // style={{ border: "1px solid red", backgroundColor: "#35DC96" }}
        // >
        //   <img
        //     src={pokemon.image}
        //     alt={pokemon.name}
        //     style={{ width: "100%" }}
        //   />
        //   <h1 className={styles.Blue}>{pokemon.name}</h1>
        //   <button
        //     type="button"
        //     style={{
        //       border: "none",
        //       opacity: "0.40",
        //       height: "24px",
        //       width: "24px",
        //       padding: " 0",
        //       borderRadius: "50%",
        //     }}
        //   >
        //     <img
        //       src="./src/assets/images/Button-Pokedex-mobile.svg"
        //       alt="button-fleche"
        //       // style={{
        //       //   borderRadius: "50%",
        //       // }}
        //     />
        //   </button>
        // </div>
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

    // <>
    //   <img
    //     src={pokemons[index].image}
    //     alt={pokemons[index].name}
    //     style={{ width: "100%" }}
    //   />
    //   <h1 className={styles.Blue}>{pokemons[0].name}</h1>
    // <button type="button">
    //   <img
    //     src="./src/assets/images/Button-PokedexCard-mobile.svg"
    //     alt="button-fleche"
    //   />
    // </button>

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
