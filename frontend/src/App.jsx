 
import { useState } from "react";
import Dashboard from "./Dashboard";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      setLoggedIn(true);
    } catch (error) {
      setMessage(error.message || "Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  if (loggedIn) {
    return <Dashboard onLogout={() => {
      setLoggedIn(false);
      setPassword("");
      setMessage("");
    }} />;
  }

  return (
    <main className="page">
      <section className="login-card">
        <div className="logo-icon">C</div>
        <h1>Connectly</h1>
        <p className="subtitle">Your world. Your people.</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Checking..." : "Log in"}
          </button>
        </form>

        <p className="message" role="status">{message}</p>

        <div className="divider">OR</div>

        <p className="hint">
          Demo login: connectly / Connect123
        </p>
      </section>
    </main>
  );
}

export default App;
