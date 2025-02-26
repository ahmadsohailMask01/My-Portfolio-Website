import React, { useState } from "react";
import { useEffect } from "react";
import "animate.css";
import useGithubInfo from "../../hooks/useGithubInfo";
const HomePage = () => {
  const data = useGithubInfo();
  const imgUrl = data.avatar_url;

  return (
    <div className="bg-gray-800 text-white font-sans">
      <section
        className="relative flex items-center justify-between h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1920x1080)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full px-5 text-center lg:text-left">
          <div className="lg:w-1/2 flex flex-col text-center justify-center items-center">
            <h1 className="text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
              Hi, meet
            </h1>
            <h1 className="text-5xl font-bold animate__animated animate__fadeIn animate__delay-1s">
              Muhammad Ahmad Sohail
            </h1>
            <p className="mt-4 text-3xl animate__animated animate__fadeIn animate__delay-2s">
              Web Application Developer
            </p>
            <button
              onClick={() => {
                window.open("https://github.com/ahmadsohailMask01");
              }}
              className="mt-6 w-70 py-3 bg-blue-600 rounded-full text-xl transition transform cursor-pointer hover:bg-blue-800 animate__animated animate__fadeIn animate__delay-3s"
            >
              Visit my Github!
            </button>
          </div>
          {/* Image on the right */}
          <div className="flex lg:w-1/2 mt-8 lg:mt-0 items-center justify-center">
            <img
              src={imgUrl}
              alt="Profile Picture"
              className="rounded-full shadow-xl max-w-full h-auto animate__animated animate__fadeIn animate__delay-2s"
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-white mb-10">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">Feature 1</h3>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">Feature 2</h3>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">Feature 3</h3>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-center">
        <h2 className="text-3xl text-white mb-4">
          Start your journey with us today!
        </h2>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full text-xl transform hover:scale-110 transition-all">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
