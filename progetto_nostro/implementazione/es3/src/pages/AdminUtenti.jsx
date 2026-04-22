import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminUtenti.css";

function AdminUtenti() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [utenti, setUtenti] = useState([
    { id: 1, nome: "MarioRossi", email: "1 Posto Auto", bloccato: false },
    { id: 2, nome: "LucaBianchi", email: "0 Posti Auto", bloccato: true },
    { id: 3, nome: "GiuliaVerdi", email: "2 Posti Auto", bloccato: false },
    { id: 4, nome: "AnnaNeri", email: "0 Posti Auto", bloccato: false },
    { id: 5, nome: "MarcoGialli", email: "1 Posto Auto", bloccato: true },
    { id: 6, nome: "ElenaViola", email: "3 Posti Auto", bloccato: false },
    { id: 7, nome: "RobertoBlu", email: "0 Posti Auto", bloccato: true },
    { id: 8, nome: "SofiaArancio", email: "1 Posto Auto", bloccato: false },
    { id: 9, nome: "AlessandroGrigi", email: "2 Posti Auto", bloccato: false },
    { id: 10, nome: "ChiaraRosa", email: "0 Posti Auto", bloccato: false },
    { id: 11, nome: "FabioMarroni", email: "1 Posto Auto", bloccato: true },
    { id: 12, nome: "SilviaAzzurri", email: "4 Posti Auto", bloccato: false },
    { id: 13, nome: "DavideRossini", email: "0 Posti Auto", bloccato: false },
    { id: 14, nome: "BeatriceVeronesi", email: "2 Posti Auto", bloccato: false },
  ]);

  const toggleBlocco = (id) => {
    setUtenti(
      utenti.map((u) =>
        u.id === id ? { ...u, bloccato: !u.bloccato } : u
      )
    );
  };

  // 🔍 FILTRO UTENTI
  const utentiFiltrati = utenti.filter((u) =>
    u.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-utenti-container">

      {/* HEADER */}
      <div className="admin-utenti-header">
        <h2>Gestione utenti 👤</h2>

        <button onClick={() => navigate("/admin")}>
          ← Indietro
        </button>
      </div>

      {/* SEARCH BAR */}
      <input
        type="text"
        className="search-bar"
        placeholder="Cerca utente per nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LISTA */}
      <div className="admin-utenti-list">

        {utentiFiltrati.length === 0 && (
          <p>Nessun utente trovato</p>
        )}

        {utentiFiltrati.map((u) => (
          <div className="utente-card" key={u.id}>

            <div className="info">
              <h3>{u.nome}</h3>
              <p>{u.email}</p>

              <p className={u.bloccato ? "status blocked" : "status active"}>
                {u.bloccato ? "🔒 Bloccato" : "🟢 Attivo"}
              </p>
            </div>

            <button
              className={u.bloccato ? "unlock-btn" : "lock-btn"}
              onClick={() => toggleBlocco(u.id)}
            >
              {u.bloccato ? "Sblocca" : "Blocca"}
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminUtenti;
