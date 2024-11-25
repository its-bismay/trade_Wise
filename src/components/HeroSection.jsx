import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <>
      <section className="h-screen flex flex-col bg-gray-100">
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 sm:px-8 lg:px-12 mx-auto md:space-x-20">
            <div className="md:w-7/12 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Simplify Cross-Border Trade with AI-Powered Insights
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl">
                Navigate global trade complexities with confidence using our
                AI-driven platform that streamlines compliance, discovers
                opportunities, and minimizes risks.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => {navigate('/services')}} className="px-6 py-3 bg-black text-white rounded-md">
                  Get Started
                </button>
                <button onClick={() => {navigate('/about')}} className="px-6 py-3 border border-black text-gray-600 rounded-md hover:bg-gray-200">
                  Learn more
                </button>
              </div>
            </div>

            <div className="md:w-5/12 flex justify-center">
              <img
                src="world.png"
                alt="Placeholder"
                className="w-full max-w-3xl h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
