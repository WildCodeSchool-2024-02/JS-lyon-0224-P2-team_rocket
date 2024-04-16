// import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

function SearchBar({ searchTerm, handleInputChange, searchPokemon }) {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search Pokemon..."
      />
      <button type="button" onClick={searchPokemon}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  searchPokemon: PropTypes.func.isRequired,
};
