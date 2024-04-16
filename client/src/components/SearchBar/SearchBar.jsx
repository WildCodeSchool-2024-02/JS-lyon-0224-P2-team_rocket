import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <form className={styles.search}>
        <input type="text" placeholder="Search Pokemon ..." />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SearchBar;
