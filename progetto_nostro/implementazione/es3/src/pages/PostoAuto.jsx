import { useParams, useNavigate } from "react-router-dom";
import "../styles/posto.css";

import foto1 from "../img/fotoPA/foto1.png";
import foto2 from "../img/fotoPA/foto2.png";
import foto3 from "../img/fotoPA/foto3.png";
import foto4 from "../img/fotoPA/foto4.png";
import foto5 from "../img/fotoPA/foto5.png";
import foto6 from "../img/fotoPA/foto6.png";

function PostoAuto() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ARRAY DI POSTI
  const posti = [
    {
      id: 1,
      foto: foto1,
      indirizzo: "Via Roma 12, Bologna",
      prezzo: "10€/giorno",
      veicolo: "Auto piccola",
      tipologia: "Al chiuso",
      accesso: "Codice",
      descrizione: "Posto auto coperto vicino al centro.",
      proprietario: "Mario Rossi",
      rating: 4.3,
      recensioni: [
        {
          utente: "Michele",
          voto: 4,
          testo: "Posto auto bellissimo in via Roma!"
        },
        {
          utente: "Luca",
          voto: 5,
          testo: "Perfetto!"
        },
        {
          utente: "Giulia",
          voto: 4,
          testo: "Bellissimo posto auto!"
        },
      ],
    },

    {
      id: 2,
      foto: foto2,
      indirizzo: "Via Mazzini 45, Bologna",
      prezzo: "8€/giorno",
      veicolo: "Moto",
      tipologia: "All'aperto",
      accesso: "Chiave",
      descrizione: "Comodo e accessibile.",
      proprietario: "Giulia Verdi",
      rating: 4.8,
      recensioni: [
        {
          utente: "Anna",
          voto: 5,
          testo: "Ottimo posto."
        },
      ],
    },

    {
      id: 3,
      foto: foto3,
      indirizzo: "Via Indipendenza 20, Bologna",
      prezzo: "15€/giorno",
      veicolo: "Auto grande",
      tipologia: "Al chiuso",
      accesso: "Codice",
      descrizione: "Garage sicuro e videosorvegliato.",
      proprietario: "Luca Bianchi",
      rating: 4.5,
      recensioni: [],
    },

    {
      id: 4,
      foto: foto4,
      indirizzo: "Via San Donato 99, Bologna",
      prezzo: "12€/giorno",
      veicolo: "Furgone",
      tipologia: "All'aperto",
      accesso: "Chiave",
      descrizione: "Ampio spazio disponibile.",
      proprietario: "Marco Neri",
      rating: 4.0,
      recensioni: [],
    },

    {
      id: 5,
      foto: foto5,
      indirizzo: "Via Saragozza 60, Bologna",
      prezzo: "9€/giorno",
      veicolo: "Auto piccola",
      tipologia: "Al chiuso",
      accesso: "Codice",
      descrizione: "Zona tranquilla.",
      proprietario: "Francesca Blu",
      rating: 5,
      recensioni: [],
    },

    {
      id: 6,
      foto: foto6,
      indirizzo: "Via Toscana 33, Bologna",
      prezzo: "11€/giorno",
      veicolo: "Auto grande",
      tipologia: "All'aperto",
      accesso: "Chiave",
      descrizione: "Molto vicino ai servizi.",
      proprietario: "Andrea Gialli",
      rating: 3.9,
      recensioni: [],
    },
  ];

  // TROVA IL POSTO GIUSTO
  const posto = posti.find(
    (p) => p.id === parseInt(id)
  );

  // SE NON TROVATO
  if (!posto) {
    return (
      <div className="posto-container">
        <h2>Posto auto non trovato</h2>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stelle = [];

    for (let i = 1; i <= 5; i++) {
      stelle.push(
        i <= Math.round(rating) ? "⭐" : "☆"
      );
    }

    return stelle.join(" ");
  };

  return (
    <div className="posto-container">

      {/* HEADER */}
      <div className="posto-header">
        <h2>{posto.indirizzo}</h2>

        <button onClick={() => navigate(-1)}>
          ← Indietro
        </button>
      </div>

      {/* FOTO */}
      <img
        src={posto.foto}
        alt="posto auto"
        className="posto-img"
      />

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

        {/* BOX PRENOTA */}
        <div className="right">

          <div className="prenota-box">

            <h3>{posto.prezzo}</h3>

            <button className="prenota-btn" onClick={() => navigate("/prenota")} >
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

            <p>
              <strong>{r.utente}</strong>
              {" - "}
              {"⭐".repeat(r.voto)}
            </p>

            <p>{r.testo}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PostoAuto;