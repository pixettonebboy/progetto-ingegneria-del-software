import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/recensione.css";

function Recensione() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [testo, setTesto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Seleziona un voto!");
      return;
    }

    console.log({
      postoId: id,
      rating,
      testo,
    });

    alert("Recensione inviata!");

    navigate("/prenotazioni");
  };

  return (
    <div className="rec-container">

      <div className="rec-card">

        <h2>Lascia una recensione ⭐</h2>

        {/* STELLE */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= (hover || rating) ? "active" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <p className="rating-text">
          {rating > 0 && `Hai dato ${rating} stelle`}
        </p>

        {/* TESTO */}
        <textarea
          placeholder="Scrivi la tua esperienza..."
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
        />

        {/* BUTTON */}
        <button onClick={handleSubmit}>
          Invia recensione
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Annulla
        </button>

      </div>

    </div>
  );
}

export default Recensione;
