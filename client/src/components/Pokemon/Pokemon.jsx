import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";
import styles from "./Pokemon.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";
import typeImg from "../../assets/typeImg";

function Pokemon({ pokemon, setRandom }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const lastType = pokemon.apiTypes.length - 1;
  let typePokemonClass = pokemon.apiTypes[lastType].name;
  typePokemonClass = noAccentAndToLower(typePokemonClass);

  const typeImage = typeImg.find(
    (type) => noAccentAndToLower(type.id.toLowerCase()) === typePokemonClass
  );

  return (
    <div
      className={` ${
        isMobile ? styles.containerInfo_Mobile : styles.containerInfo_Desktop
      } ${styles[typePokemonClass]}`}
      key={pokemon.id}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className={isMobile ? styles.img_mobile : styles.img_desktop}
      />
      {!isMobile && typeImage && (
        <img
          src={typeImage.cardBack}
          alt={typeImage.id}
          className={styles.typeImage}
        />
      )}
      <div
        className={isMobile ? styles.pokeInfo_mobile : styles.pokeInfo_desktop}
      >
        <h1>{pokemon.name}</h1>
        <Link to="/pokecard">
          <button
            className={styles.btnPokecard}
            type="button"
            onClick={() => setRandom(pokemon.id - 1)}
          >
            <img src={Btn} alt="button-fleche" className={styles.imgBtn} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pokemon;

Pokemon.propTypes = {
  setRandom: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    apiTypes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
