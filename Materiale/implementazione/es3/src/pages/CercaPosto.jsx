import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/cerca.css";

function CercaPosto() {
  const navigate = useNavigate();

  const [filtri, setFiltri] = useState({
    indirizzo: "",
    dataInizio: "",
    dataFine: "",
    veicolo: "",
    prezzoMax: "",
    tipologia: "",
    accesso: "",
  });

  const handleChange = (e) => {
    setFiltri({
      ...filtri,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Filtri:", filtri);

    // Qui dopo andrai alla pagina risultati
    navigate("/risultati", { state: filtri });
  };

  return (
    <div className="search-container">

      {/* HEADER */}
      <div className="search-header">
        <div className="left">
          <img src={logo} alt="logo" />
          <div>
            <h2>Cerca posto auto 🔍</h2>
            <p>Trova il parcheggio perfetto</p>
          </div>
        </div>

        <button className="back-btn" onClick={() => navigate("/affittuario")}>
          ← Indietro
        </button>
      </div>

      {/* FORM */}
      <form className="search-card" onSubmit={handleSearch}>

        {/* INDIRIZZO */}
        <input
          type="text"
          name="indirizzo"
          placeholder="Indirizzo"
          value={filtri.indirizzo}
          onChange={handleChange}
        />

        {/* DATE */}
        <div className="row">
          <input
            type="date"
            name="dataInizio"
            value={filtri.dataInizio}
            onChange={handleChange}
          />

          <input
            type="date"
            name="dataFine"
            value={filtri.dataFine}
            onChange={handleChange}
          />
        </div>

        {/* VEICOLO */}
        <select name="veicolo" onChange={handleChange}>
          <option value="">Tipo veicolo</option>
          <option value="piccola">Auto piccola</option>
          <option value="grande">Auto grande</option>
          <option value="furgone">Furgone</option>
          <option value="moto">Moto</option>
        </select>

        {/* PREZZO */}
        <input
          type="number"
          name="prezzoMax"
          placeholder="Prezzo massimo (€)"
          value={filtri.prezzoMax}
          onChange={handleChange}
        />

        {/* TIPOLOGIA POSTO */}
        <select name="tipologia" onChange={handleChange}>
          <option value="">Tipo posto</option>
          <option value="chiuso">Al chiuso</option>
          <option value="aperto">All'aperto</option>
        </select>

        {/* ACCESSO */}
        <select name="accesso" onChange={handleChange}>
          <option value="">Tipo accesso</option>
          <option value="codice">Codice</option>
          <option value="chiave">Chiave</option>
        </select>

        {/* BUTTON */}
        <button type="submit" className="search-btn">
          Cerca
        </button>

      </form>
    </div>
  );
}

export default CercaPosto;
