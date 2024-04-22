import { useState } from "react";
import PokeCardMobile from "../PokeCardMobile/PokeCardMobile";
import PokeCard from "../PokeCard/PokeCard";

function Pokecard() {
  const [isMobile] = useState(window.innerWidth < 800);

  return <div>{isMobile === true ? <PokeCardMobile /> : <PokeCard />}</div>;
}

export default Pokecard;
