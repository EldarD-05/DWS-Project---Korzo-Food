import { useEffect, useState } from "react";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meals")
      .then(res => res.json())
      .then(data => setMeals(data));
  }, []);

  const groupedMeals = meals.reduce((acc, meal) => {
    const category = meal.category || "Ostalo";
    if (!acc[category]) acc[category] = [];
    acc[category].push(meal);
    return acc;
  }, {});

  const scrollToMeals = () => {
    const mealsSection = document.getElementById("meals-section");
    if (mealsSection) {
      mealsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCategory = (category) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = Object.keys(groupedMeals);

  const handleAddToCart = () => {
    alert("Uspješno dodano u korpu!");
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero section */}
      <section style={{ background: "linear-gradient(135deg, #ff3c38, #ff5e57)", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <img
          src="/images/logo.jpg"
          alt="Korzo Food Logo"
          style={{
            width: "150px",
            height: "150px",
            marginBottom: "20px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}
        />
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>KORZO FOOD</h1>
        <p style={{ fontSize: "1.5rem" }}>Ukusni obroci. Brza dostava. Savršena lokacija.</p>
        <button
          onClick={scrollToMeals}
          style={{ marginTop: "20px", padding: "12px 24px", background: "white", color: "#ff3c38", border: "none", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", borderRadius: "6px" }}
        >
          Pogledaj meni
        </button>
      </section>

      {/* Category nav */}
      <section className="category-nav">
        <div className="category-buttons">
          {categories.map((cat, idx) => (
            <button key={idx} onClick={() => scrollToCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grouped products */}
      <section id="meals-section" style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {Object.keys(groupedMeals).map((category, index) => (
          <div key={index} id={category} style={{ marginBottom: "50px" }}>
            <h2 style={{ marginBottom: "20px", borderBottom: "2px solid #ff3c38", display: "inline-block", paddingBottom: "5px" }}>{category.toUpperCase()}</h2>
            <div className="meal-grid">
              {groupedMeals[category].map(meal => (
                <div className="meal-card" key={meal.id}>
                  <img src={meal.image} alt={meal.title} />
                  <div className="meal-content">
                    <h3>{meal.title}</h3>
                    <p>{meal.price.toFixed(2)} KM</p>
                    <button onClick={handleAddToCart} style={{ padding: "8px 12px", background: "#ff3c38", color: "white", border: "none", borderRadius: "5px", marginTop: "10px" }}>
                      Dodaj u korpu
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(90deg, #ff3c38, #ff5e57)", color: "white", padding: "30px 20px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: "1rem" }}>© {new Date().getFullYear()} Korzo Food. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}

export default Home;
