import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:kanishkamohata21@gmail.com" aria-label="Gmail" className="hover:text-gray-400">
            <FaEnvelope size={24} />
          </a>
          <a href="https://linkedin.com/in/kanishka-mohata-86baa8256" aria-label="LinkedIn" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/KanishkaMohata21" aria-label="GitHub" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://leetcode.com/u/KanishkaMohata/" aria-label="LeetCode" className="hover:text-gray-400">
            <FaCode size={24} />
          </a>
        </div>
        <p className="text-center">© 2024 Kanishka Mohata. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
