import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'Mathematics', description: 'Learn advanced mathematics.' },
  { id: 2, title: 'Science', description: 'Explore the world of science.' },
];

const Courses = () => {
  return (
    <div>
      <h1 className="page-title">Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
