import PropTypes from "prop-types";
import styles from "./StatsPoke.module.css";

function StatsPoke({ pokemons, random, typeImgUrl }) {
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

StatsPoke.propTypes = {
  random: PropTypes.number.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  typeImgUrl: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
