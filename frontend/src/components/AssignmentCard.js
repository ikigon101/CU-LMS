import React from 'react';

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-2">{assignment.title}</h2>
      <p className="text-gray-700 mb-4">{assignment.description}</p>
      <p className="text-gray-500 mb-4">Due Date: {assignment.dueDate}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
        View Assignment
      </button>
    </div>
  );
};

export default AssignmentCard;

