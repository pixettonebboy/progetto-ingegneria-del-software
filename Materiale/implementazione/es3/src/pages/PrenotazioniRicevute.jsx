import { useNavigate } from "react-router-dom";
import "../styles/prenotazioniRicevute.css";

// Sostituisci con i percorsi corretti delle tue immagini
import foto1 from "../img/fotoPA/foto6.png";
import foto2 from "../img/fotoPA/foto5.png";
import foto3 from "../img/fotoPA/foto4.png";
import foto4 from "../img/fotoPA/foto3.png";

function PrenotazioniRicevute() {
  const navigate = useNavigate();
  const today = new Date();

  // DATI FITTIZI - LATO PROPRIETARIO
  const prenotazioni = [
    {
      id: 1,
      foto: foto1,
      indirizzo: "Via Roma 12, Bologna",
      affittuario: "Marco Rossi",
      guadagno: "50€",
      dataInizio: "2026-04-20",
      dataFine: "2026-04-25",
    },
    {
      id: 2,
      foto: foto2,
      indirizzo: "Via Mazzini 45, Bologna",
      affittuario: "Giulia Bianchi",
      guadagno: "16€",
      dataInizio: "2026-03-10",
      dataFine: "2026-03-12",
    },
    {
      id: 3,
      foto: foto3,
      indirizzo: "Via Roma 12, Bologna",
      affittuario: "Luca Neri",
      guadagno: "75€",
      dataInizio: "2026-05-25",
      dataFine: "2026-05-30",
    },
    {
      id: 4,
      foto: foto4,
      indirizzo: "Via Saragozza 60, Bologna",
      affittuario: "Elena Verdi",
      guadagno: "18€",
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
    return new Date(date).toLocaleDateString("it-IT");
  };

  return (
    <div className="ricevute-container">

      {/* HEADER */}
      <div className="ricevute-header">
        <h2>Prenotazioni Ricevute 📥</h2>
        <button onClick={() => navigate("/proprietario")}>
          ← Indietro
        </button>
      </div>

      {/* ATTIVE */}
      <h3 className="section-title">🟢 Attive & In Arrivo</h3>

      <div className="ricevute-grid">
        {attive.length === 0 && <p>Nessuna prenotazione attiva al momento.</p>}

        {attive.map((p) => (
          <div className="ricevute-card" key={p.id}>
            <img src={p.foto} alt="posto auto" />

            <div className="info">
              <h3>{p.indirizzo}</h3>

              <p><strong>👤 Affittuario:</strong> {p.affittuario}</p>
              <p><strong>📅 Dal:</strong> {formatDate(p.dataInizio)}</p>
              <p><strong>📅 Al:</strong> {formatDate(p.dataFine)}</p>
              <p><strong>💰 Guadagno:</strong> {p.guadagno}</p>

              <div className="actions">
                <button onClick={() => alert(`I contatti di ${p.affittuario} sono: ${p.affittuario.toLowerCase().replace(/\s+/g, '')}@gmail.com`)}>
                  Contatti Affittuario
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PASSATE */}
      <h3 className="section-title">⚫ Passate</h3>

      <div className="ricevute-grid">
        {passate.length === 0 && <p>Nessuna prenotazione passata.</p>}

        {passate.map((p) => (
          <div className="ricevute-card" key={p.id}>
            <img src={p.foto} alt="posto auto" />

            <div className="info">
              <h3>{p.indirizzo}</h3>

              <p><strong>👤 Affittuario:</strong> {p.affittuario}</p>
              <p><strong>📅 Dal:</strong> {formatDate(p.dataInizio)}</p>
              <p><strong>📅 Al:</strong> {formatDate(p.dataFine)}</p>
              <p><strong>💰 Guadagno:</strong> {p.guadagno}</p>

              <div className="actions">
                <button onClick={() => alert(`I contatti di ${p.affittuario} sono: ${p.affittuario.toLowerCase().replace(/\s+/g, '')}@gmail.com`)}>
                  Contatti Affittuario
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default PrenotazioniRicevute;