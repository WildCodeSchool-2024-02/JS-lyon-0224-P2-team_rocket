import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import poketype from "../../assets/functions/poketypefunction";

function SearchBar({
  searchTerm,
  handleInputChange,
  handleInputKeyDown,
  pokemons,
  random,
  isPokedex,
}) {
  const typeImgUrl = poketype(pokemons, random);
  const [isMobile, setIsmobile] = useState(window.innerWidth < 800);
  // const [cardMobile, setCardMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let cardMobile = 0;
  if (isMobile === true && isPokedex === false) {
    cardMobile = true;
  }
  return (
    <div
      className={`${isMobile ? styles.searchBarMobile : styles.searchBarDesktop} ${isPokedex === true ? "" : typeImgUrl[0].backColor} ${cardMobile === true ? styles.none : ""}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="🔎  Search your Pokemon..."
        className={
          isMobile
            ? styles.input_search_bar_mobile
            : styles.input_search_bar_desktop
        }
      />
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyDown: PropTypes.func.isRequired,
  random: PropTypes.number.isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  isPokedex: PropTypes.bool.isRequired,
};
