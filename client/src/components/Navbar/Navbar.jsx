import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../assets/images/logomobile/bars-solid.svg";
import pokeball from "../../assets/images/logomobile/PokeBall.svg";
import Home from "../../assets/images/logomobile/home-logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={
          isMobile ? styles.navsection_mobile : styles.navsection_desktop
        }
      >
        <section className={styles.menuburger}>
          {isMenuOpen && (
            <ul className={styles.menu_items}>
              <li>PokeFight</li>
              <li>PokeClicker</li>
              <li>About us</li>
            </ul>
          )}
        </section>
      </div>
      <nav className={styles.navsection}>
        <Link to="/">
          {isMobile ? (
            <img src={Home} alt="logo-home" className={styles.logo} />
          ) : (
            <span className={styles.logo_text}>Pokedex</span>
          )}
        </Link>
        <Link to="/pokecard">
          <img src={pokeball} alt="pokeball-logo" className={styles.pokeball} />
        </Link>
        <Link to="/about" className={styles.about_us}>
          <button
            className={styles.BurgerButton}
            type="button"
            onClick={toggleMenu}
          >
            <div>
              {isMobile ? (
                <img
                  src={Menu}
                  alt="Menuburger"
                  className={styles.menu_burger}
                />
              ) : (
                <span className={styles.logo_text}>About us</span>
              )}
            </div>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
