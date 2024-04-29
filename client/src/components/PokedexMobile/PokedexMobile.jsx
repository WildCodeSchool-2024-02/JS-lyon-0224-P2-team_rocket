import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";
import useScreenWidth from "../../hooks/useScreenWidth";

function PokedexMobile() {
  const { pokemons } = useOutletContext();
  const { setRandom } = useOutletContext();
  const { random } = useOutletContext();
  const { setIsPokedex } = useOutletContext();
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  const isMobile = useScreenWidth();

  useEffect(() => {
    setIsPokedex(true);
  }, [setIsPokedex]);

  return (
    <div>
      <div
        className={
          isMobile === true ? styles.pokedexCard_mobile : styles.pokedexCard_desktop
        }
      >
        {isMobile === true
          ? displayedPokemons
              .slice(0, 6)
              .map((pokemon) => (
                <Pokemon
                  key={pokemon.id}
                  pokemon={pokemon}
                  setRandom={setRandom}
                  random={random}
                />
              ))
          : displayedPokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                setRandom={setRandom}
                random={random}
              />
            ))}
      </div>
      <ButtonPokedexCard
        pokemons={pokemons}
        setDisplayedPokemons={setDisplayedPokemons}
      />
    </div>
  );
}

export default PokedexMobile;
