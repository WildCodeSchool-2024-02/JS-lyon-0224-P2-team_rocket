import "./PokeCard.scss";
import PropTypes from "prop-types";
import iconGrass from "../../assets/images/types/Pokemon_Type_Icon_Poison.png";

let random = 0;
function PokeCard({ getPokemon, pokemons }) {
  function GetNewPoke() {
    getPokemon();
    random = parseInt(Math.random() * 100, 10);
  }

  const typeImg = [
    { id: "Plante", img: "Pokemon_Type_Icon_Grass.png" },
    { bug: "Pokemon_Type_Icon_Bug.png" },
    { id: "Dragon", img: "Pokemon_Type_Icon_Dragon.png" },
    { id: "Electrique", img: "Pokemon_Type_Icon_Electric.png" },
    { id: "Fée", img: "Pokemon_Type_Icon_Fairy.png" },
    { id: "Combat", img: "Pokemon_Type_Icon_Fighting.png" },
    {
      id: "Poison",
      img: iconGrass,
    },
  ];
  const typeImgUrl = [];
  function poketype() {
    let count = 0;

    for (let i = 0; i < pokemons[random].apiTypes.length; i += 1) {
      const type = [];
      type[i] = pokemons[random].apiTypes[i].name;
      for (let j = 0; j < typeImg.length; j += 1) {
        if (type[i] === typeImg[j].id) {
          typeImgUrl[count] = typeImg[j];
          count += 1;
        }
      }
    }
  }

  poketype();

  return (
    <div id="container">
      <div id="pokeCard">
        <div className="pokemonImg">
          <img
            className="pokemon"
            src={pokemons[random].image}
            alt={pokemons[random].name}
          />
        </div>
        <div className="pokeName">
          <h2>{pokemons[random].name}</h2>
          <p>#{pokemons[random].id}</p>
        </div>
        <div className="types">
          <img src={typeImgUrl[0].img} alt={typeImgUrl[0].id} />
        </div>
        <div className="center">
          <div className="stats">
            <p>HP : {pokemons[random].stats.HP}</p>
            <p>Attaque : {pokemons[random].stats.attack}</p>
            <p>Defense : {pokemons[random].stats.defense}</p>
            <p>Speed : {pokemons[random].stats.speed} </p>
          </div>
        </div>
      </div>
      <button type="button" onClick={GetNewPoke}>
        New Pokemon
      </button>
    </div>
  );
}
PokeCard.propTypes = {
  getPokemon: PropTypes.func.isRequired,
  pokemons: PropTypes.objectOf().isRequired,
};
export default PokeCard;
