import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./LoginComponent.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eaglesboost.com/api/auth/login",
        inputs,
        { withCredentials: true }
      );
      const userData = response.data;

      localStorage.setItem("currentUser", JSON.stringify(userData));
      setCurrentUser(userData);

      if (userData.isAdmin) {
        navigate("/admin-dashboard");
      } else {
        navigate("/service-list");
      }
    } catch (err) {
      setError(err.response?.data || "An error occurred while logging in");
    }
  };

  return (
    <div className="login-container">
      <h2 className="register-header">Sign in to your Account</h2>
      <p className="login-pera">
        Don't have an account?
        <Link to="/register" className="login-link">
          {" "}
          Join now
        </Link>
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          name="username"
          placeholder="Username"
          required
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={inputs.password}
          onChange={handleChange}
        />
        <button className="login-btn" type="submit">
          Sign In
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginComponent;
