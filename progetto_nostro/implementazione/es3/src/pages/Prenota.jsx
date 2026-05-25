import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/prenota.css";

function Prenota() {
  const navigate = useNavigate();

  const [dataInizio, setDataInizio] = useState(null);
  const [dataFine, setDataFine] = useState(null);
  const [giorni, setGiorni] = useState(0);
  const [prezzo, setPrezzo] = useState(0);

  // Stato per gestire quale mese stiamo visualizzando nel calendario
  const [meseCorrente, setMeseCorrente] = useState(new Date());

  const TARIFFA_GIORNALIERA = 10;

  // Array di date non disponibili (formato YYYY-MM-DD per facilitare i confronti)
  const dateNonDisponibili = ["2026-05-26", "2026-05-27", "2026-05-28", "2026-06-02", "2026-06-16", "2026-06-17", "2026-06-18", "2026-06-19", "2026-06-20", "2026-06-21"];

  // Funzione helper per formattare le date senza problemi di fuso orario
  const formattaData = (data) => {
    if (!data) return "";
    const d = new Date(data);
    const mese = `${d.getMonth() + 1}`.padStart(2, "0");
    const giorno = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}-${mese}-${giorno}`;
  };

  const oggiStr = formattaData(new Date());

  // Calcola il prezzo ogni volta che cambiano le date
  useEffect(() => {
    if (dataInizio && dataFine) {
      const diffTempo = dataFine.getTime() - dataInizio.getTime();
      const diffGiorni = Math.ceil(diffTempo / (1000 * 3600 * 24)) +1;

      if (diffGiorni > 0) {
        setGiorni(diffGiorni);
        setPrezzo(diffGiorni * TARIFFA_GIORNALIERA);
      }
    } else {
      setGiorni(0);
      setPrezzo(0);
    }
  }, [dataInizio, dataFine]);

  /* =======================================
     LOGICA CALENDARIO CUSTOM
  ======================================= */
  const anno = meseCorrente.getFullYear();
  const mese = meseCorrente.getMonth();
  
  // Quanti giorni ha il mese corrente?
  const giorniNelMese = new Date(anno, mese + 1, 0).getDate();
  
  // Qual è il primo giorno della settimana del mese? (0 = Domenica, vogliamo che Lunedì sia 0)
  let primoGiornoSettimana = new Date(anno, mese, 1).getDay();
  primoGiornoSettimana = primoGiornoSettimana === 0 ? 6 : primoGiornoSettimana - 1;

  // Creiamo l'array delle celle del calendario (vuote prima del 1° del mese, poi i giorni)
  const celleCalendario = [];
  for (let i = 0; i < primoGiornoSettimana; i++) celleCalendario.push(null);
  for (let i = 1; i <= giorniNelMese; i++) celleCalendario.push(new Date(anno, mese, i));

  const cambiaMese = (direzione) => {
    setMeseCorrente(new Date(anno, mese + direzione, 1));
  };

  const gestisciClickGiorno = (giorno) => {
    if (!giorno) return;
    const giornoStr = formattaData(giorno);

    // Blocca i click su date passate o non disponibili
    if (giornoStr < oggiStr || dateNonDisponibili.includes(giornoStr)) return;

    // Se non c'è check-in, o se ci sono già entrambi, iniziamo una nuova selezione
    if (!dataInizio || (dataInizio && dataFine)) {
      setDataInizio(giorno);
      setDataFine(null);
    } else if (giorno > dataInizio) {
      // Stiamo selezionando il check-out. Controlliamo che non ci siano date rosse nel mezzo.
      let valido = true;
      let temp = new Date(dataInizio);
      while (temp <= giorno) {
        if (dateNonDisponibili.includes(formattaData(temp))) {
          valido = false;
          break;
        }
        temp.setDate(temp.getDate() + 1);
      }

      if (valido) {
        setDataFine(giorno);
      } else {
        alert("L'intervallo include date non disponibili. Riprova.");
        setDataInizio(giorno);
        setDataFine(null);
      }
    } else {
      // Se clicca una data precedente al check-in, la fa diventare il nuovo check-in
      setDataInizio(giorno);
    }
  };

  const resetDate = () => {
    setDataInizio(null);
    setDataFine(null);
  };

  const handlePaga = (e) => {
    e.preventDefault();
    if (prezzo > 0) {
      navigate("/pagamento");
    }
  };

  return (
    <div className="prenota-container">
      <div className="prenota-header">
        <h2>Nuova Prenotazione 📅</h2>
        <button onClick={() => navigate("/homeUser")}>← Indietro</button>
      </div>

      <form className="prenota-card" onSubmit={handlePaga}>
        
        {/* CALENDARIO CUSTOM */}
        <div className="calendario-custom">
          
          <div className="calendario-header">
            <button type="button" onClick={() => cambiaMese(-1)}>◀</button>
            <h3>
              {meseCorrente.toLocaleString("it-IT", { month: "long", year: "numeric" }).toUpperCase()}
            </h3>
            <button type="button" onClick={() => cambiaMese(1)}>▶</button>
          </div>

          <div className="giorni-settimana">
            <span>Lun</span><span>Mar</span><span>Mer</span><span>Gio</span><span>Ven</span><span>Sab</span><span>Dom</span>
          </div>

          <div className="griglia-giorni">
            {celleCalendario.map((giorno, index) => {
              if (!giorno) return <div key={index} className="giorno-vuoto"></div>;

              const giornoStr = formattaData(giorno);
              const isPassato = giornoStr < oggiStr;
              const isNonDisponibile = dateNonDisponibili.includes(giornoStr);
              const isSelezionatoInizio = dataInizio && formattaData(dataInizio) === giornoStr;
              const isSelezionatoFine = dataFine && formattaData(dataFine) === giornoStr;
              const isInRange = dataInizio && dataFine && giorno > dataInizio && giorno < dataFine;

              let classi = "giorno-cella ";
              if (isPassato) classi += "passato ";
              if (isNonDisponibile) classi += "non-disponibile ";
              if (isSelezionatoInizio || isSelezionatoFine) classi += "selezionato ";
              if (isInRange) classi += "in-range ";

              return (
                <div 
                  key={index} 
                  className={classi} 
                  onClick={() => gestisciClickGiorno(giorno)}
                >
                  {giorno.getDate()}
                </div>
              );
            })}
          </div>

          <div className="date-selezionate-box">
            <p><strong>Check-in:</strong> {dataInizio ? dataInizio.toLocaleDateString("it-IT") : "--/--/----"}</p>
            <p><strong>Check-out:</strong> {dataFine ? dataFine.toLocaleDateString("it-IT") : "--/--/----"}</p>
            <button type="button" className="btn-reset" onClick={resetDate}>Reset date</button>
          </div>
        </div>

        {/* RIEPILOGO PREZZO */}
        <div className={`riepilogo-box ${prezzo > 0 ? "attivo" : ""}`}>
          <p className="riepilogo-testo">
            {giorni > 0
              ? `${giorni} ${giorni === 1 ? "giorno" : "giorni"} a ${TARIFFA_GIORNALIERA}€ / giorno`
              : "Seleziona le date per visualizzare il preventivo"}
          </p>
          <div className="prezzo-totale">
            Totale: <span>{prezzo}€</span>
          </div>
        </div>

        <button type="submit" className="btn-paga" disabled={prezzo === 0}>
          Procedi al pagamento
        </button>
      </form>
    </div>
  );
}

export default Prenota;