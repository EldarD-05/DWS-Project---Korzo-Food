import "./../assets/styles/AdminPage.css";
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
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <p>Dobrodošao, {user?.name || "admin"}!</p>

      <h2>Dodaj novo jelo</h2>
      <form onSubmit={handleAddMeal} className="admin-form">
        <label>Naziv jela:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Cijena (KM):</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Naziv slike (npr. burger.jpg):</label>
        <input
          type="text"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          required
        />

        <label>Kategorija (npr. Pizza, Grill, Burgeri):</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Dodaj jelo</button>
      </form>
    </div>
  );
}

export default AdminPage;
