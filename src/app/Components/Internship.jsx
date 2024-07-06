"use client"
import { useState } from 'react';

const InternshipSection = () => {
  const internships = [
    {
      id: 1,
      company: 'Skatesman',
      position: 'Frontend Developer/React Native Developer',
      duration: 'Jun 2024 - July 2024',
      location: 'Remote',
      description: 'Worked on developing user interfaces for mobile applications using React Native.',
    },
    {
      id: 2,
      company: 'YPP Technologies',
      position: 'Web Developer',
      duration: 'Dec 2023 - Jan 2024',
      location: 'Remote',
      description: 'Worked on web development projects focusing on frontend and backend technologies.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internships.map(internship => (
          <div key={internship.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{internship.position}</h3>
              <p className="text-gray-600 mb-2">{internship.company}</p>
              <p className="text-gray-600 mb-2">{internship.duration}</p>
              <p className="text-gray-700 mb-4">{internship.location}</p>
              <p className="text-gray-800">{internship.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipSection;


