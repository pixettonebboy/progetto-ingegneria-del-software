import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/homeProprietario.css";

function HomeProprietario() {
  const navigate = useNavigate();

  return (
    <div className="prop-container">

      {/* HEADER */}
      <div className="prop-header">
        <div className="left">
          <img src={logo} alt="logo" />
          <div>
            <h2>Area Proprietario 🚗</h2>
            <p>Gestisci i tuoi posti auto</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/homeUser")}>
          ← Indietro
        </button>
      </div>

      {/* CARD */}
      <div className="prop-grid">

        <div
          className="prop-card"
          onClick={() => navigate("/carica-posto")}
        >
          <div className="icon">➕</div>
          <h3>Carica posto auto</h3>
          <p>Aggiungi un nuovo parcheggio</p>
        </div>

        <div
          className="prop-card"
          onClick={() => navigate("/prenotazioni-ricevute")}
        >
          <div className="icon">📅</div>
          <h3>Prenotazioni ricevute</h3>
          <p>Visualizza richieste e prenotazioni</p>
        </div>

        <div
          className="prop-card"
          onClick={() => navigate("/tuoi-posti")}
        >
          <div className="icon">🚗</div>
          <h3>I tuoi posti auto</h3>
          <p>Gestisci i tuoi parcheggi</p>
        </div>

      </div>

    </div>
  );
}

export default HomeProprietario;
