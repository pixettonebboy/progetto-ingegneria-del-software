import { useNavigate } from "react-router-dom";
import "../styles/infoUtenti.css";

function InfoUtenti() {
  const navigate = useNavigate();

const utenti = [
  {
    id: 1,
    username: "MarioRossi",
    email: "mariorossi@gmail.com",
    ruolo: "Affittuario",
    registrazione: "12/03/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 8,
    recensioni: 5,
  },
  {
    id: 2,
    username: "LucaBianchi",
    email: "lucabianchi@gmail.com",
    ruolo: "Affittuario",
    registrazione: "15/01/2026",
    documento: false,
    bloccato: true,
    prenotazioni: 0,
    recensioni: 0,
  },
  {
    id: 3,
    username: "GiuliaVerdi",
    email: "giuliaverdi@gmail.com",
    ruolo: "Proprietario",
    registrazione: "22/02/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 12,
    recensioni: 9,
  },
  {
    id: 4,
    username: "AnnaNeri",
    email: "annaneri@gmail.com",
    ruolo: "Affittuario",
    registrazione: "05/04/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 3,
    recensioni: 2,
  },
  {
    id: 5,
    username: "MarcoGialli",
    email: "marcogialli@gmail.com",
    ruolo: "Affittuario",
    registrazione: "18/11/2025",
    documento: true,
    bloccato: true,
    prenotazioni: 1,
    recensioni: 0,
  },
  {
    id: 6,
    username: "ElenaViola",
    email: "elenaviola@gmail.com",
    ruolo: "Proprietario",
    registrazione: "30/03/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 15,
    recensioni: 14,
  },
  {
    id: 7,
    username: "RobertoBlu",
    email: "robertoblu@gmail.com",
    ruolo: "Affittuario",
    registrazione: "12/12/2025",
    documento: false,
    bloccato: true,
    prenotazioni: 0,
    recensioni: 1,
  },
  {
    id: 8,
    username: "SofiaArancio",
    email: "sofiaarancio@gmail.com",
    ruolo: "Affittuario",
    registrazione: "02/05/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 5,
    recensioni: 4,
  },
  {
    id: 9,
    username: "AlessandroGrigi",
    email: "alessandrogrigi@gmail.com",
    ruolo: "Proprietario",
    registrazione: "14/02/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 9,
    recensioni: 7,
  },
  {
    id: 10,
    username: "ChiaraRosa",
    email: "chiararosa@gmail.com",
    ruolo: "Affittuario",
    registrazione: "19/04/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 2,
    recensioni: 1,
  },
  {
    id: 11,
    username: "FabioMarroni",
    email: "fabiomarroni@gmail.com",
    ruolo: "Affittuario",
    registrazione: "08/01/2026",
    documento: true,
    bloccato: true,
    prenotazioni: 4,
    recensioni: 2,
  },
  {
    id: 12,
    username: "SilviaAzzurri",
    email: "silviaazzurri@gmail.com",
    ruolo: "Proprietario",
    registrazione: "27/03/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 22,
    recensioni: 18,
  },
  {
    id: 13,
    username: "DavideRossini",
    email: "daviderossini@gmail.com",
    ruolo: "Affittuario",
    registrazione: "11/05/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 1,
    recensioni: 0,
  },
  {
    id: 14,
    username: "BeatriceVeronesi",
    email: "beatriceveronesi@gmail.com",
    ruolo: "Proprietario",
    registrazione: "04/03/2026",
    documento: true,
    bloccato: false,
    prenotazioni: 7,
    recensioni: 6,
  }
];
  return (
    <div className="info-container">

      {/* HEADER */}
      <div className="info-header">

        <h2>Informazioni utenti 👤</h2>

        <button onClick={() => navigate("/admin")}>
          ← Indietro
        </button>

      </div>

      {/* LISTA */}
      <div className="info-grid">

        {utenti.map((u) => (
          <div className="user-card" key={u.id}>

            <div className="top">

              <h3>{u.username}</h3>

              <span className={u.bloccato ? "blocked" : "active"}>
                {u.bloccato ? "🔒 Bloccato" : "🟢 Attivo"}
              </span>

            </div>

            <p><strong>📧 Email:</strong> {u.email}</p>

            <p><strong>🚗 Ruolo:</strong> {u.ruolo}</p>

            <p>
              <strong>📅 Registrazione:</strong>
              {" "}
              {u.registrazione}
            </p>

            <p>
              <strong>🪪 Documento:</strong>
              {" "}
              {u.documento ? "Verificato" : "Non caricato"}
            </p>

            <p>
              <strong>📦 Prenotazioni:</strong>
              {" "}
              {u.prenotazioni}
            </p>

            <p>
              <strong>⭐ Recensioni:</strong>
              {" "}
              {u.recensioni}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default InfoUtenti;