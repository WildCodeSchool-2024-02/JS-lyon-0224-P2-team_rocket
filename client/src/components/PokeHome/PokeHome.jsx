import { useState, useEffect } from "react";
import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";
import PokeCard from "../PokeCard/PokeCard";
import poketype from "../../assets/functions/poketypefunction";
import "./PokeHome.css";
import ButtonNextPrev from "../PokeCardMobile/ButtonNextPrev/ButtonNextPrev";
import useScreenWidth from "../../hooks/useScreenWidth";

function Pokecard() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const { setRandom } = useOutletContext();
  const { setIsPokedex } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  const isMobile = useScreenWidth();

  useEffect(() => {
    setIsPokedex(false);
  }, [setIsPokedex]);

  return (
    <div
      id="pokehome"
      className={`${isMobile === false ? typeImgUrl[0].backColor : ""}`}
    >
      <div className="whiteBack">
        {isMobile === true ? (
          <PokeCardMobile />
        ) : (
          <>
            <PokeCard />
            <ButtonNextPrev random={random} setRandom={setRandom} />
          </>
        )}
      </div>
    </div>
  );
}

export default Pokecard;
