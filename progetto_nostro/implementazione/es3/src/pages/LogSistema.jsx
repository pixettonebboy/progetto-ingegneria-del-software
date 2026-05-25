import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logSistema.css";

function LogSistema() {
  const navigate = useNavigate();

  // DATI FITTIZI: 50 log totali
  // Includono tutti i tipi di operazioni dell'enum UML e la lista di utenti fornita.
  const listaVoceLog = [
    { id: "LOG-050", dataOra: "2026-05-26T08:28:45", tipo: "operazione", operazione: "Visualizza_Log", utente: "BeatriceVeronesi" },
  { id: "LOG-049", dataOra: "2026-05-26T08:25:10", tipo: "messaggio", messaggio: "Esportazione dei log di sistema completata (Dimensione file: 4.2 MB)." },
  { id: "LOG-048", dataOra: "2026-05-26T08:14:30", tipo: "operazione", operazione: "Sblocca_utente", utente: "BeatriceVeronesi" },
  { id: "LOG-047", dataOra: "2026-05-26T08:09:15", tipo: "operazione", operazione: "Visualizza_informazioni", utente: "DavideRossini" },
  { id: "LOG-046", dataOra: "2026-05-26T08:01:22", tipo: "operazione", operazione: "Blocca_utente", utente: "BeatriceVeronesi" },
  { id: "LOG-045", dataOra: "2026-05-26T07:52:00", tipo: "messaggio", messaggio: "Allarme Sicurezza: Rilevati tentativi di login multipli dall'IP 185.10.22.1." },
  { id: "LOG-044", dataOra: "2026-05-26T07:40:15", tipo: "operazione", operazione: "Visualizza_prenotazioni_ricevute", utente: "SilviaAzzurri" },
  { id: "LOG-043", dataOra: "2026-05-26T07:22:10", tipo: "operazione", operazione: "Lascia_una_recensione", utente: "FabioMarroni" },
  { id: "LOG-042", dataOra: "2026-05-26T07:19:35", tipo: "operazione", operazione: "Prenota", utente: "FabioMarroni" },
  { id: "LOG-041", dataOra: "2026-05-26T07:19:02", tipo: "messaggio", messaggio: "Gateway di pagamento: transazione di 20€ confermata (Stripe ID: ch_19499)." },
  { id: "LOG-040", dataOra: "2026-05-26T07:05:45", tipo: "operazione", operazione: "Visualizza_pagina_posto_auto", utente: "ChiaraRosa" },
  { id: "LOG-039", dataOra: "2026-05-26T06:50:12", tipo: "operazione", operazione: "Visualizza_elenco_posti_auto", utente: "AlessandroGrigi" },
  { id: "LOG-038", dataOra: "2026-05-26T06:22:30", tipo: "operazione", operazione: "Rimosse_date_disponibili", utente: "SofiaArancio" },
  { id: "LOG-037", dataOra: "2026-05-26T06:15:00", tipo: "operazione", operazione: "Aggiunte_date_disponibili", utente: "SofiaArancio" },
  { id: "LOG-036", dataOra: "2026-05-26T05:45:10", tipo: "messaggio", messaggio: "Il servizio di geolocalizzazione API Maps ha risposto con latenza (450ms)." },
  { id: "LOG-035", dataOra: "2026-05-25T23:15:30", tipo: "operazione", operazione: "Visualizza_profilo_proprietario", utente: "RobertoBlu" },
  { id: "LOG-034", dataOra: "2026-05-25T22:50:12", tipo: "operazione", operazione: "Visualizza_prenotazioni_fatte", utente: "ElenaViola" },
  { id: "LOG-033", dataOra: "2026-05-25T22:42:05", tipo: "operazione", operazione: "Aggiunta_posto_auto", utente: "MarcoGialli" },
  { id: "LOG-032", dataOra: "2026-05-25T21:10:45", tipo: "messaggio", messaggio: "Sincronizzazione database repliche completata con successo." },
  { id: "LOG-031", dataOra: "2026-05-25T20:55:00", tipo: "operazione", operazione: "Inserito_documento", utente: "AnnaNeri" },
  { id: "LOG-030", dataOra: "2026-05-25T19:30:12", tipo: "operazione", operazione: "Modifica_credenziali", utente: "GiuliaVerdi" },
  { id: "LOG-029", dataOra: "2026-05-25T18:45:00", tipo: "operazione", operazione: "Login", utente: "LucaBianchi" },
  { id: "LOG-028", dataOra: "2026-05-25T18:12:35", tipo: "operazione", operazione: "Registrazione", utente: "MarioRossi" },
  { id: "LOG-027", dataOra: "2026-05-25T17:30:20", tipo: "messaggio", messaggio: "Aggiornamento certificato SSL per il dominio principale." },
  { id: "LOG-026", dataOra: "2026-05-25T16:55:12", tipo: "operazione", operazione: "Visualizza_informazioni", utente: "SilviaAzzurri" },
  { id: "LOG-025", dataOra: "2026-05-25T16:40:00", tipo: "operazione", operazione: "Lascia_una_recensione", utente: "DavideRossini" },
  { id: "LOG-024", dataOra: "2026-05-25T15:15:30", tipo: "operazione", operazione: "Prenota", utente: "DavideRossini" },
  { id: "LOG-023", dataOra: "2026-05-25T14:58:22", tipo: "operazione", operazione: "Visualizza_pagina_posto_auto", utente: "BeatriceVeronesi" },
  { id: "LOG-022", dataOra: "2026-05-25T14:30:00", tipo: "messaggio", messaggio: "Errore 500: L'API del provider email è momentaneamente in down." },
  { id: "LOG-021", dataOra: "2026-05-25T13:12:15", tipo: "operazione", operazione: "Visualizza_elenco_posti_auto", utente: "AlessandroGrigi" },
  { id: "LOG-020", dataOra: "2026-05-25T12:45:40", tipo: "operazione", operazione: "Rimosse_date_disponibili", utente: "FabioMarroni" },
  { id: "LOG-019", dataOra: "2026-05-25T11:22:10", tipo: "operazione", operazione: "Aggiunte_date_disponibili", utente: "FabioMarroni" },
  { id: "LOG-018", dataOra: "2026-05-25T10:55:15", tipo: "operazione", operazione: "Visualizza_prenotazioni_ricevute", utente: "ChiaraRosa" },
  { id: "LOG-017", dataOra: "2026-05-25T10:40:00", tipo: "operazione", operazione: "Aggiunta_posto_auto", utente: "ChiaraRosa" },
  { id: "LOG-016", dataOra: "2026-05-25T09:15:30", tipo: "operazione", operazione: "Inserito_documento", utente: "SofiaArancio" },
  { id: "LOG-015", dataOra: "2026-05-25T08:55:12", tipo: "messaggio", messaggio: "Avvio job schedulato per la rimozione delle prenotazioni scadute." },
  { id: "LOG-014", dataOra: "2026-05-25T08:35:45", tipo: "operazione", operazione: "Modifica_credenziali", utente: "RobertoBlu" },
  { id: "LOG-013", dataOra: "2026-05-25T08:12:20", tipo: "operazione", operazione: "Login", utente: "ElenaViola" },
  { id: "LOG-012", dataOra: "2026-05-25T07:45:00", tipo: "operazione", operazione: "Registrazione", utente: "MarcoGialli" },
  { id: "LOG-011", dataOra: "2026-05-24T23:50:10", tipo: "messaggio", messaggio: "Backup notturno eseguito con successo." },
  { id: "LOG-010", dataOra: "2026-05-24T22:30:15", tipo: "operazione", operazione: "Visualizza_profilo_proprietario", utente: "AnnaNeri" },
  { id: "LOG-009", dataOra: "2026-05-24T21:45:40", tipo: "operazione", operazione: "Visualizza_prenotazioni_fatte", utente: "GiuliaVerdi" },
  { id: "LOG-008", dataOra: "2026-05-24T21:22:00", tipo: "operazione", operazione: "Lascia_una_recensione", utente: "LucaBianchi" },
  { id: "LOG-007", dataOra: "2026-05-24T20:55:12", tipo: "operazione", operazione: "Prenota", utente: "MarioRossi" },
  { id: "LOG-006", dataOra: "2026-05-24T20:10:30", tipo: "messaggio", messaggio: "Nuovo nodo worker aggiunto al cluster per bilanciamento carico." },
  { id: "LOG-005", dataOra: "2026-05-24T19:30:05", tipo: "operazione", operazione: "Visualizza_pagina_posto_auto", utente: "MarioRossi" },
  { id: "LOG-004", dataOra: "2026-05-24T18:45:12", tipo: "operazione", operazione: "Visualizza_elenco_posti_auto", utente: "MarioRossi" },
  { id: "LOG-003", dataOra: "2026-05-24T17:55:22", tipo: "operazione", operazione: "Login", utente: "BeatriceVeronesi" },
  { id: "LOG-002", dataOra: "2026-05-24T17:15:00", tipo: "operazione", operazione: "Login", utente: "DavideRossini" },
  { id: "LOG-001", dataOra: "2026-05-24T16:30:00", tipo: "messaggio", messaggio: "Riavvio manuale del server principale completato." },
  ];

  const [filtro, setFiltro] = useState("Tutti");

  const formattaDataOra = (dataOraISO) => {
    const data = new Date(dataOraISO);
    return data.toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };

  const logFiltrati = listaVoceLog.filter((log) => {
    if (filtro === "Tutti") return true;
    if (filtro === "Operazioni") return log.tipo === "operazione";
    if (filtro === "Messaggi") return log.tipo === "messaggio";
    return true;
  });

  return (
    <div className="log-container">
      
      <div className="log-header">
        <h2>Log di Sistema 🖥️</h2>
        <button onClick={() => navigate("/admin")}>← Indietro</button>
      </div>

      <div className="log-filters">
        <button 
          className={filtro === "Tutti" ? "active" : ""} 
          onClick={() => setFiltro("Tutti")}
        >
          Tutti ({listaVoceLog.length})
        </button>
        <button 
          className={filtro === "Operazioni" ? "active" : ""} 
          onClick={() => setFiltro("Operazioni")}
        >
          Operazioni
        </button>
        <button 
          className={filtro === "Messaggi" ? "active" : ""} 
          onClick={() => setFiltro("Messaggi")}
        >
          Messaggi
        </button>
      </div>

      <div className="log-list">
        {logFiltrati.length === 0 && <p className="no-logs">Nessun log trovato.</p>}

        {logFiltrati.map((log) => (
          <div className={`log-card ${log.tipo}`} key={log.id}>
            
            <div className="log-meta">
              <span className="log-time">📅 {formattaDataOra(log.dataOra)}</span>
              <span className="log-id">ID: {log.id}</span>
            </div>

            <div className="log-details">
              {log.tipo === "operazione" ? (
                <>
                  <span className="badge-type operazione-badge">Operazione</span>
                  <div className="log-content">
                    <div>
                      <strong>Azione:</strong> <code>{log.operazione}</code>
                    </div>
                    <div style={{ marginTop: "6px" }}>
                      <strong>👤 Utente:</strong> {log.utente}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="badge-type messaggio-badge">Messaggio</span>
                  <p className="log-content message-text">
                    {log.messaggio}
                  </p>
                </>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default LogSistema;