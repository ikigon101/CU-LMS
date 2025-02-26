import React, { useState } from 'react';
import AssignmentCard from '../components/AssignmentCard';
import FileUpload from '../components/FileUpload';

const assignments = [
  { id: 1, title: 'Math Homework', description: 'Complete chapter 5 exercises.', dueDate: '2023-10-15' },
  { id: 2, title: 'Science Project', description: 'Submit your project report.', dueDate: '2023-10-20' },
];

const Assignments = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (file) => {
    setFile(file);
    // Upload file to the back-end API
  };

  return (
    <div>
      <h1 className="page-title">Assignments</h1>
      <div className="assignment-grid">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
      <FileUpload onFileUpload={handleFileUpload} />
      {file && <p>Uploaded file: {file.name}</p>}
    </div>
  );
};

export default Assignments;
