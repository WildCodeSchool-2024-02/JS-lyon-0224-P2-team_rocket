import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import PokeHome from "./components/PokeHome/PokeHome";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
import AboutUs from "./components/AboutUs/AboutUs";

function getPokemon() {
  return axios
    .get("https://pokebuildapi.fr/api/v1/pokemon/limit/251")
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
        element: <PokeHome />,
        id: "Pokecard",
        loader: () => getPokemon(),
      },
      {
        path: "/about",
        element: <AboutUs />,
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
