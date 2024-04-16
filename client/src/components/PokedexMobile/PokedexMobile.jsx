import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";

function PokedexMobile({ pokemons }) {
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setSelectedPokemon(null);
  };

  const searchPokemon = () => {
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === searchTerm
    );
    setSelectedPokemon(foundPokemon);
  };

  return (
    <div>
      <div className={styles.pokedexCard}>
        {selectedPokemon ? (
          <PokeCardMobile pokemons={[selectedPokemon]} />
        ) : (
          displayedPokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))
        )}

        <ButtonPokedexCard
          pokemons={pokemons}
          setDisplayedPokemons={setDisplayedPokemons}
        />

        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search Pokemon..."
        />
        <button type="button" onClick={searchPokemon}>
          Search
        </button>
      </div>
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
