import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import profile from './pages/profile';
import Login from './pages/login';
import './App.css';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';
  return (
    
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
         {showNavbar }
      <div className="main-content">
        {showNavbar && <Navbar />}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/profile" element={<profile />} />
        
          </Routes>
        </div> 
      </div>

  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
