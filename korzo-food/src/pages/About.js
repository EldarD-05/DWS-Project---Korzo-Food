import "./../assets/styles/About.css";

function About() {
  return (
    <div className="about-container">
      <img
        src="/images/logo.jpg"
        alt="Korzo Food logo"
        className="about-logo"
      />

      <h1 className="about-title">O nama</h1>

      <p className="about-paragraph">
        Korzo Food je vaš omiljeni fast food u srcu Zenice. Naša priča počinje iz ljubavi prema brzoj, ukusnoj i kvalitetnoj hrani. Već godinama služimo lokalnu zajednicu, kombinujući tradicionalne recepte s modernim ukusima.
      </p>
      <p className="about-paragraph">
        Naš meni sadrži raznovrsne pizze, jela sa roštilja, burgere, wrapove, kao i desertne poslastice. Svaki obrok pripremamo svježe i s ljubavlju, jer vjerujemo da kvalitetna hrana zaslužuje svoje mjesto u svakodnevici.
      </p>
      <p className="about-paragraph">
        Posjetite nas i uvjerite se zašto smo postali prepoznatljivo ime u gradu. Vaš Korzo Food.
      </p>

      <div className="about-timeline">
        <h2>Naš put kroz vrijeme</h2>
        <ul>
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
