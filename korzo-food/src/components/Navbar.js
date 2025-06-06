import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

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
        <img src="/images/logo.jpg" alt="Korzo Food Logo" style={{ height: "40px", marginRight: "10px" }} />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>Korzo Food</span>
      </Link>

      <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0, alignItems: "center" }}>
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
    </nav>
  );
}

export default Navbar;
