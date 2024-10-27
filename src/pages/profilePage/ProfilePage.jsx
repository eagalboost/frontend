import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext"; // Adjust the path as needed
import axios from "axios";
import "./ProfilePage.css"; // Add your styles

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      try {
        // Ensure currentUser is not null and has an _id
        if (currentUser && currentUser._id) {
          const response = await axios.get(
            `https://eaglesboost.com/api/users/${currentUser._id}`,
            {
              withCredentials: true,
            }
          );
          setUserInfo(response.data); // Set the user info state
        } else {
          setError("User is not logged in.");
        }
      } catch (err) {
        setError("Failed to fetch user information.");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch user info if currentUser is defined
    if (currentUser) {
      fetchUserInfo();
    } else {
      setLoading(false); // If no user is logged in, stop loading
    }
  }, [currentUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      {userInfo && (
        <>
          <h1 className="profile-heading">{userInfo.username}'s Profile</h1>
          <img src={userInfo.img} alt="Profile" className="user-image" />
          <p className="profile-pera">Email: {userInfo.email}</p>
          <p className="profile-pera">Country: {userInfo.country}</p>
          <p className="profile-pera">Joined on: {new Date(userInfo.createdAt).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
