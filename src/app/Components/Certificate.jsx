"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const certificates = [
    {
      id: 1,
      name: 'Ethereum and Solidity: The Complete Developers Guide',
      content: 'Comprehensive course on developing DApps on Ethereum using Solidity.',
      imageUrl: '/assets/blockchain.jpeg',
    },
    {
      id: 2,
      name: 'The Complete 2024 Web Development Bootcamp',
      content: 'Mastered HTML, CSS, JavaScript, React, and Node.js through hands-on projects.',
      imageUrl: '/assets/webdev.jpeg',
    },
    {
      id: 3,
      name: 'Crash Course of Python',
      content: 'Intensive introduction to Python covering syntax, data structures, and functions.',
      imageUrl: '/assets/python.jpeg',
    },
    {
      id: 4,
      name: 'Flutter & Dart - The Complete Guide [2024 Edition]',
      content: ' I learned to build responsive UIs, manage state using Flutter.',
      imageUrl: '/assets/flutter.jpeg',
    },
];

const Certificates = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='flex justify-center mx-auto'>
    <div className="certificates flex justify-center mx-auto max-w-2xl">
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white', fontSize: '30px', fontWeight: 'bolder', marginTop: '12px' }}>Certificates</h2>
      <div className="certificates-list">
        {certificates.map(({ id, name, content, imageUrl }) => (
          <div
            key={id}
            className={`certificate ${flipped[id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(id)}
          >
            <div className="certificate-inner">
              <div className="certificate-front flex text-center col">
                <h2>{name}</h2>
                <p>{content}</p>
                <h3 className='mt-11 text-black font-bold'>CLICK ME</h3>
              </div>
              <div className="certificate-back">
                <Image src={imageUrl} alt={name} width={300} height={200} />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <style jsx>{`
        .certificates {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .certificates-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          margin: 0;
        }
        .certificate {
          perspective: 500px;
          cursor: pointer;
          margin: 15px;
          width: 290px;
          height: 250px;
          border-radius: 16px;
        }
        .certificate-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .certificate-inner h2 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .certificate-inner p {
          font-size: 16px;
        }
        .certificate.flipped .certificate-inner {
          transform: rotateY(180deg);
        }
        .certificate-front,
        .certificate-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 20px;
          border-radius: 10px;
        }
        .certificate-front {
          background: linear-gradient(135deg, #6b2b5f, #b182e3);
          color: white;
        }
        .certificate-back {
          background: #f8f8f8;
          transform: rotateY(180deg);
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Certificates;
