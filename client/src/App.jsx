import axios from "axios";
import { useEffect, useState } from "react";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
import Poke from "./assets/poke";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [pokemons, setPokemons] = useState(Poke);

  const getPokemon = () => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((response) => {
        setPokemons(response.data);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <main className="container">
      {pokemons.length > 0 ? (
        <PokedexMobile pokemons={pokemons} setPokemons={setPokemons} />
      ) : (
        <p>Loading Pokemon</p>
      )}
      <PokeCardMobile getPokemon={getPokemon} pokemons={pokemons} />

      <Navbar />
    </main>
  );
}

export default App;
