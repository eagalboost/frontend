import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="admin-header">
      <div className="admin-logo">
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </div>

      <nav className={`admin-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="admin-link">
            <Link to="/admin-dashboard">Dashboard</Link>
          </li>
          <li className="admin-link">
            <Link to="/add-service">Add Service</Link>
          </li>
          <li className="admin-link">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="admin-link">
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="admin-logout-btn">
          Logout
        </button>
      </nav>

      {/* Hamburger menu icon for mobile */}
      <FaBars
        className="hamburger-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open state
      />
    </header>
  );
};

export default AdminNavbar;
