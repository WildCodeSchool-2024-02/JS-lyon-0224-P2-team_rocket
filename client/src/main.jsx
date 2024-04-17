import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
// import About from "./components/About/About";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";

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
        element: <PokedexMobile />,
      },
      {
        path: "/pokemon",
        element: <PokeCardMobile />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
