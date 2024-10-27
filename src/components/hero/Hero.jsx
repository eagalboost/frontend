import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Hero.css";

import logo1 from "../../assets/Partners/logo1.png";
import logo2 from "../../assets/Partners/logo2.png";
import logo3 from "../../assets/Partners/logo3.png";
import logo4 from "../../assets/Partners/logo4.png";
import logo5 from "../../assets/Partners/logo5.png";
import logo6 from "../../assets/Partners/logo6.png";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  return (
    <main id="home-hero">
      <div className="main-wrapper background-overlay">
        <div className="main-header">
          <h1>Find the right freelancer</h1>
          <h1>service, right away</h1>
        </div>
        <div className="hero-search">
          <input
            type="text"
            name="hero-search"
            id="hero-search"
            placeholder="Search for any services"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Handle Enter key press
          />
          <button className="search" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="partners">
          <img src={logo1} alt="Partner 1" className="partner-logo-1" />
          <img src={logo2} alt="Partner 2" className="partner-logo-2" />
          <img src={logo3} alt="Partner 3" className="partner-logo-3" />
          <img src={logo4} alt="Partner 4" className="partner-logo-4" />
          <img src={logo5} alt="Partner 5" className="partner-logo-5" />
          <img src={logo6} alt="Partner 6" className="partner-logo-6" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
