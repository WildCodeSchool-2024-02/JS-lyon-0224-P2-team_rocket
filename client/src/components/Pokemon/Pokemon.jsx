import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";
import styles from "./Pokemon.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";
import typeImg from "../../assets/typeImg";
import Poketypes from "../PokeCardMobile/PokeTypes/PokeTypes";

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
    >
      {" "}
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
        {!isMobile && (
          <>
            <p
              style={{
                fontSize: "24px",
                fontStyle: "italic",
              }}
            >
              #{pokemon.id}
            </p>
            <h1>{pokemon.name}</h1>
            <Poketypes
              pokemons={[{ apiTypes: pokemon.apiTypes }]}
              random={0}
              isMobile={isMobile}
            />
          </>
        )}

        <div className={isMobile ? styles.btn_mobile : styles.btn_desktop}>
          {isMobile === true ? <h1>{pokemon.name}</h1> : null}
          <Link to="/pokecard">
            <button
              className={
                isMobile
                  ? styles.btnPokecard_mobile
                  : styles.btnPokecard_desktop
              }
              type="button"
              onClick={() => setRandom(pokemon.id - 1)}
            >
              <img
                src={Btn}
                alt="button-fleche"
                className={
                  isMobile ? styles.imgBtn_mobile : styles.imgBtn_desktop
                }
              />
            </button>
          </Link>
        </div>
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
