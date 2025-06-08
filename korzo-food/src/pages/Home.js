import "./../assets/styles/Home.css";
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
    <div className="home-container">
      {/* Hero section */}
      <section className="hero-section">
        <img
          src="/images/logo.jpg"
          alt="Korzo Food Logo"
          className="hero-logo"
        />
        <h1>KORZO FOOD</h1>
        <p>Ukusni obroci. Brza dostava. Savršena lokacija.</p>
        <button onClick={scrollToMeals}>Pogledaj meni</button>
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
      <section id="meals-section" className="meals-section">
        {categories.map((category, index) => (
          <div key={index} id={category} className="category-section">
            <h2>{category.toUpperCase()}</h2>
            <div className="meal-grid">
              {groupedMeals[category].map(meal => (
                <div className="meal-card" key={meal.id}>
                  <img src={meal.image} alt={meal.title} />
                  <div className="meal-content">
                    <h3>{meal.title}</h3>
                    <p>{meal.price.toFixed(2)} KM</p>
                    <button onClick={handleAddToCart}>Dodaj u korpu</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Korzo Food. Sva prava zadržana.</p>
      </footer>
    </div>
  );
}

export default Home;
