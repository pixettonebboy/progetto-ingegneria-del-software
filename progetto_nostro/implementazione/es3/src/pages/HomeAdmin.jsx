import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/homeAdmin.css";

function HomeAdmin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">

      {/* HEADER */}
      <div className="admin-header">
        <div className="left">
          <img src={logo} alt="logo" />
          <div>
            <h2>Admin Panel 🛠️</h2>
            <p>Gestione sistema utenti</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/home")}>
          ← Esci
        </button>
      </div>

      {/* DASHBOARD */}
      <div className="admin-grid">

        <div
          className="admin-card"
          onClick={() => navigate("/admin/utenti")}
        >
          <div className="icon">👤</div>
          <h3>Blocca/Sblocca Utenti</h3>
          <p>Blocca o sblocca utenti registrati</p>
        </div>

        <div
          className="admin-card"
          onClick={() => navigate("/admin/logs")}
        >
          <div className="icon">📜</div>
          <h3>Log sistema</h3>
          <p>Visualizza attività e eventi</p>
        </div>

        <div
          className="admin-card"
          onClick={() => navigate("/admin/info-utenti")}
        >
          <div className="icon">ℹ️</div>
          <h3>Info utenti</h3>
          <p>Dettagli e dati utenti registrati</p>
        </div>

      </div>

    </div>
  );
}

export default HomeAdmin;
