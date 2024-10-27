import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; 
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="full-width-divider" />  

      <div className="footer-content">
        <div className="footer-section about">
          <img src={logo} alt="Humming Bird Digital Logo" className="footer-logo" />
          <p>
            We provide cutting-edge IT services including digital marketing, app
            development, web design, cybersecurity, and much more. Our mission
            is to deliver top-notch solutions to enhance your online presence.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section services">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/programming-tech">Programming & Tech</Link>
            </li>
            <li>
              <Link to="/graphics-design">Graphics & Design</Link>
            </li>
            <li>
              <Link to="/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/video-animation">Video & Animation</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/writing-translation">Writing & Translation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Dhaka, Bangladesh</p>
          <p>Email: info@hummingbirddigital.com</p>
          <p>Phone: +880-1234-567-890</p>
          <div className="socials">
            <Link to="#"><FaFacebookF /></Link>  
            <Link to="#"><FaTwitter /></Link>    
            <Link to="#"><FaLinkedinIn /></Link>  
          </div>
        </div>
      </div>

      <hr className="divider" /> 

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Humming Bird Digital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
