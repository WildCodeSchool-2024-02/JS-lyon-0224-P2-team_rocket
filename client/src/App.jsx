import axios from "axios";
import { useEffect, useState } from "react";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
import Poke from "./assets/poke";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
// import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
// import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  const [pokemons, setPokemons] = useState(Poke);
  const [currentLocation, setCurrentLocation] = useState("/");
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
      {/* {pokemons.length > 0 ? (
        <PokedexMobile pokemons={pokemons} setPokemons={setPokemons} />
      ) : (
        <p>Lodading Pokemon</p>
      )}
      <PokeCardMobile getPokemon={getPokemon} pokemons={pokemons} /> */}
      {/* <Navbar
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
      /> */}
      {currentLocation === "/" && <PokedexMobile pokemons={pokemons} />}
      {currentLocation === "/pokemon" && (
        <PokeCardMobile getPokemon={getPokemon} pokemons={pokemons} />
      )}

      {currentLocation === "/about" && <About />}
      <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          PokeDexMobile
        </button>

        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>

        <button onClick={() => setCurrentLocation("/pokemon")} type="button">
          Pokemon
        </button>
      </nav>
      <main>
        {/* {currentLocation === "/pokemon" && (
          <PokCardMobile getPokemon={getPokemon} pokemons={pokemons} />
        )} */}
      </main>
    </main>
  );
}

export default App;
