import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";
import SearchBar from "../SearchBar/SearchBar";

function PokedexMobile() {
  const { pokemons } = useOutletContext();
  const { setRandom } = useOutletContext();
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  const [setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
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
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
    }
  };
  return (
    <div>
      <div className={styles.pokedexCard}>
        <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleInputKeyDown={handleInputKeyDown}
        />

        {displayedPokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} setRandom={setRandom} />
        ))}

        <ButtonPokedexCard
          pokemons={pokemons}
          setDisplayedPokemons={setDisplayedPokemons}
        />
      </div>
    </div>
  );
}

export default PokedexMobile;
