import { useOutletContext, useRouteLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import poketype from "../../assets/functions/poketypefunction";
import styles from "./StatsPoke.module.css";

function StatsPoke({ isMobile }) {
  const pokemonsData = useRouteLoaderData("Pokecard");
  const [pokemons] = useState(pokemonsData);
  const { random } = useOutletContext();
  const typeImgUrl = poketype(pokemons, random);

  return (
    <div
      id={styles.stats}
      className={`${isMobile === true ? typeImgUrl[0].color : styles.desktopColor}`}
    >
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

StatsPoke.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
