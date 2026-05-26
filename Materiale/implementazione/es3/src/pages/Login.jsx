import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

        if ((username === "Achille" && password === "1") || (username === "u1" && password === "1") || (username === "u2" && password === "1")) {
      navigate("/homeUser");} else {
      setAttempts(attempts + 1);

      if (attempts > 2) {
        setError("Troppi tentativi. Riprova più tardi.");
      } else {
        setError("Credenziali errate");
      }
    }

    if (username === "admin" && password === "Admin123") {
      navigate("/admin");
    } else {
      setAttempts(attempts + 1);

      if (attempts > 2) {
        setError("Troppi tentativi. Riprova più tardi.");
      } else {
        setError("Credenziali errate");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <img src={logo} alt="Logo" className="auth-logo" />

        <h2>Benvenuto</h2>
        <p className="subtitle">Accedi a BoBox</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Accedi</button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="switch">
          Non hai un account? <Link to="/register">Registrati</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
