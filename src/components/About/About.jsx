// src/components/About.jsx
import React from "react";
import "animate.css"; // Import Animate.css for animations
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const About = () => {
  return (
    <div className="pt-50 pb-30 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 via-gray-400 to-gray-900">
      <div className="m-3 max-w-4xl w-full p-8 bg-cyan-600 rounded-xl shadow-xl opacity-90">
        {/* Animation for the title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8 animate__animated animate__fadeInDown">
          Crafting Clean, Responsive Web Experiences
        </h1>

        {/* Animation for the description */}
        <p className="text-xl text-gray-700 text-justify mb-6 animate__animated animate__fadeInLeft">
          I'm a passionate web developer with expertise in creating modern,
          responsive, and user-friendly websites. I love building web
          applications that not only look great but are also highly functional.
          My tech stack includes React, JavaScript (with strong foundation), and
          Tailwind CSS.
        </p>

        {/* Animation for the technologies list */}
        <div className="text-center mb-8 animate__animated animate__fadeInRight">
          <h3 className="text-2xl text-gray-800 font-semibold mb-4">
            Technologies I Use
          </h3>
          <ul className="list-none text-lg space-y-3">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Git / GitHub</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Animation for the button */}
        <div className="text-center animate__animated animate__fadeInUp">
          <Popup
            trigger={
              <button
                className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md
          transform transition-all duration-300 hover:bg-purple-600
          hover:scale-105"
              >
                {" "}
                Let's Collaborate!
              </button>
            }
            position="right center"
          >
            <div className="flex flex-col text-center">
              <span>Here's my Whatsapp Number!</span>{" "}
              <span>+92334-4521497</span>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default About;
