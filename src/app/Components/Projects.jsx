import Image from 'next/image';

const Projects = () => {
  const projects = [
    { id: 1, image: '/assets/Project1.png', title: 'KShop', description: 'An e-commerce platform with a focus on user-friendly shopping experience and secure transactions.', repoLink: 'https://github.com/KanishkaMohata21/Kshop' },
    { id: 2, image: '/assets/Project2.png', title: 'Knews', description: 'A news aggregation platform providing curated and real-time updates on current events.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Knews' },
    { id: 3, image: '/assets/Project3.png', title: 'KIngredients', description: 'A recipe discovery app helping users explore culinary delights with detailed ingredient lists.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/food-ingredients' },
    { id: 4, image: '/assets/Project4.png', title: 'KCart', description: 'A shopping cart application simplifying online purchasing with seamless checkout processes.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Cart' },
    { id: 5, image: '/assets/Project5.png', title: 'K-To-Do-List', description: 'A productivity tool enabling users to manage tasks, set reminders, and track progress.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/To-Do-List' },
    { id: 6, image: '/assets/Project6.png', title: 'K-Blogs', description: 'A blogging platform for users to share thoughts, experiences, and insights on various topics.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/Blog-Website' },
    { id: 7, image: '/assets/Project7.png', title: 'Konnectify', description: 'A social networking site facilitating connections through shared interests and networking opportunities.', repoLink: 'https://github.com/KanishkaMohata21/Connectify' },
    { id: 8, image: '/assets/Project8.png', title: 'KWeather', description: 'A weather forecasting application providing accurate updates on local and global weather conditions.', repoLink: 'https://github.com/KanishkaMohata21/MERN-Projects-Web/tree/main/weather-app' },
    { id: 9, image: '/assets/Project9.png', title: 'KrowdFund', description: 'A crowdfunding platform empowering individuals to raise funds for creative projects and charitable causes.', repoLink: 'https://github.com/KanishkaMohata21/Web3/tree/main/CrowdFund' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-0">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
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
              <p className="text-gray-600 text-center">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
