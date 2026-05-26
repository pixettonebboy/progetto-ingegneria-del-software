import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/homeAffittuario.css";

function HomeAffittuario() {
  const navigate = useNavigate();

  return (
    <div className="aff-container">

      {/* HEADER */}
      <div className="aff-header">
        <div className="left">
          <img src={logo} alt="logo" />
          <div>
            <h2>Area Affittuario 🏠</h2>
            <p>Gestisci le tue prenotazioni</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/homeUser")}>
          ← Torna indietro
        </button>
      </div>

      {/* CARD */}
      <div className="aff-grid">

        <div className="aff-card" onClick={() => navigate("/cerca")}>
          <div className="icon">🔍</div>
          <h3>Cerca posto auto</h3>
          <p>Trova il parcheggio perfetto per te</p>
        </div>

        <div className="aff-card" onClick={() => navigate("/prenotazioni")}>
          <div className="icon">📅</div>
          <h3>Le tue prenotazioni</h3>
          <p>Visualizza prenotazioni attive e passate</p>
        </div>

      </div>

    </div>
  );
}

export default HomeAffittuario;
