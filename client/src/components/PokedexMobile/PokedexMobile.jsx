import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";

function PokedexMobile({ pokemons }) {
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  return (
    <div className={styles.pokedexCard}>
      {displayedPokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}

      <ButtonPokedexCard
        pokemons={pokemons}
        setDisplayedPokemons={setDisplayedPokemons}
      />
    </div>
  );
}

PokedexMobile.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokedexMobile;