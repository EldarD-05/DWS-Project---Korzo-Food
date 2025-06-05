function Contact() {
  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Kontakt</h1>
      <p>Imate pitanje? Kontaktirajte nas putem forme ispod ili nas posjetite direktno.</p>

      <form style={{ maxWidth: "400px", marginTop: "20px" }}>
        <label>Ime:</label>
        <input type="text" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />
        
        <label>Email:</label>
        <input type="email" required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Poruka:</label>
        <textarea required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} rows="4"></textarea>

        <button type="submit" style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}>
          Pošalji
        </button>
      </form>
    </div>
  );
}

export default Contact;