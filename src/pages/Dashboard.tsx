
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>My Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#analytics">Analytics</a></li>
              <li><a href="#reports">Reports</a></li>
              <li><a href="#settings">Settings</a></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <section className="widget">
            <h2>Overview</h2>
            <p>Welcome to your dashboard!</p>
          </section>
          <section className="widget">
            <h2>Recent Activity</h2>
            <ul>
              <li>User logged in</li>
              <li>New report generated</li>
              <li>Settings updated</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;