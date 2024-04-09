import "./App.css";
import axios from "axios";
import { useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokemons, setPokemons] = useState();
  const getPokemon = () => {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((response) => {
        setPokemons(response.data);
      });
  };

  return (
    <main className="container">
      <PokeCard getPokemon={getPokemon} pokemons={setPokemons} />

      {/* Travail à effacer */}
      {pokemons}
    </main>
  );
}

export default App;