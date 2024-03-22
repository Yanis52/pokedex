import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">HomePage</Link>

      <nav>
        <ul>
          <Link to="/Pokedex">Pokédex</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
