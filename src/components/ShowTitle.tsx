import React from 'react';

interface ShowTitle {
  title: string;
}

const CourseTitle: React.FC<ShowTitle> = ({ title }) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
      <p className="text-gray-500 mt-2">Explore our comprehensive range of courses</p>
    </div>
  );
};

export default ShowTitle;
