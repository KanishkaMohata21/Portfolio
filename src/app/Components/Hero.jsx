"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12"
      style={{ marginTop: "-20px" }}
    >
      {" "}
      {/* Adjusted mt-0 and md:mt-8 */}
      <div className="col-span-7 place-self-center text-center md:text-left ml-2">
        <h2 className="text-white mb-1 text-2xl md:text-4xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I am{" "}
          </span>{" "}
          <TypeAnimation
            sequence={[
              "Kanishka Mohata",
              1000,
              "Web Developer",
              1000,
              "Blockchain Developer",
              1000,
              "C++ and Python Developer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#ADB7BE]" style={{ textAlign: "justify" }}>
          A proficient MERN and blockchain developer passionate about creating
          scalable web and decentralized applications, driving innovation with
          modern web technologies and blockchain solutions.I have a B.E in
          Computer Science and Engineering(Data Science)
        </p>
        <div className="">
          <button className="px-6 py-3 rounded-full mr-4 mt-4 bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white">
            <a href="mailto:kanishkamohata21@gmail.com">Hire Me</a>
          </button>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border border-white">
            <a href="/assets/KanishkaMohata (2).pdf">Download CV</a>
          </button>
        </div>
      </div>
      <div className="col-span-5 flex justify-center md:justify-end">
        <div className="w-3/4 md:w-auto relative">
          <Image
            src="/assets/KanishkaMohata.png"
            alt="myimage"
            width={350}
            height={350}
            className="rounded-full border-4 border-white mt-12 mr-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
