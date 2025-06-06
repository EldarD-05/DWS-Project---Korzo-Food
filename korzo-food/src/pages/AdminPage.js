function AdminPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px", fontFamily: 'Poppins, sans-serif' }}>
      <h1>Admin Panel</h1>
      <p>Dobrodošao, {user?.name || "admin"}!</p>
      <p>Ovdje ćeš moći upravljati jelima i korisnicima.</p>
    </div>
  );
}

export default AdminPage;