import { useRouteLoaderData, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const pokemonsData = useRouteLoaderData("Appli");

  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState(pokemonsData);
  const [random, setRandom] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const searchPokemon = () => {
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === searchTerm
    );
    setRandom(foundPokemon.id - 1);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
      navigate("/Pokecard");
    }
  };
  return (
    <main className="container">
      <SearchBar
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleInputKeyDown={handleInputKeyDown}
        setRandom={setRandom}
      />
      <Outlet context={{ pokemons, setPokemons, random, setRandom }} />
      <Navbar />
    </main>
  );
}

export default App;
