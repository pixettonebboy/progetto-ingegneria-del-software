import { useLocation, useNavigate } from "react-router-dom";
import "../styles/risultati.css";

import foto1 from "../img/fotoPA/foto1.png";
import foto2 from "../img/fotoPA/foto2.png";
import foto3 from "../img/fotoPA/foto3.png";
import foto4 from "../img/fotoPA/foto4.png";
import foto5 from "../img/fotoPA/foto5.png";
import foto6 from "../img/fotoPA/foto6.png";

function Risultati() {
  const navigate = useNavigate();
  const location = useLocation();

  const filtri = location.state;

  // DATI FITTIZI
  const posti = [
    {
      id: 1,
      foto: foto1,
      indirizzo: "Via Roma 12, Bologna",
      prezzo: "10€/giorno",
      veicolo: "Auto piccola",
      tipologia: "Al chiuso",
      accesso: "Codice",
    },
    {
      id: 2,
      foto: foto2,
      indirizzo: "Via Mazzini 45, Bologna",
      prezzo: "8€/giorno",
      veicolo: "Auto piccola",
      tipologia: "Al chiuso",
      accesso: "Chiave",
    },
    {
      id: 3,
      foto: foto3,
      indirizzo: "Via Indipendenza 20, Bologna",
      prezzo: "15€/giorno",
      veicolo: "Auto grande",
      tipologia: "Al chiuso",
      accesso: "Codice",
    },
    {
      id: 4,
      foto: foto4,
      indirizzo: "Via San Donato 99, Bologna",
      prezzo: "12€/giorno",
      veicolo: "Furgone",
      tipologia: "Al chiuso",
      accesso: "Chiave",
    },
    {
      id: 5,
      foto: foto5,
      indirizzo: "Via Saragozza 60, Bologna",
      prezzo: "9€/giorno",
      veicolo: "Auto piccola",
      tipologia: "Al chiuso",
      accesso: "Codice",
    },
    {
      id: 6,
      foto: foto6,
      indirizzo: "Via Toscana 33, Bologna",
      prezzo: "11€/giorno",
      veicolo: "Auto grande",
      tipologia: "Al chiuso",
      accesso: "Chiave",
    },
  ];

  return (
    <div className="results-container">

      {/* HEADER */}
      <div className="results-header">
        <h2>Risultati ricerca 🔍</h2>

        <button onClick={() => navigate("/cerca")}>
          ← Modifica filtri
        </button>
      </div>

      {/* LISTA */}
      <div className="results-grid">
        {posti.map((posto) => (
          <div className="result-card" key={posto.id}>

            <img src={posto.foto} alt="posto auto" />

            <div className="info">
              <h3>{posto.indirizzo}</h3>

              <p><strong>💰 Prezzo:</strong> {posto.prezzo}</p>
              <p><strong>🚗 Veicolo:</strong> {posto.veicolo}</p>
              <p><strong>🏠 Tipo:</strong> {posto.tipologia}</p>
              <p><strong>🔑 Accesso:</strong> {posto.accesso}</p>

              <button
                onClick={() => navigate(`/posto/${posto.id}`)}
              >
                Visualizza
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Risultati;
