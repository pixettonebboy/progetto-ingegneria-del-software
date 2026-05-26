import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/caricaPosto.css";

function CaricaPosto() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    indirizzo: "",
    prezzo: "",
    veicolo: "",
    tipologia: "",
    accesso: "",
    descrizione: "",
  });

  const [foto, setFoto] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuovoPosto = {
      ...form,
      foto,
    };

    console.log("Nuovo posto auto:", nuovoPosto);

    alert("Posto auto caricato con successo!");

    navigate("/proprietario");
  };

  return (
    <div className="carica-container">

      {/* HEADER */}
      <div className="carica-header">
        <h2>Carica posto auto ➕</h2>

        <button onClick={() => navigate("/proprietario")}>
          ← Indietro
        </button>
      </div>

      {/* FORM */}
      <form className="carica-card" onSubmit={handleSubmit}>

        {/* FOTO */}
        <label>Foto posto auto</label>

        <input type="file" accept="image/*" onChange={handleImage} />

        {foto && (
          <img src={foto} alt="preview" className="preview" />
        )}

        {/* INPUTS */}
        <input
          type="text"
          name="indirizzo"
          placeholder="Indirizzo"
          onChange={handleChange}
        />

        <input
          type="number"
          name="prezzo"
          placeholder="Prezzo (€ al giorno)"
          onChange={handleChange}
        />

        <select name="veicolo" onChange={handleChange}>
          <option value="">Tipo veicolo</option>
          <option value="piccola">Auto piccola</option>
          <option value="grande">Auto grande</option>
          <option value="furgone">Furgone</option>
          <option value="moto">Moto</option>
        </select>

        <select name="tipologia" onChange={handleChange}>
          <option value="">Tipologia posto</option>
          <option value="chiuso">Al chiuso</option>
          <option value="aperto">All'aperto</option>
        </select>

        <select name="accesso" onChange={handleChange}>
          <option value="">Tipo accesso</option>
          <option value="codice">Codice</option>
          <option value="chiave">Chiave</option>
        </select>

        <textarea
          name="descrizione"
          placeholder="Descrizione"
          onChange={handleChange}
        />

        {/* SUBMIT */}
        <button type="submit">
          Crea posto auto
        </button>

      </form>

    </div>
  );
}

export default CaricaPosto;
