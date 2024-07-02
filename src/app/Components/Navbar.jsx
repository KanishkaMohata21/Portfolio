"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="p-2 mb-4 md:mb-2 bg-opacity-90">
      <div className="flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl text-white font-semibold">
          KM
        </Link>
        <div className="hidden md:block">
          <ul className="flex flex-row">
            <li className="p-3">
              <Link
                href="#home"
                className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
              >
                Home
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="#about"
                className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
              >
                About
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="#projects"
                className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li className="p-3">
              <Link
                href="#contact"
                className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-slate-200 flex items-center py-2 px-3 rounded border-slate-200 hover:text-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } md:hidden bg-black bg-opacity-100 w-full mt-2`}
        id="navbar"
      >
        <ul className="flex flex-col items-center">
          <li className="p-3">
            <Link
              href="#home"
              className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link
              href="#about"
              className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
            >
              About
            </Link>
          </li>
          <li className="p-3">
            <Link
              href="#projects"
              className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li className="p-3">
            <Link
              href="#contact"
              className="block py-2 pl-3 text-[#ADB7BE] sm:text-small rounded hover:text-white"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
