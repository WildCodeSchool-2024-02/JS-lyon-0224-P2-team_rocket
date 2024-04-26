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
      <div className={styles.nav_mobileStyle}>
        <nav className={styles.navsection}>
          <Link to="/">
            {isMobile ? (
              <img src={Home} alt="logo-home" className={styles.logo} />
            ) : (
              <span className={styles.logo_text}>Pokedex</span>
            )}
          </Link>
          <Link to="/pokecard">
            <img
              src={pokeball}
              alt="pokeball-logo"
              className={styles.pokeball}
            />
          </Link>
          {isMobile ? (
            <span className={styles.none}>none</span>
          ) : (
            <Link to="/about">
              <span className={styles.logo_ab}>About us</span>
            </Link>
          )}

          <button
            className={styles.burgerButton}
            type="button"
            onClick={toggleMenu}
          >
            {isMobile ? (
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
