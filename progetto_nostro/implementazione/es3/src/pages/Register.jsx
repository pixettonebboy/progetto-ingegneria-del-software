import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/auth.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(pwd);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError(
        "Min 8 caratteri, una maiuscola, una minuscola e un numero"
      );
      return;
    }

    console.log("Registrato:", username);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <img src={logo} alt="Logo" className="auth-logo" />

        <h2>Crea account</h2>
        <p className="subtitle">Unisciti a BoBox</p>

        <form onSubmit={handleRegister}>
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

          <button type="submit">Registrati</button>
        </form>

        {error && <p className="error">{error}</p>}

        <p className="switch">
          Hai già un account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
