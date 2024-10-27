import React, { useState } from "react";
import "./RegisterComponent.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import uploadImage from "../../utils/uploadImage"; 

const RegisterComponent = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await uploadImage(profileImage); 

      const userData = {
        username: inputs.username,
        email: inputs.email,
        password: inputs.password,
        country: inputs.country,
        img: imageUrl,
      };

      await axios.post("https://eaglesboost.com/api/auth/register", userData);
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <h2 className="register-header">Join right now</h2>
      <p className="register-pera">
        Already have an account?
        <Link to="/login" className="login-link">
          {" "}
          Log in
        </Link>
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
          required
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={inputs.password}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="text"
          name="country"
          placeholder="Country"
          required
          value={inputs.country}
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button className="register-btn" type="submit">
          Join
        </button>
      </form>
      {error && (
        <p className="error-message">
          {typeof error === "string"
            ? error
            : error.message || "An error occurred"}
        </p>
      )}
    </>
  );
};

export default RegisterComponent;
