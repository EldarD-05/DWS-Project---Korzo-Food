import "./../assets/styles/Auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      alert("Dozvoljene su samo @gmail.com adrese.");
      return;
    }

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
    <div className="auth-wrapper">
      <div className="auth-form">
        <h1>Prijava</h1>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label>Lozinka:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Prijavi se</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
