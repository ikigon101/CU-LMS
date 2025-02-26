import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/grades">Grades</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
