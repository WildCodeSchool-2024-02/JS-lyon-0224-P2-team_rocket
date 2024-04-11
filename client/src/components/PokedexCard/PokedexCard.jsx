import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PokedexCard.module.css";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";

import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";

function PokedexCard({ pokemons }) {
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  return (
    <div className={styles.pokedexCard}>
      {displayedPokemons.map((pokemon) => (
        <PokeCardMobile key={pokemon.id} pokemon={pokemon} />
      ))}

      <ButtonPokedexCard
        pokemons={pokemons}
        setDisplayedPokemons={setDisplayedPokemons}
      />
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
