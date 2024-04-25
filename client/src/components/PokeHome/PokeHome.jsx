import { useState, useEffect } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";
import PokeCard from "../PokeCard/PokeCard";
import poketype from "../../assets/functions/poketypefunction";
import "./PokeHome.css";
import ButtonNextPrev from "../PokeCardMobile/ButtonNextPrev/ButtonNextPrev";

function Pokecard() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();
  const { setIsPokedex } = useOutletContext();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const typeImgUrl = poketype(pokemons, random);

  useEffect(() => {
    setIsPokedex(false);
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
    <div
      id="pokehome"
      className={`${isMobile === false ? typeImgUrl[0].backColor : ""}`}
    >
      <div className="whiteBack">
        {isMobile === true ? (
          <PokeCardMobile isMobile={isMobile} />
        ) : (
          <>
            <PokeCard isMobile={isMobile} />
            <ButtonNextPrev random={random} setRandom={setRandom} />
          </>
        )}
      </div>
    </div>
  );
}

export default Pokecard;
