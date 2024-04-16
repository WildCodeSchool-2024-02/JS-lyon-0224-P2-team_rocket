import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PokedexMobile from "./components/PokedexMobile/PokedexMobile";
import About from "./components/About/About";
import PokeCardMobile from "./components/PokeCardMobile/PokeCardMobile";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PokedexMobile />,
        // loader: () => {
        //   return getPokemon();
        // },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pokemon",
        element: <PokeCardMobile />,
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
