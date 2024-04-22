import { useState, useEffect } from "react";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";
import PokeCard from "../PokeCard/PokeCard";
import styles from "./PokeHome.module.css";

function Pokecard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

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
    <div
      className={isMobile ? styles.pokeHomemobile : styles.pokedexCard_desktop}
    >
      {isMobile === true ? <PokeCardMobile /> : <PokeCard />}
    </div>
  );
}

export default Pokecard;
