import { useState, useEffect } from "react";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeHome.css";

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
    <div id="pokehome">
      {isMobile === true ? (
        <PokeCardMobile />
      ) : (
        <PokeCard isMobile={isMobile} />
      )}
    </div>
  );
}

export default Pokecard;
