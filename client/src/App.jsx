import { useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const pokemons = useRouteLoaderData("Appli");
  const [currentLocation] = useState("/");

  return (
    <main className="container">
      {currentLocation === "/pokedex" && <PokedexMobile pokemons={pokemons} />}
      {currentLocation === "/" && <PokeCardMobile pokemons={pokemons} />}
      <Navbar />
    </main>
  );
}

export default App;
