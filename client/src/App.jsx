import { useRouteLoaderData, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const pokemonsData = useRouteLoaderData("Appli");

  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState(pokemonsData);
  const [random, setRandom] = useState(0);
  const [isPokedex, setIsPokedex] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [pokematch, setPokematch] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    let count = 0;
    const poke = [];
    pokemons.forEach((element) => {
      if (element.name.toLowerCase().includes(event.target.value) === true) {
        poke[count] = { name: element.name, id: element.id };
        count += 1;
      }
    });
    setPokematch(poke);
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
      setSearchTerm("");
    }
  };

  return (
    <main className="container">
      <SearchBar
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleInputKeyDown={handleInputKeyDown}
        setRandom={setRandom}
        pokemons={pokemons}
        random={random}
        isPokedex={isPokedex}
        setIsPokedex={setIsPokedex}
        setSearchTerm={setSearchTerm}
        pokematch={pokematch}
      />
      <Outlet
        context={{
          pokemons,
          setPokemons,
          random,
          setRandom,
          setIsPokedex,
          isPokedex,
        }}
      />
      <Navbar />
    </main>
  );
}

export default App;
