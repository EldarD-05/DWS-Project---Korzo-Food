import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        role: "guest"
      })
    });

    if (res.ok) {
      alert("Uspješna registracija!");
    } else {
      alert("Greška pri registraciji.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Registracija</h1>
      <form onSubmit={handleRegister} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <label>Ime i prezime:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <label>Lozinka:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}>Registruj se</button>
      </form>
    </div>
  );
}

export default Register;