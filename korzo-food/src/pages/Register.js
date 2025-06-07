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
    <div className="auth-wrapper">
      <div className="auth-form">
        <h1>Registracija</h1>
        <form onSubmit={handleRegister}>
          <label>Ime i prezime:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Lozinka:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit">Registruj se</button>
        </form>
      </div>
    </div>
);

}

export default Register;
