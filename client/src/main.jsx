import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
import Navbar from "./components/Navbar/Navbar";

// let pokemons = null;
function getPokemon() {
  return axios
    .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    .then((response) => response.data);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "Appli",
    loader: () => getPokemon(),
    children: [
      {
        path: "/",
        element: (
          <>
            <PokeCardMobile />
            <Navbar />
          </>
        ),
      },

      {
        path: "/pokedex",
        element: (
          <>
            <PokedexMobile />
            <Navbar />
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
