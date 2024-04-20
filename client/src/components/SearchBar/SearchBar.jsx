import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

function SearchBar({ searchTerm, handleInputChange, handleInputKeyDown }) {
  const isMobile = window.innerWidth < 800;

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
        className={styles.input_search_bar}
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
