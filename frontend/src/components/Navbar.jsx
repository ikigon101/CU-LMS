import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import cu_logo from "../imgs/cu_logo.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* 🖥 Desktop & Mobile Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={cu_logo} className="nav-logo" alt="Logo" />

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/bookmarks">Bookmarks</NavLink>
            </li>
          </ul>
        </div>

        {/* Profile & Mobile Menu Button */}
        <div className="nav-right">
          <NavLink to="/profile" className="profile-link">Profile</NavLink>
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <NavLink to="/Dashboard" onClick={() => setSidebarOpen(false)}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/courses" onClick={() => setSidebarOpen(false)}>Courses</NavLink>
          </li>
          <li>
            <NavLink to="/Bookmarks" onClick={() => setSidebarOpen(false)}>Bookmarks</NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={() => setSidebarOpen(false)}>Profile</NavLink>
          </li>
        </ul>
      </div>

      {/* 🔳 Overlay to close sidebar when clicking outside */}
      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
};

export default Navbar;
