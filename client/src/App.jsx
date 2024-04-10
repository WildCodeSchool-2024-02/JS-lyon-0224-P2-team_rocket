import "./App.css";
import axios from "axios";
import { useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import Poke from "./assets/poke";

function App() {
  const [pokemons, setPokemons] = useState(Poke);
  const getPokemon = () => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((response) => {
        setPokemons(response.data);
      });
  };
  if (pokemons.length < 2) {
    setTimeout(() => getPokemon(), 10);
  }

  return (
    <main className="container">
      <PokeCard getPokemon={getPokemon} pokemons={pokemons} />
    </main>
  );
}

export default App;
