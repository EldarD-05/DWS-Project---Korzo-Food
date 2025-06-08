import "./../assets/styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/images/logo.jpg" alt="Korzo Food Logo" />
        <span>Korzo Food</span>
      </Link>

      {/* Hamburger */}
      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {(menuOpen || !isMobile) && (
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Početna</Link></li>
          <li><Link to="/about">O nama</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          {!user && <li><Link to="/login">Prijava</Link></li>}
          {!user && <li><Link to="/register">Registracija</Link></li>}
          {user?.role === "admin" && (
            <li><Link to="/admin">Admin Panel</Link></li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout}>Odjava</button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
