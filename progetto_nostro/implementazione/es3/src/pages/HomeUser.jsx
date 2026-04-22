import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/homeUser.css";

function HomeUser() {
  const navigate = useNavigate();

  const username = "Achille"; // temporaneo

  return (
    <div className="home-container">

      {/* HEADER */}
      <div className="home-header">
        <img src={logo} alt="logo" />
        <div>
          <h2>Ciao, {username} 👋</h2>
          <p>Benvenuto su BoBox</p>
        </div>
      </div>

      {/* CARD MENU */}
      <div className="card-grid">

        <div className="card" onClick={() => navigate("/affittuario")}>
          <div className="icon">🏠</div>
          <h3>Home Affittuario</h3>
          <p>Cerca e prenota posti auto</p>
        </div>

        <div className="card" onClick={() => navigate("/proprietario")}>
          <div className="icon">🚗</div>
          <h3>Home Proprietario</h3>
          <p>Carica e gestisci i tuoi posti auto</p>
        </div>

        <div className="card" onClick={() => navigate("/profilo")}>
          <div className="icon">⚙️</div>
          <h3>Modifica dati</h3>
          <p>Gestisci account, informazioni personali e credenziali</p>
        </div>

      </div>

    </div>
  );
}

export default HomeUser;
