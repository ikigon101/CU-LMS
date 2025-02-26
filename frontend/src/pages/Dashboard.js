import React from 'react';
import Notification from '../components/Notification';

const Dashboard = () => {
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <Notification message="Welcome to your dashboard!" />
    </div>
  );
};

export default Dashboard;
