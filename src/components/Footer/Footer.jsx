import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <img src="/assets/Logo.png" className="w-40 h-20 mb-5 rounded-md" />
            <p className="text-lg text-justify">
              We provide the best web development services to help your business
              grow online. Join us to take your business to the next level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-orange-700" : "text-white"
                    } hover:text-blue-500 transition duration-300`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-orange-700" : "text-white"
                    } hover:text-blue-500 transition duration-300`;
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 2L6 14m0 0L18 26m-12-12h12"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15C9.1 15 10 15.9 10 17C10 18.1 9.1 19 8 19ZM8 17C7.4 17 7 16.6 7 16C7 15.4 7.4 15 8 15C8.6 15 9 15.4 9 16C9 16.6 8.6 17 8 17ZM12 9C10.9 9 10 8.1 10 7C10 5.9 10.9 5 12 5C13.1 5 14 5.9 14 7C14 8.1 13.1 9 12 9ZM12 7C11.4 7 11 6.6 11 6C11 5.4 11.4 5 12 5C12.6 5 13 5.4 13 6C13 6.6 12.6 7 12 7Z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3C6.48 3 2 7.48 2 12C2 16.52 6.48 21 12 21C17.52 21 22 16.52 22 12C22 7.48 17.52 3 12 3ZM10.5 14H8V10H10.5V14ZM9.25 8.5C8.56 8.5 8 8.06 8 7.5C8 6.94 8.56 6.5 9.25 6.5C9.94 6.5 10.5 6.94 10.5 7.5C10.5 8.06 9.94 8.5 9.25 8.5ZM16 14H13.5V10.5C13.5 9.67 12.83 9 12 9C11.17 9 10.5 9.67 10.5 10.5V14H8V10H10.5V10.5C10.5 8.01 12.86 7 14.5 7C16.14 7 17 8.01 17 9.5V14Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MASK Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
