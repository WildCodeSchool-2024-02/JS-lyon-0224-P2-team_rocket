import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./PokedexMobile.module.css";
import Pokemon from "../Pokemon/Pokemon";
import ButtonPokedexCard from "../ButtonPokedexCard/ButtonPokedexCard";

function PokedexMobile() {
  const { pokemons } = useOutletContext();
  const { setRandom } = useOutletContext();
  const { random } = useOutletContext();
  const { setIsPokedex } = useOutletContext();
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    setIsPokedex(true);
  }, [setIsPokedex]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={
          isMobile === true ? styles.pokedexCard_mobile : styles.pokedexCard_desktop
        }
      >
        {displayedPokemons.map((pokemon) => (
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
