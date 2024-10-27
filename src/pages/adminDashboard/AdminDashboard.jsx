import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaClipboardList, FaPlusCircle, FaWrench } from "react-icons/fa";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-card-container">
      <div className="admin-card-wrapper">
        <Link to="/orders" className="admin-card">
          <FaClipboardList className="admin-card-icon" />
          <h3 className="admin-card-title">Orders</h3>
          <p className="admin-card-description">Manage all your orders efficiently.</p>
        </Link>
      </div>

      <div className="admin-card-wrapper">
        <Link to="/messages" className="admin-card">
          <FaEnvelope className="admin-card-icon" />
          <h3 className="admin-card-title">Messages</h3>
          <p className="admin-card-description">Check and respond to user inquiries.</p>
        </Link>
      </div>

      <div className="admin-card-wrapper">
        <Link to="/add-service" className="admin-card">
          <FaPlusCircle className="admin-card-icon" />
          <h3 className="admin-card-title">Create Service</h3>
          <p className="admin-card-description">Add new services to the platform.</p>
        </Link>
      </div>

      <div className="admin-card-wrapper">
        <Link to="/admin-services" className="admin-card">
          <FaWrench className="admin-card-icon" />
          <h3 className="admin-card-title">Manage Services</h3>
          <p className="admin-card-description">Update or remove existing services.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
