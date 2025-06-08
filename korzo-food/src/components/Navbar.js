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
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "linear-gradient(135deg, #ff3c38, #ff5e57)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      fontFamily: "Poppins, sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <img src="/images/logo.jpg" alt="Korzo Food Logo" style={{ height: "40px", marginRight: "10px", borderRadius: "50%" }} />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>Korzo Food</span>
      </Link>

      {/* Hamburger / Close button */}
      {isMobile && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "28px",
            color: "white",
            cursor: "pointer",
            zIndex: 1100
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {/* Mobile dropdown menu */}
      {(!isMobile || menuOpen) && (
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "15px" : "20px",
          margin: 0,
          padding: isMobile ? "20px" : 0,
          alignItems: isMobile ? "flex-start" : "center",
          background: isMobile ? "#ff5e57" : "transparent",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? "70px" : "auto",
          right: isMobile ? "20px" : "auto",
          borderRadius: isMobile ? "10px" : "0",
          boxShadow: isMobile ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
          zIndex: 1001,
          animation: isMobile ? "fadeSlide 0.3s ease-out" : "none",
          minWidth: isMobile ? "180px" : "auto"
        }}>
          <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Početna</Link></li>
          <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>O nama</Link></li>
          <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Kontakt</Link></li>
          {!user && <li><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Prijava</Link></li>}
          {!user && <li><Link to="/register" style={{ textDecoration: "none", color: "white" }}>Registracija</Link></li>}
          {user?.role === "admin" && (
            <li><Link to="/admin" style={{ textDecoration: "none", color: "white" }}>Admin Panel</Link></li>
          )}
          {user && (
            <li>
              <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer", fontSize: "1rem" }}>
                Odjava
              </button>
            </li>
          )}
        </ul>
      )}

      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
