function Register() {
  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Registracija</h1>

      <form style={{ maxWidth: "400px", marginTop: "20px" }}>
        <label>Ime i prezime:</label>
        <input type="text" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Email:</label>
        <input type="email" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Lozinka:</label>
        <input type="password" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <button type="submit" style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}>
          Registruj se
        </button>
      </form>
    </div>
  );
}

export default Register;