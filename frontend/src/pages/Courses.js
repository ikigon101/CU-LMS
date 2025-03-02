import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'Mathematics', description: 'Learn advanced mathematics.' },
  { id: 2, title: 'Science', description: 'Explore the world of science.' },
];

const Courses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
