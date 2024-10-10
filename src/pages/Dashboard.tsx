import {useNavigate} from "react-router-dom";
import './Dashboard.css';
import logo from '../assets/react.svg'; 

function Dashboard() {
  const navigate = useNavigate();
  const user = window.localStorage.getItem('user')

  const handleLogout = () => {
    window.localStorage.removeItem('user')
    navigate("/login");
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        {/* <span><b>My Dashboard</b></span>{user} 
        <span onClick={handleLogout}>Logout</span> */}
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <h1 className="title">My Dashboard</h1>
          <div className="logout-container">
            <div className="div-padding-right">Welcome {user}</div>
            {/* <button onClick={handleLogout} className="logout-button">
              Logout
            </button> */}
            <span className="logout-span" onClick={handleLogout}>Logout</span>
          </div>
        </header>
      </div>
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