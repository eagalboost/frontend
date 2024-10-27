import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (inputs) => {
    try {
      const response = await axios.post(
        "https://eaglesboost.com/api/auth/login",
        inputs,
        { withCredentials: true }
      );
      const userData = response.data;

      localStorage.setItem("currentUser", JSON.stringify(userData));
      setCurrentUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "https://eaglesboost.com/api/auth/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const isAdmin = currentUser?.isAdmin || false;

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, login, logout, isAdmin, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
