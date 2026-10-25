 
import "./Dashboard.css";

function Dashboard({ onLogout }) {
  return (
    <main className="dashboard">
      <nav className="dashboard-nav">
        <h2>Connectly</h2>
        <button onClick={onLogout}>Log out</button>
      </nav>

      <section className="welcome-card">
        <div className="welcome-icon">✓</div>
        <h1>Welcome to Connectly!</h1>
        <p>You have successfully logged in.</p>

        <div className="dashboard-info">
          <h3>Your Dashboard</h3>
          <p>Your account is ready for this demo.</p>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
