import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import useGithubInfo from "../../hooks/useGithubInfo";

const HomePage = () => {
  const data = useGithubInfo();
  const imgUrl = data.avatar_url;

  const { ref: projectTextRef, inView: projectTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when the element is 50% in the viewport
  });

  const { ref: projectButtonRef, inView: projectButtonInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-linear-to-r from-cyan-600 to-blue-500 text-white font-sans">
      <section
        className="relative flex items-center justify-between lg:h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://via.placeholder.com/1920x1080)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="pt-40 pb-20 relative z-10 flex flex-col lg:pt-20 lg:flex-row items-center justify-center w-full px-5 text-center lg:text-left ">
          <div className=" lg:w-1/2 flex flex-col text-center justify-center items-center">
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
                window.open(
                  "https://www.linkedin.com/in/m-ahmad-sohail-523653252/"
                );
              }}
              className="mt-6 w-70 py-3 bg-blue-600 rounded-full text-xl transition transform cursor-pointer hover:bg-blue-800 animate__animated animate__fadeIn animate__delay-3s"
            >
              Visit my Linkedin!
            </button>
          </div>
          {/* Image on the right */}
          <div className="flex lg:w-1/2 mt-8 lg:mt-0 items-center justify-center">
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="Profile Picture"
                className="rounded-full shadow-xl shadow-gray-900 max-w-full h-auto animate__animated animate__fadeIn animate__delay-2s"
              />
            ) : (
              "Loading Profile Picture..."
            )}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-white mb-10">Stats</h2>
          <div className="pr-10 pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className=" bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">
                Followers on Linkedin
              </h3>
              <p className="text-lg text-white">930+</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">
                Public Repos on Github
              </h3>
              <p className="text-lg text-white">{data.public_repos}</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl text-blue-500 mb-4">
                Followers on Github
              </h3>
              <p className="text-lg text-white">{data.followers}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-center">
        <h2
          ref={projectTextRef}
          className={`text-3xl text-white mb-4 transition-transform duration-500 ${
            projectTextInView ? "animate__animated animate__slideInLeft" : ""
          }`}
        >
          You can checkout my projects on Github!
        </h2>
        <button
          ref={projectButtonRef}
          onClick={() => {
            window.open(
              "https://github.com/ahmadsohailMask01?tab=repositories"
            );
          }}
          className={`cursor-pointer mt-6 px-6 py-3 bg-white text-blue-600 rounded-full text-xl transform hover:scale-110 transition-all ${
            projectButtonInView ? "animate__animated animate__slideInLeft" : ""
          }`}
        >
          Visit Projects
        </button>
      </section>
    </div>
  );
};

export default HomePage;
