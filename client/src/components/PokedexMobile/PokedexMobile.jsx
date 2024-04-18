import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";
import SearchBar from "../SearchBar/SearchBar";

function PokedexMobile() {
  const { pokemons } = useOutletContext();
  const { setRandom } = useOutletContext();
  const navigate = useNavigate();

  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const searchPokemon = () => {
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === searchTerm
    );
    setRandom(foundPokemon.id - 1);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
      navigate("/Pokecard");
    }
  };
  return (
    <div>
      <div className={styles.pokedexCard}>
        <SearchBar
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleInputKeyDown={handleInputKeyDown}
          setRandom={setRandom}
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
