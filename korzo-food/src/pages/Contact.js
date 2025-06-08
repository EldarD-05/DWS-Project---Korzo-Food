import { useState, useEffect } from "react";

function Contact() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [poruka, setPoruka] = useState("");
  const [svePoruke, setSvePoruke] = useState([]);

  useEffect(() => {
    if (user?.role === "admin") {
      fetch("http://localhost:5000/messages")
        .then(res => res.json())
        .then(data => setSvePoruke(data));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ime || !email || !poruka) {
      alert("Sva polja su obavezna!");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Unesite ispravnu Gmail adresu.");
      return;
    }


    const message = {
      ime,
      email,
      poruka,
      timestamp: new Date().toISOString()
    };

    const res = await fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });

    if (res.ok) {
      alert("Poruka uspješno poslana!");
      setIme("");
      setEmail("");
      setPoruka("");
    } else {
      alert("Greška pri slanju poruke.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Kontakt</h1>

      {user?.role === "admin" ? (
        <>
          <p>Lista svih primljenih poruka:</p>
          <ul style={{ marginTop: "20px" }}>
            {svePoruke.map((msg, index) => (
              <li key={index} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                <strong>{msg.ime}</strong> ({msg.email})<br />
                {msg.poruka}<br />
                <small>{new Date(msg.timestamp).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Imate pitanje, sugestiju ili želite naručiti? Pošaljite nam poruku!</p>

          <form onSubmit={handleSubmit} style={{ maxWidth: "500px", marginTop: "20px" }}>
            <label>Ime i prezime:</label>
            <input
              type="text"
              value={ime}
              onChange={e => setIme(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <label>Email adresa:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <label>Poruka:</label>
            <textarea
              value={poruka}
              onChange={e => setPoruka(e.target.value)}
              required
              rows="4"
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <button
              type="submit"
              style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}
            >
              Pošalji poruku
            </button>
          </form>

          <div style={{ marginTop: "40px" }}>
            <h2>Gdje se nalazimo?</h2>
            <iframe
              src="https://www.google.com/maps?q=Mehmedalije+Tarabara+15,+Zenica,+Bosnia+and+Herzegovina&output=embed"
              width="100%"
              height="400"
              style={{ border: "0", marginTop: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Korzo Food lokacija"
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;