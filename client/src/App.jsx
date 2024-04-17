// import axios from "axios";
// import { useState } from "react";
import { useState } from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
// import Poke from "./assets/poke";
// import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
// import About from "./components/About/About";
// import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  // const [pokemons, setPokemons] = useState(Poke);
  // const [currentLocation, setCurrentLocation] = useState("/");
  // const getPokemon = () => {
  //   axios
  //     .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
  //     .then((response) => {
  //       setPokemons(response.data);
  //     });
  // };

  // useEffect(() => {
  //   getPokemon();
  // }, []);
  const pokemonData = useLoaderData("Appli");
  const [pokemons, setPokemons] = useState(pokemonData);
  const [random, setRandom] = useState(0);
  return (
    <main className="container">
      {/* {pokemons.length > 0 ? (
        <PokedexMobile pokemons={pokemons} setPokemons={setPokemons} />
      ) : (
        <p>Loading Pokemon</p>
      )}

      <PokeCardMobile getPokemon={getPokemon} pokemons={pokemons} /> */}
      {/* <Navbar
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
      /> */}
      {/* {currentLocation === "/" && <PokedexMobile pokemons={pokemons} />}
      {currentLocation === "/pokemon" && (
        <PokeCardMobile getPokemon={getPokemon} pokemons={pokemons} />
      )}

      {currentLocation === "/about" && <About />} */}
      <Outlet context={{ pokemons, setPokemons, random, setRandom }} />

      <Navbar />

      {/* <nav>
        <button onClick={() => setCurrentLocation("/")} type="button">
          PokeDexMobile
        </button>

        <button onClick={() => setCurrentLocation("/about")} type="button">
          About
        </button>

        <button onClick={() => setCurrentLocation("/pokemon")} type="button">
          Pokemon
        </button>
      </nav> */}
      <main>
        {/* {currentLocation === "/pokemon" && (
          <PokCardMobile getPokemon={getPokemon} pokemons={pokemons} />
        )} */}
      </main>
    </main>
  );
}

export default App;
