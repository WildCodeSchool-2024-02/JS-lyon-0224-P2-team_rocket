import Menu from "../assets/images/logomobile/bars-solid.svg";
import Home from "../assets/images/logomobile/home-logo.svg";
import pokeball from "../assets/images/logomobile/PokeBall.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <main>
      <footer>
        <nav>
          <div className="logo_mobile">
            <img src={Home} alt="logo-home" className="logo" />
            <img src={pokeball} alt="pokeball logo" className="pokeball" />
            <img src={Menu} alt="logo-menu-burger" className="menu_burger" />
          </div>
        </nav>
      </footer>
    </main>
  );
}

export default Navbar;
