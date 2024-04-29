import { Link } from "react-router-dom";
import Menu from "../../assets/images/logomobile/bars-solid.svg";
import pokeball from "../../assets/images/logomobile/PokeBall.svg";
import Home from "../../assets/images/logomobile/home-logo.svg";
import styles from "./Navbar.module.css";
import useScreenWidth from "../../hooks/useScreenWidth";

function Navbar() {
  const isMobile = useScreenWidth();

  return (
    <div>
      <div className={styles.nav_mobileStyle}>
        <nav className={styles.navsection}>
          <Link to="/">
            {isMobile === true ? (
              <img src={Home} alt="logo-home" className={styles.logo} />
            ) : (
              <span className={styles.logo_text}>Pokédex</span>
            )}
          </Link>
          <Link to="/pokecard">
            <img
              src={pokeball}
              alt="pokeball-logo"
              className={styles.pokeball}
            />
          </Link>
          {isMobile === true ? (
            <span className={styles.none}>none</span>
          ) : (
            <Link to="/about">
              <span className={styles.logo_ab}>A propos</span>
            </Link>
          )}

          <button className={styles.burgerButton} type="button">
            {isMobile === true ? (
              <Link to="/about">
                <img
                  src={Menu}
                  alt="Menuburger"
                  className={styles.menu_burger}
                />
              </Link>
            ) : (
              <span className={styles.none}>none</span>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
