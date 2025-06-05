import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
    const data = await res.json();

    if (data.length > 0) {
      const user = data[0];
      localStorage.setItem("user", JSON.stringify(user));
      alert("Uspješna prijava!");
      navigate(user.role === "admin" ? "/admin" : "/");
    } else {
      alert("Neispravni podaci.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Prijava</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <label>Lozinka:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}>Prijavi se</button>
      </form>
    </div>
  );
}

export default Login;