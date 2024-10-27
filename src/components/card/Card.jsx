// Card.js
import React from "react";
import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-icon">{icon}</div>
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-description">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
