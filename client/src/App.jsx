






import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import Poke from "./assets/poke";
import PokedexCard from "./components/PokedexCard/PokedexCard";
import Navbar from "./components/Navbar";

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
        <PokedexCard pokemons={pokemons} setPokemons={setPokemons} />
      ) : (
        <p>Lodading Pokemon</p>
      )}
       <PokeCard getPokemon={getPokemon} pokemons={pokemons} />
  <Navbar />
    </main>
  );

}

export default App;
