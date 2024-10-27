import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import uploadImage from "../../utils/uploadImage";
import "./SettingsPage.css";

const SettingsPage = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    country: "",
    phone: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (currentUser && currentUser._id) {
        setUserInfo({
          username: currentUser.username,
          email: currentUser.email,
          country: currentUser.country,
          phone: currentUser.phone || "",
        });
        setLoading(false);
      } else {
        setError("User is not logged in.");
      }
    };
    fetchUserInfo();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = currentUser.img;
      if (profileImage) {
        imageUrl = await uploadImage(profileImage);
      }

      const updatedUserInfo = {
        ...userInfo,
        img: imageUrl,
      };

      const response = await axios.put(
        `https://eaglesboost.com/api/users/${currentUser._id}`,
        updatedUserInfo,
        {
          withCredentials: true,
        }
      );

      // Update user info in context and localStorage
      const updatedUser = { ...currentUser, ...response.data };
      setCurrentUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Update local storage

      alert("Information updated successfully!");
    } catch (err) {
      setError("Failed to update user information.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="settings-container">
      <h1>Update Your Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={userInfo.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>{" "}
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Profile Picture:</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SettingsPage;
