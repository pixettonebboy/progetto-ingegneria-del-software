import { useNavigate } from "react-router-dom";
import "../styles/prenotazioni.css";

import foto1 from "../img/fotoPA/foto6.png";
import foto2 from "../img/fotoPA/foto5.png";
import foto3 from "../img/fotoPA/foto4.png";
import foto4 from "../img/fotoPA/foto3.png";

function Prenotazioni() {
  const navigate = useNavigate();

  const today = new Date();

  // DATI FITTIZI
  const prenotazioni = [
    {
      id: 1,
      foto: foto1,
      indirizzo: "Via Roma 12, Bologna",
      prezzo: "10€/giorno",
      dataInizio: "2026-04-20",
      dataFine: "2026-04-25",
    },
    {
      id: 2,
      foto: foto2,
      indirizzo: "Via Mazzini 45, Bologna",
      prezzo: "8€/giorno",
      dataInizio: "2026-03-10",
      dataFine: "2026-03-12",
    },
    {
      id: 3,
      foto: foto3,
      indirizzo: "Via Indipendenza 20, Bologna",
      prezzo: "15€/giorno",
      dataInizio: "2026-04-01",
      dataFine: "2026-04-05",
    },
    {
      id: 4,
      foto: foto4,
      indirizzo: "Via Saragozza 60, Bologna",
      prezzo: "9€/giorno",
      dataInizio: "2026-02-01",
      dataFine: "2026-02-03",
    },
  ];

  // DIVISIONE ATTIVE / PASSATE
  const attive = prenotazioni.filter(
    (p) => new Date(p.dataFine) >= today
  );

  const passate = prenotazioni.filter(
    (p) => new Date(p.dataFine) < today
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="pren-container">

      {/* HEADER */}
      <div className="pren-header">
        <h2>Le tue prenotazioni 📅</h2>
        <button onClick={() => navigate("/affittuario")}>
          ← Indietro
        </button>
      </div>

      {/* ATTIVE */}
      <h3 className="section-title">🟢 Attive</h3>

      <div className="pren-grid">
        {attive.length === 0 && <p>Nessuna prenotazione attiva</p>}

        {attive.map((p) => (
          <div className="pren-card" key={p.id}>
            <img src={p.foto} alt="posto auto" />

            <div className="info">
              <h3>{p.indirizzo}</h3>

              <p><strong>📅 Dal:</strong> {formatDate(p.dataInizio)}</p>
              <p><strong>📅 Al:</strong> {formatDate(p.dataFine)}</p>
              <p><strong>💰 Prezzo:</strong> {p.prezzo}</p>

              <button onClick={() => navigate(`/posto/${p.id}`)}>
                Visualizza
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PASSATE */}
      <h3 className="section-title">⚫ Passate</h3>

      <div className="pren-grid">
        {passate.length === 0 && <p>Nessuna prenotazione passata</p>}

        {passate.map((p) => (
          <div className="pren-card" key={p.id}>
            <img src={p.foto} alt="posto auto" />

            <div className="info">
              <h3>{p.indirizzo}</h3>

              <p><strong>📅 Dal:</strong> {formatDate(p.dataInizio)}</p>
              <p><strong>📅 Al:</strong> {formatDate(p.dataFine)}</p>
              <p><strong>💰 Prezzo:</strong> {p.prezzo}</p>

              <div className="actions">
                <button onClick={() => navigate(`/posto/${p.id}`)}>
                  Visualizza
                </button>

                <button className="review-btn" onClick={() => navigate(`/recensione/${p.id}`)}>
                  Lascia recensione
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Prenotazioni;
