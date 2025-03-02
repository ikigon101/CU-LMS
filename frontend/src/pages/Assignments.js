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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
      <div className="mt-6">
        <FileUpload onFileUpload={handleFileUpload} />
        {file && <p className="mt-4 text-gray-700">Uploaded file: {file.name}</p>}
      </div>
    </div>
  );
};

export default Assignments;
