import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, handleInputChange, handleInputKeyDown }) {
  const [isMobile, setIsmobile] = useState(window.innerWidth < 800);

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
      className={isMobile ? styles.searchBarMobile : styles.searchBarDesktop}
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
};
