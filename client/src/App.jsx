import { useRouteLoaderData, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const pokemonsData = useRouteLoaderData("Appli");

  const [pokemons, setPokemons] = useState(pokemonsData);

  return (
    <main className="container">
      <Outlet context={[pokemons, setPokemons]} />

      <Navbar />
    </main>
  );
}

export default App;
