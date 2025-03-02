import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 transform transition-transform duration-300 ease-in-out md:translate-x-0 -translate-x-full">
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-blue-400 transition-colors duration-300">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/courses" className="hover:text-blue-400 transition-colors duration-300">Courses</Link>
        </li>
        <li className="mb-2">
          <Link to="/bookmarks" className="hover:text-blue-400 transition-colors duration-300">bookmarks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
