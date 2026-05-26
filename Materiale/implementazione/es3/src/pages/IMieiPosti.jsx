import { useNavigate } from "react-router-dom";
import "../styles/iMieiPosti.css";

// Sostituisci con i percorsi corretti delle tue immagini
import foto1 from "../img/fotoPA/foto6.png";
import foto2 from "../img/fotoPA/foto5.png";
import foto3 from "../img/fotoPA/foto4.png";

function IMieiPosti() {
  const navigate = useNavigate();

  // DATI FITTIZI DEI POSTI AUTO DEL PROPRIETARIO
  const postiAuto = [
    {
      id: 1,
      foto: foto1,
      indirizzo: "Via Roma 12, Bologna",
      prezzo: "10€/giorno",
      stato: "Attivo",
    },
    {
      id: 2,
      foto: foto2,
      indirizzo: "Via Mazzini 45, Bologna",
      prezzo: "8€/giorno",
      stato: "Attivo",
    },
    {
      id: 3,
      foto: foto3,
      indirizzo: "Via Zamboni 33, Bologna",
      prezzo: "12€/giorno",
      stato: "Inattivo", // Esempio di posto auto attualmente non visibile agli utenti
    },
  ];

  return (
    <div className="posti-container">

      {/* HEADER */}
      <div className="posti-header">
        <h2>I tuoi Posti Auto 🅿️</h2>
        <button onClick={() => navigate("/proprietario")}>
          ← Indietro
        </button>
      </div>

      <h3 className="section-title">Seleziona un posto per gestirlo</h3>

      {/* GRIGLIA POSTI AUTO */}
      <div className="posti-grid">
        {postiAuto.length === 0 && <p>Non hai ancora inserito nessun posto auto.</p>}

        {postiAuto.map((posto) => (
          <div className="posto-card" key={posto.id}>
            
            <div className="img-container">
              <img src={posto.foto} alt="posto auto" />
              {/* Badge per indicare visivamente lo stato del posto */}
              <span className={`status-badge ${posto.stato === "Attivo" ? "active" : "inactive"}`}>
                {posto.stato}
              </span>
            </div>

            <div className="info">
              <h3>{posto.indirizzo}</h3>

              <p><strong>💰 Tariffa:</strong> {posto.prezzo}</p>
              
              <div className="actions">
                <button onClick={() => navigate(`/modificaDisponibilita/${posto.id}`)}>
                  Modifica Disponibilità 📅
                </button>
                <button className="secondary-btn" onClick={() => alert(`Modifica dati generali di ${posto.indirizzo}`)}>
                  Modifica Dati Posto ✏️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default IMieiPosti;