import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import PokeCard from "./components/PokeCard";
import PokedexCard from "./components/PokedexCard/PokedexCard";

function App() {
  const [pokemons, setPokemons] = useState([]);

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
    </main>
  );
}

export default App;
