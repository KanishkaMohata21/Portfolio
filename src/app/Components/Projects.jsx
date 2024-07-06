'use client'
import { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [filter, setFilter] = useState(null); // State to store current filter
  const [startIndex, setStartIndex] = useState(0); // State to track starting index of displayed projects

  const projects = [
    { id: 1, stack: 'MERN', image: '/assets/Project1.png', title: 'KShop', description: 'An e-commerce platform with a focus on user-friendly shopping experience and secure transactions.', repoLink: 'https://github.com/KanishkaMohata21/Kshop' },
    { id: 2, stack: 'React', image: '/assets/Project2.png', title: 'Knews', description: 'A news aggregation platform providing curated and real-time updates on current events.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Knews' },
    { id: 3, stack: 'React', image: '/assets/Project3.png', title: 'KIngredients', description: 'A recipe discovery app helping users explore culinary delights with detailed ingredient lists.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/food-ingredients' },
    { id: 4, stack: 'React', image: '/assets/Project4.png', title: 'KCart', description: 'A shopping cart application simplifying online purchasing with seamless checkout processes.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Cart' },
    { id: 5, stack: 'MERN', image: '/assets/Project5.png', title: 'K-To-Do-List', description: 'A productivity tool enabling users to manage tasks, set reminders, and track progress.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/To-Do-List' },
    { id: 6, stack: 'MERN', image: '/assets/Project6.png', title: 'K-Blogs', description: 'A blogging platform for users to share thoughts, experiences, and insights on various topics.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Blog-Website' },
    { id: 7, stack: 'MERN', image: '/assets/Project7.png', title: 'Konnectify', description: 'A social networking site facilitating connections through shared interests and networking opportunities.', repoLink: 'https://github.com/KanishkaMohata21/Connectify' },
    { id: 8, stack: 'React', image: '/assets/Project8.png', title: 'KWeather', description: 'A weather forecasting application providing accurate updates on local and global weather conditions.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/weather-app' },
    { id: 9, stack: 'Web3', image: '/assets/Project9.png', title: 'KrowdFund', description: 'A crowdfunding platform empowering individuals to raise funds for creative projects and charitable causes.', repoLink: 'https://github.com/KanishkaMohata21/Web3/tree/main/CrowdFund' },
  ];

  // Filter projects based on selected stack
  const filteredProjects = filter ? projects.filter(project => project.stack === filter) : projects;

  // Determine visible projects
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + 3);

  // Check if there are projects to show on the left and right
  const canShowNext = startIndex + 3 < filteredProjects.length;
  const canShowPrev = startIndex > 0;

  // Handlers for navigation
  const nextProjects = () => {
    if (canShowNext) {
      setStartIndex(prevIndex => prevIndex + 3);
    }
  };

  const prevProjects = () => {
    if (canShowPrev) {
      setStartIndex(prevIndex => prevIndex - 3);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-0 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'white' }}>Projects</h2>
      
      {/* Filter buttons */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', border: 'none', transition: 'background-color 0.3s ease', ...(filter === 'MERN' && { backgroundColor: '#333', color: 'white' }) }}
          onClick={() => setFilter('MERN')}
        >
          MERN
        </button>
        <button
          style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', border: 'none', transition: 'background-color 0.3s ease', ...(filter === 'Web3' && { backgroundColor: '#333', color: 'white' }) }}
          onClick={() => setFilter('Web3')}
        >
          Web3
        </button>
        <button
          style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', border: 'none', transition: 'background-color 0.3s ease', ...(filter === 'React' && { backgroundColor: '#333', color: 'white' }) }}
          onClick={() => setFilter('React')}
        >
          React
        </button>
        <button
          style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', border: 'none', transition: 'background-color 0.3s ease', ...(filter === null && { backgroundColor: '#333', color: 'white' }) }}
          onClick={() => setFilter(null)} // Reset filter
        >
          All
        </button>
      </div>
      
      {/* Project Display with navigation arrows */}
      <div className="relative flex items-center justify-center">
        <button className="arrow-btn prev" onClick={prevProjects} style={{ left: '10px', zIndex: '10', opacity: canShowPrev ? '1' : '0.5', pointerEvents: canShowPrev ? 'auto' : 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
          {visibleProjects.map(project => (
            <div key={project.id}>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '330px', background: 'linear-gradient(135deg, #fce7f3, #f6d6e2)', color: 'black' }} // Light pink gradient background and white text color
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-contain w-full h-64"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                  <p className="text-center">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <button className="arrow-btn next" onClick={nextProjects} style={{ right: '10px', zIndex: '10', opacity: canShowNext ? '1' : '0.5', pointerEvents: canShowNext ? 'auto' : 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;
