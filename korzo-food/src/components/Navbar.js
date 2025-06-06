import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/prijava");
  };

  return (
    <nav className="navbar">
      <div className="logo">Korzo Food</div>
      <ul className="nav-links">
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/o-nama">O nama</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>

        {!user && (
          <>
            <li><Link to="/prijava">Prijava</Link></li>
            <li><Link to="/registracija">Registracija</Link></li>
          </>
        )}

        {user?.role === "admin" && (
          <li><Link to="/admin">Admin Panel</Link></li>
        )}

        {user && (
          <li><button onClick={handleLogout} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
            Odjava
          </button></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
