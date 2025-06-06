import { useEffect, useState } from "react";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meals")
      .then(res => res.json())
      .then(data => setMeals(data))
      .catch(err => console.error("Greška pri dohvatanju jela:", err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Naša ponuda</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {meals.map(meal => (
          <div key={meal.id} style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            backgroundColor: "white"
          }}>
            <img src={meal.image} alt={meal.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px" }}>{meal.title}</h3>
              <p style={{ fontWeight: "bold", color: "#ff3c38" }}>{meal.price.toFixed(2)} KM</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
