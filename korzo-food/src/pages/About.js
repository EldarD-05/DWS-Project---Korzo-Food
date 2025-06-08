function About() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "60px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      
      <img
        src="/images/logo.jpg"
        alt="Korzo Food logo"
        style={{
          width: "160px",
          height: "160px",
          marginBottom: "30px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      />

      <h1 style={{ fontSize: "2.5rem", color: "#ff3c38", marginBottom: "20px" }}>O nama</h1>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "30px", textAlign: "justify" }}>
        Korzo Food je vaš omiljeni fast food u srcu Zenice. Naša priča počinje iz ljubavi prema brzoj, ukusnoj i kvalitetnoj hrani. Već godinama služimo lokalnu zajednicu, kombinujući tradicionalne recepte s modernim ukusima.
      </p>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "30px", textAlign: "justify" }}>
        Naš meni sadrži raznovrsne pizze, jela sa roštilja, burgere, wrapove, kao i desertne poslastice. Svaki obrok pripremamo svježe i s ljubavlju, jer vjerujemo da kvalitetna hrana zaslužuje svoje mjesto u svakodnevici.
      </p>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "50px", textAlign: "justify" }}>
        Posjetite nas i uvjerite se zašto smo postali prepoznatljivo ime u gradu. Vaš Korzo Food.
      </p>

      <div style={{ borderLeft: "3px solid #ff3c38", paddingLeft: "20px", textAlign: "left", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ color: "#ff3c38", marginBottom: "10px" }}>Naš put kroz vrijeme</h2>
        <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "1.1rem", lineHeight: "1.8" }}>
          <li><strong>2015:</strong> Otvaranje prvog objekta u Zenici</li>
          <li><strong>2017:</strong> Uvođenje dostave i novih grill specijaliteta</li>
          <li><strong>2020:</strong> Digitalizacija menija i početak online narudžbi</li>
          <li><strong>2023:</strong> Redizajn brenda i nova lokacija u centru</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
