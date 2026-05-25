import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/modificaDati.css";

function ModificaDati() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Achille");
  const [password, setPassword] = useState("");

  const [documento, setDocumento] = useState(null);

  const handleDocumento = (e) => {
    const file = e.target.files[0];

    if (file) {
      setDocumento(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    const dati = {
      username,
      password,
      documento,
    };

    console.log("Dati aggiornati:", dati);

    alert("Dati aggiornati con successo!");
  };

  return (
    <div className="mod-container">

      {/* HEADER */}
      <div className="mod-header">
        <h2>Modifica dati ⚙️</h2>

        <button onClick={() => navigate("/homeUser")}>
          ← Indietro
        </button>
      </div>

      {/* CARD */}
      <form className="mod-card" onSubmit={handleSave}>

        {/* USERNAME */}
        <label>Nuovo username</label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PASSWORD */}
        <label>Nuova password</label>

        <input
          type="password"
          placeholder="Inserisci nuova password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* DOCUMENTO */}
        <label>Documento d'identità</label>

        <input
          type="file"
          accept="image/*,.pdf"
          onChange={handleDocumento}
        />

        {/* PREVIEW */}
        {documento && (
          <div className="preview-container">

            <p>Anteprima documento:</p>

            <img
              src={documento}
              alt="documento"
              className="doc-preview"
            />

          </div>
        )}

        {/* BUTTON */}
        <button type="submit">
          Salva modifiche
        </button>

      </form>

    </div>
  );
}

export default ModificaDati;