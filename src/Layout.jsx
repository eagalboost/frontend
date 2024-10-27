import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import AdminNavbar from "./components/adminNavbar/AdminNavbar";
import { AuthContext } from "./context/authContext";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const Layout = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="app">
      {currentUser?.isAdmin ? <AdminNavbar /> : <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
