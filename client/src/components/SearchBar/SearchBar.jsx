import { useEffect, useState } from "react";
import PropTypes, { arrayOf } from "prop-types";
import styles from "./SearchBar.module.css";
import poketype from "../../assets/functions/poketypefunction";

function SearchBar({
  searchTerm,
  handleInputChange,
  handleInputKeyDown,
  pokemons,
  random,
}) {
  const [isMobile, setIsmobile] = useState(window.innerWidth < 800);
  const typeImgUrl = poketype(pokemons, random);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        isMobile
          ? styles.searchBarMobile
          : `${styles.searchBarDesktop} ${typeImgUrl[0].backColor} `
      }
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
  pokemons: PropTypes.objectOf(arrayOf).isRequired,
};
