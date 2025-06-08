import "./../assets/styles/Contact.css";
import { useState, useEffect } from "react";

function Contact() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [ime, setIme] = useState("");
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

    if (!ime || !poruka) {
      alert("Sva polja su obavezna!");
      return;
    }

    if (!user?.email?.endsWith("@gmail.com")) {
      alert("Email mora biti Gmail adresa.");
      return;
    }

    const message = {
      ime,
      email: user?.email || "guest@gmail.com",
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
      setPoruka("");
    } else {
      alert("Greška pri slanju poruke.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Kontakt</h1>

      {user?.role === "admin" ? (
        <>
          <p>Lista svih primljenih poruka:</p>
          <ul className="message-list">
            {svePoruke.map((msg, index) => (
              <li key={index}>
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

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Ime i prezime:</label>
            <input
              type="text"
              value={ime}
              onChange={e => setIme(e.target.value)}
              required
            />

            <label>Poruka:</label>
            <textarea
              value={poruka}
              onChange={e => setPoruka(e.target.value)}
              required
              rows="4"
            />

            <button type="submit">Pošalji poruku</button>
          </form>

          <div className="contact-map">
            <h2>Gdje se nalazimo?</h2>
            <iframe
              src="https://www.google.com/maps?q=Mehmedalije+Tarabara+15,+Zenica,+Bosnia+and+Herzegovina&output=embed"
              title="Korzo Food lokacija"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default Contact;
