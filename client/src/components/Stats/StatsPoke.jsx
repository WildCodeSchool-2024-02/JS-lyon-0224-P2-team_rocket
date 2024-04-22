import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import poketype from "../../assets/functions/poketypefunction";
import styles from "./StatsPoke.module.css";

function StatsPoke() {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);
  return (
    <div id={styles.stats} className={typeImgUrl[0].color}>
      <span className={styles.stat}>
        <h3>HP</h3>
        <p>{pokemons[random].stats.HP}</p>
      </span>
      <span className={styles.stat}>
        <h3>Attaque</h3>
        <p>{pokemons[random].stats.attack}</p>
      </span>
      <span className={styles.stat}>
        <h3>Defense</h3>
        <p>{pokemons[random].stats.defense}</p>
      </span>
      <span className={styles.stat}>
        <h3>Speed</h3>
        <p>{pokemons[random].stats.speed} </p>
      </span>
    </div>
  );
}

export default StatsPoke;
