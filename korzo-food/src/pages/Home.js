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

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero section */}
      <section style={{ backgroundColor: "#ff3c38", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>KORZO FOOD</h1>
        <p style={{ fontSize: "1.5rem" }}>Ukusni obroci. Brza dostava. Savršena lokacija.</p>
        <button style={{ marginTop: "20px", padding: "12px 24px", background: "white", color: "#ff3c38", border: "none", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", borderRadius: "6px" }}>
          Pogledaj meni
        </button>
      </section>

      {/* Grouped products */}
      <section style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {Object.keys(groupedMeals).map((category, index) => (
          <div key={index} style={{ marginBottom: "50px" }}>
            <h2 style={{ marginBottom: "20px", borderBottom: "2px solid #ff3c38", display: "inline-block", paddingBottom: "5px" }}>{category.toUpperCase()}</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              justifyItems: "start"
            }}>
              {groupedMeals[category].map(meal => (
                <div key={meal.id} style={{ border: "1px solid #eee", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", maxWidth: "300px" }}>
                  <img src={meal.image} alt={meal.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                  <div style={{ padding: "15px" }}>
                    <h3 style={{ margin: "0 0 10px 0" }}>{meal.title}</h3>
                    <p style={{ fontWeight: "bold", color: "#ff3c38" }}>{meal.price.toFixed(2)} KM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
