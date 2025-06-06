import { useState } from "react";

function AdminPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageName, setImageName] = useState("");
  const [category, setCategory] = useState("");

  const handleAddMeal = async (e) => {
    e.preventDefault();

    const newMeal = {
      title,
      price: parseFloat(price),
      image: `/images/${imageName}`,
      category
    };

    const res = await fetch("http://localhost:5000/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeal)
    });

    if (res.ok) {
      alert("Jelo je uspješno dodano!");
      setTitle("");
      setPrice("");
      setImageName("");
      setCategory("");
    } else {
      alert("Greška pri dodavanju jela.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Admin Panel</h1>
      <p>Dobrodošao, {user?.name || "admin"}!</p>

      <h2>Dodaj novo jelo</h2>
      <form onSubmit={handleAddMeal} style={{ maxWidth: "400px", marginTop: "20px" }}>
        <label>Naziv jela:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Cijena (KM):</label>
        <input type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Naziv slike (npr. burger.jpg):</label>
        <input type="text" value={imageName} onChange={e => setImageName(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <label>Kategorija (npr. Pizza, Grill, Burgeri):</label>
        <input type="text" value={category} onChange={e => setCategory(e.target.value)} required style={{ width: "100%", padding: "8px", marginBottom: "10px" }} />

        <button type="submit" style={{ padding: "10px 20px", background: "#ff3c38", color: "white", border: "none" }}>
          Dodaj jelo
        </button>
      </form>
    </div>
  );
}

export default AdminPage;