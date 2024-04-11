import Menu from "../assets/images/logomobile/bars-solid.svg";
import Home from "../assets/images/logomobile/home-logo.svg";
import pokeball from "../assets/images/logomobile/PokeBall.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <main>
      <footer>
        <nav>
          <div className="Logomobile">
            <img src={Home} alt="logo-home" className="Logo" />
            <img src={pokeball} alt="pokeball logo" className="PokeBall" />
            <img src={Menu} alt="logo-menu-burger" className="MenuBurger" />
          </div>
        </nav>
      </footer>
    </main>
  );
}

export default Navbar;
