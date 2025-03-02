import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after navigating to a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[rgba(17,24,39,0.5)] shadow-lg fixed w-full z-100 top-0 left-0">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="text-white text-3xl font-bold">
          <NavLink
            to="/"
            className="hover:text-blue-500 transition duration-300"
          >
            <img src="/assets/Logo.png" className="w-40 h-20 rounded-md" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `text-lg ${
                isActive ? "text-orange-700" : "text-white"
              } text-bold text-lg hover:text-blue-500 transition duration-300 text-bold`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-white"
              } text-lg text-bold hover:text-blue-500 transition duration-300 text-bold`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-white"
              } text-lg text-bold hover:text-blue-500 transition duration-300 text-bold`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 ${
          isOpen
            ? "block animate__animated animate__fadeIn animate__faster"
            : "hidden animate__animated animate__fadeOut animate__faster"
        } transition-all duration-300 ease-in-out`}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) => {
            return `block ${
              isActive ? "text-orange-700" : "text-white"
            } text-lg py-3 px-4 hover:text-blue-500 transition duration-300`;
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={handleLinkClick}
          className={({ isActive }) => {
            return `block ${
              isActive ? "text-orange-700" : "text-white"
            } text-lg py-3 px-4 hover:text-blue-500 transition duration-300`;
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={handleLinkClick}
          className={({ isActive }) => {
            return `block ${
              isActive ? "text-orange-700" : "text-white"
            } text-lg py-3 px-4 hover:text-blue-500 transition duration-300`;
          }}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
