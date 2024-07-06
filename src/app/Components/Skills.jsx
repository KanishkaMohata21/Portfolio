"use client"
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { id: 1, name: 'JavaScript', percentage: 90 },
  { id: 2, name: 'React', percentage: 85 },
  { id: 3, name: 'Node.js', percentage: 80 },
  { id: 4, name: 'Solidity', percentage: 70 },
  { id: 5, name: 'Python', percentage: 75 },
  { id: 6, name: 'Web3', percentage: 65 },
  { id: 9, name: 'C++', percentage: 70 },
  { id: 10, name: 'MongoDB', percentage: 85 },
  { id: 11, name: 'MySQL', percentage: 80 },
  { id: 12, name: 'Postgres', percentage: 75 },
];

const Skills = () => {
  const [startIndex, setStartIndex] = useState(0);
  const skillsPerPage = 5;

  const visibleSkills = skills.slice(startIndex, startIndex + skillsPerPage);

  const nextSkills = () => {
    if (startIndex + skillsPerPage < skills.length) {
      setStartIndex(startIndex + skillsPerPage);
    }
  };

  const prevSkills = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - skillsPerPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-0 mb-16 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'white' }}>Skills</h2>
      <div className="relative flex items-center justify-center">
        {startIndex > 0 && (
          <button onClick={prevSkills} className="absolute left-0 p-2 bg-gray-800 text-white rounded-full">
            &#9664;
          </button>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleSkills.map(skill => (
            <div key={skill.id} className="flex flex-col items-center">
              <div style={{ width: 100, height: 100, marginBottom: 20 }}>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: 'white',
                    pathColor: 'url(#gradient)',
                    trailColor: '#d6d6d6',
                    textSize: '16px',
                    pathTransitionDuration: 1.5, // Animation duration
                  })}
                />
                <div className="text-center mt-2 text-white">{skill.name}</div>
                <svg style={{ height: 0 }}>
                  <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                      <stop offset="0%" stopColor="#4b0082" />
                      <stop offset="100%" stopColor="#800080" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>
        {startIndex + skillsPerPage < skills.length && (
          <button onClick={nextSkills} className="absolute right-0 p-2 bg-gray-800 text-white rounded-full">
            &#9654;
          </button>
        )}
      </div>
      <style jsx>{`
        .CircularProgressbar .CircularProgressbar-path {
          stroke-linecap: round;
          transition: stroke-dashoffset 1.5s ease 0s;
        }
        .CircularProgressbar .CircularProgressbar-text {
          animation: fadeIn 1.5s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Skills;
