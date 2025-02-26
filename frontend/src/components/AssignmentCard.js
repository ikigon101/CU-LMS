import React from 'react';

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="assignment-card">
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>
      <p>Due Date: {assignment.dueDate}</p>
      <button>View Assignment</button>
    </div>
  );
};

export default AssignmentCard;
