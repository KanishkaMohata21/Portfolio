"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const renderContent = () => {
    switch (activeTab) {
      case 'Skills':
        return <div className='mt-4 text-[#ADB7BE] flex gap-1 flex-col'>
          <ul className='mt-4 text-[#ADB7BE]'>
            <li><span className="font-bold">Skills:</span> MERN Stack, Blockchain Development</li>
            <li><span className="font-bold">Languages:</span>  C++, Javascript, Python</li>
            <li><span className="font-bold">Database:</span> MongoDB, MySQL, Postgres</li>
            <li><span className="font-bold">Tools:</span> VS Code, Postman, Ethereum</li>
        </ul>
        </div>;
      case 'Experience':
        return <div className='mt-4 text-[#ADB7BE] flex gap-1 flex-col'>
            <h4>-Web Developer at YPP Technologies</h4>
            <h4>-React Native Developer at Skatesmen</h4>
        </div>;
      case 'Education':
        return <div className='mt-4 text-[#ADB7BE] flex gap-1 flex-col'>
            <h4>-B.E in Computer Science and Engineering(Data Science)</h4>
        </div>;
      case 'Certification':
        return <div className='mt-4 text-[#ADB7BE] flex gap-1 flex-col'>
            <h4>-Ethereum and Solidity : The Complete Developers Guide</h4>
            <h4>-The Complete 2024 Web Development Bootcamp</h4>
            <h4>-Crash Course of Python</h4>
            <h4>-100 Days of code : The complete Python Pro Bootcamp(Pursuing)</h4>
        </div>;
      default:
        return null;
    }
  };

  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 xl:gap-16 sm:py-16">
        <Image 
          src='/assets/Computer.jpg'
          height={400}
          width={450}
          alt='computer'
        />
        <div>
            
          <h2 className='text-3xl font-bold text-white mb-2'>About Me</h2>
          <p className="text-[#ADB7BE]" style={{ textAlign: "justify" }}>

          Kanishka Mohata is a MERN and blockchain developer focused on building scalable web and decentralized applications. With a background in Computer Science and Engineering, Kanishka is passionate about leveraging modern technologies to drive innovation.
        </p>
          <div className="flex flex-row mt-4">
            {['Skills', , 'Experience' ,'Certification', 'Education', ].map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mr-4 cursor-pointer ${activeTab === tab ? 'text-pink-500' : 'text-[#ADB7BE]'} hover:text-white`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="h-40 overflow-x-auto  flex  "> {/* Fixed height for content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
