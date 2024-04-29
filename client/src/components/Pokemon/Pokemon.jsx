import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noAccentAndToLower from "../../assets/functions/noAccentAndToLower";
import styles from "./Pokemon.module.css";
import Btn from "../../assets/images/button-PokeCardMobile.png";
import typeImg from "../../assets/typeImg";
import Poketypes from "../PokeCardMobile/PokeTypes/PokeTypes";
import useScreenWidth from "../../hooks/useScreenWidth";

function Pokemon({ pokemon, setRandom }) {
  const isMobile = useScreenWidth();

  const lastType = pokemon.apiTypes.length - 1;
  let typePokemonClass = pokemon.apiTypes[lastType].name;
  typePokemonClass = noAccentAndToLower(typePokemonClass);

  const typeImage = typeImg.find(
    (type) => noAccentAndToLower(type.id.toLowerCase()) === typePokemonClass
  );
  return (
    <div
      className={` ${
        isMobile === true
          ? styles.containerInfo_Mobile
          : styles.containerInfo_Desktop
      } ${styles[typePokemonClass]}`}
    >
      {" "}
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className={isMobile === true ? styles.img_mobile : styles.img_desktop}
      />
      {isMobile === false && typeImage !== undefined && (
        <img
          src={typeImage.cardBack}
          alt={typeImage.id}
          className={styles.typeImage}
        />
      )}
      <div
        className={
          isMobile === true ? styles.pokeInfo_mobile : styles.pokeInfo_desktop
        }
      >
        {isMobile === false && (
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

        <div
          className={isMobile === true ? styles.btn_mobile : styles.btn_desktop}
        >
          {isMobile === true ? <h1>{pokemon.name}</h1> : null}
          <Link to="/pokecard">
            <button
              className={
                isMobile === true
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
                  isMobile === true
                    ? styles.imgBtn_mobile
                    : styles.imgBtn_desktop
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
