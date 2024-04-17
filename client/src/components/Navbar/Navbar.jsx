import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../assets/images/logomobile/bars-solid.svg";
import pokeball from "../../assets/images/logomobile/PokeBall.svg";
import Home from "../../assets/images/logomobile/home-logo.svg";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <nav>
        <section className="menuburger">
          {isMenuOpen && (
            <ul className="menu_items">
              <li>PokeFight</li>
              <li>PokeClicker</li>
              <li>About us</li>
            </ul>
          )}
        </section>
        <div className="logo_mobile">
          <Link to="/">
            <img src={Home} alt="logo-home" className="logo" />
          </Link>
          <Link to="/pokecard">
            <img src={pokeball} alt="pokeball-logo" className="pokeball" />
          </Link>
          <button className="BurgerButton" type="button" onClick={toggleMenu}>
            <img src={Menu} alt="Menuburger" className="menu_burger" />
          </button>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
