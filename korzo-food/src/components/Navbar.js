import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Korzo Food</div>
      <ul className="nav-links">
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/o-nama">O nama</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
        <li><Link to="/prijava">Prijava</Link></li>
        <li><Link to="/registracija">Registracija</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
