
import React from 'react';

const grades = [
  { course: 'Mathematics', grade: 'A' },
  { course: 'Science', grade: 'B+' },
];

const Grades = () => {
  return (
    <div>
      <h1 className="page-title">Grades</h1>
      <table className="grades-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.course}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grades;
