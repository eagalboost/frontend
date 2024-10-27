import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaEnvelope, FaHeart, FaSearch, FaBars } from "react-icons/fa";
import dummyProfileIcon from "../../assets/user.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <div className="desktop-navbar">
        {currentUser === null ? (
          <header className="guest-header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/explore">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/login">
                    Sign In
                  </Link>
                </li>
              </ul>
              <div className="cta">
                <Link className="btn-link" to="/register">
                  Join
                </Link>
              </div>
            </nav>
          </header>
        ) : (
          <header className="user-header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav-search">
              <input
                name="nav-search"
                type="text"
                placeholder="What service are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button type="submit" className="search-icon" onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>
            <div className="nav-icons">
              <button className="icon">
                <FaBell />
              </button>
              <button className="icon">
                <FaEnvelope />
              </button>
              <button className="icon">
                <FaHeart />
              </button>
            </div>
            <div className="nav-right">
              <Link to="/orders" className="order-btn">
                Orders
              </Link>
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  className="profile-image"
                  src={currentUser.img || dummyProfileIcon}
                  alt="Profile"
                />
                {open && (
                  <div className="user-option">
                    <Link to="/profile" className="border-bottom user-option-link">
                      Profile
                    </Link>
                    <Link to="/setting" className="border-bottom user-option-link">
                      Setting
                    </Link>
                    <span className="border-bottom">Billing & Payments</span>
                    <span onClick={handleLogout}>Logout</span>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}
      </div>

      <div className="mobile-navbar">
        {currentUser === null ? (
          <header className="mobile-guest-header">
            <div className="mobile-navbar-nav">
              <FaBars className="mobile-menu" onClick={toggleMobileNav} />
              <nav className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link className="mobile-nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-nav-link" to="/explore">
                      Explore
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-nav-link" to="/login">
                      Sign In
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="cta">
              <Link className="btn-link" to="/register">
                Join
              </Link>
            </div>
          </header>
        ) : (
          <header className="mobile-user-header-custom">
            <div className="mobile-header-container-custom">
              <FaBars
                className="mobile-hamburger-custom"
                onClick={() => setOpen(!open)}
              />
              <div className="mobile-logo-custom">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            {open && (
              <div className="mobile-sidebar-custom">
                <div className="mobile-profile-custom">
                  <img
                    className="profile-image-custom"
                    src={currentUser.img || dummyProfileIcon}
                    alt="Profile"
                  />
                  <span className="username-custom">{currentUser.username}</span>
                </div>
                <nav className="mobile-nav-custom">
                  <Link to="/notifications" className="mobile-nav-link-custom">
                    Notifications
                  </Link>
                  <Link to="/messages" className="mobile-nav-link-custom">
                    Messages
                  </Link>
                  <Link to="/favorites" className="mobile-nav-link-custom">
                    Favorites
                  </Link>
                  <Link to="/orders" className="mobile-nav-link-custom">
                    Orders
                  </Link>
                </nav>
              </div>
            )}
          </header>
        )}
      </div>
    </>
  );
};

export default Navbar;
