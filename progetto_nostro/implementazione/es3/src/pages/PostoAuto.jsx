import { useParams, useNavigate } from "react-router-dom";
import "../styles/posto.css";

import foto1 from "../img/fotoPA/foto1.png";

function PostoAuto() {
  const { id } = useParams();
  const navigate = useNavigate();

  // DATI FITTIZI
  const posto = {
    id: id,
    foto: foto1,
    indirizzo: "Via Roma 12, Bologna",
    prezzo: "10€/giorno",
    veicolo: "Auto piccola",
    tipologia: "Al chiuso",
    accesso: "Codice",
    descrizione: "Posto auto coperto, sicuro e vicino al centro.",
    proprietario: "Mario Rossi",
    rating: 4.3,
    recensioni: [
      { utente: "Luca", voto: 5, testo: "Perfetto, comodissimo!" },
      { utente: "Giulia", voto: 4, testo: "Molto buono, zona tranquilla." },
      { utente: "Marco", voto: 4, testo: "Consigliato!" },
    ],
  };

  const renderStars = (rating) => {
    const stelle = [];
    for (let i = 1; i <= 5; i++) {
      stelle.push(i <= Math.round(rating) ? "⭐" : "☆");
    }
    return stelle.join(" ");
  };

  return (
    <div className="posto-container">

      {/* HEADER */}
      <div className="posto-header">
        <h2>{posto.indirizzo}</h2>
        <button onClick={() => navigate(-1)}>← Indietro</button>
      </div>

      {/* IMMAGINE */}
      <img src={posto.foto} alt="posto auto" className="posto-img" />

      {/* INFO */}
      <div className="posto-info">

        <div className="left">

          <h3>Dettagli</h3>
          <p><strong>💰 Prezzo:</strong> {posto.prezzo}</p>
          <p><strong>🚗 Veicolo:</strong> {posto.veicolo}</p>
          <p><strong>🏠 Tipo:</strong> {posto.tipologia}</p>
          <p><strong>🔑 Accesso:</strong> {posto.accesso}</p>
          <p><strong>📝 Descrizione:</strong> {posto.descrizione}</p>

          <h3>Proprietario</h3>
          <p>👤 {posto.proprietario}</p>

        </div>

        {/* PRENOTA */}
        <div className="right">
          <div className="prenota-box">
            <h3>{posto.prezzo}</h3>

            <button className="prenota-btn">
              Prenota
            </button>
          </div>
        </div>

      </div>

      {/* RECENSIONI */}
      <div className="recensioni">

        <h3>
          ⭐ {posto.rating} ({posto.recensioni.length} recensioni)
        </h3>

        <p className="stelle">
          {renderStars(posto.rating)}
        </p>

        {posto.recensioni.map((r, index) => (
          <div className="rec-card" key={index}>
            <p><strong>{r.utente}</strong> - {"⭐".repeat(r.voto)}</p>
            <p>{r.testo}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default PostoAuto;
