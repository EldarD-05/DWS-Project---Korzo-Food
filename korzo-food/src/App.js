import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nama" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/prijava" element={<Login />} />
        <Route path="/registracija" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
