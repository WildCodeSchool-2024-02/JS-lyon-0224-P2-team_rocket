import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";

function getPokemon() {
  return axios
    .get("https://pokebuildapi.fr/api/v1/pokemon/limit/252")
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
        element: <PokedexMobile />,
      },

      {
        path: "/pokecard",
        element: <PokeCardMobile />,
        id: "Pokecard",
        loader: () => getPokemon(),
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
