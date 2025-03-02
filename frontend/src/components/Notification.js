import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded animate-bounce">
      <p>{message}</p>
    </div>
  );
};

export default Notification;

