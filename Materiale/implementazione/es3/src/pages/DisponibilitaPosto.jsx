import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/disponibilita.css";

function DisponibilitaPosto() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [dataInizio, setDataInizio] = useState("");
  const [dataFine, setDataFine] = useState("");

  // DATI DIVERSI PER OGNI PAGINA
  const disponibilitaIniziali = {
    1: [
      {
        id: 1,
        inizio: "2026-06-10",
        fine: "2026-06-15",
      },
      {
        id: 2,
        inizio: "2026-07-01",
        fine: "2026-07-10",
      },
    ],

    2: [
      {
        id: 3,
        inizio: "2026-05-20",
        fine: "2026-05-25",
      },
      {
        id: 4,
        inizio: "2026-08-03",
        fine: "2026-08-12",
      },
    ],

    3: [],
  };

  const [disponibilita, setDisponibilita] = useState(
    disponibilitaIniziali[id] || []
  );

  const handleAdd = (e) => {
    e.preventDefault();

    if (!dataInizio || !dataFine) return;

    const nuova = {
      id: Date.now(),
      inizio: dataInizio,
      fine: dataFine,
    };

    setDisponibilita([...disponibilita, nuova]);

    setDataInizio("");
    setDataFine("");
  };

  const handleDelete = (idDaEliminare) => {
    setDisponibilita(
      disponibilita.filter((d) => d.id !== idDaEliminare)
    );
  };

  return (
    <div className="disp-container">

      {/* HEADER */}
      <div className="disp-header">
        <h2>Gestisci disponibilità 📅</h2>

        <button onClick={() => navigate("/proprietario")}>
          ← Indietro
        </button>
      </div>

      {/* FORM */}
      <form className="disp-form" onSubmit={handleAdd}>

        <div className="row">

          <input
            type="date"
            value={dataInizio}
            onChange={(e) => setDataInizio(e.target.value)}
          />

          <input
            type="date"
            value={dataFine}
            onChange={(e) => setDataFine(e.target.value)}
          />

        </div>

        <button type="submit">
          Aggiungi disponibilità
        </button>

      </form>

      {/* LISTA */}
      <div className="disp-list">

        <h3>Periodi disponibili</h3>

        {disponibilita.length === 0 && (
          <p>Nessuna disponibilità inserita</p>
        )}

        {disponibilita.map((d) => (
          <div className="disp-card" key={d.id}>

            <div>
              <p><strong>Dal:</strong> {d.inizio}</p>
              <p><strong>Al:</strong> {d.fine}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(d.id)}
            >
              ❌
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DisponibilitaPosto;