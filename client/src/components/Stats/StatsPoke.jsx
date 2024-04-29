import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import poketype from "../../assets/functions/poketypefunction";
import styles from "./StatsPoke.module.css";

import useScreenWidth from "../../hooks/useScreenWidth";

function StatsPoke() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  const isMobile = useScreenWidth();

  return (
    <div
      id={styles.stats}
      className={`${isMobile === true ? typeImgUrl[0].color : styles.desktopColor}`}
    >
      <span id={styles.firstStat} className={styles.stat}>
        <h3>PV</h3>
        <p>{pokemons[random].stats.HP}</p>
      </span>
      <span className={styles.stat}>
        <h3>Attaque</h3>
        <p>{pokemons[random].stats.attack}</p>
      </span>
      <span className={styles.stat}>
        <h3>Défense</h3>
        <p>{pokemons[random].stats.defense}</p>
      </span>
      <span id={styles.lastStat} className={styles.stat}>
        <h3>Vitesse</h3>
        <p>{pokemons[random].stats.speed} </p>
      </span>
    </div>
  );
}

export default StatsPoke;
