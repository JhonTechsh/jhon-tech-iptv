import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Android from "./pages/Android";
import SmartTV from "./pages/SmartTV";
import PC from "./pages/PC";
import Materiais from "./pages/Materiais";
import Revendedor from "./pages/Revendedor";

export default function App() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial" }}>
      <nav style={{ padding: 20, borderBottom: "1px solid #222", display: "flex", gap: 20 }}>
        <strong style={{ color: "#22c55e" }}>Jhon Tech</strong>
        <Link to="/">Início</Link>
        <Link to="/android">Android</Link>
        <Link to="/smart-tv">Smart TV</Link>
        <Link to="/pc">PC</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/revendedor">Revenda</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/android" element={<Android />} />
        <Route path="/smart-tv" element={<SmartTV />} />
        <Route path="/pc" element={<PC />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/revendedor" element={<Revendedor />} />
      </Routes>

      <footer style={{ textAlign: "center", padding: 20, borderTop: "1px solid #222", marginTop: 40 }}>
        © 2026 Jhon Tech IPTV – Plataforma Oficial de Revendedores
      </footer>
    </div>
  );
}
