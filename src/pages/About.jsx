import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-50 mb-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Row 1: Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl">
        <img
          src="https://images.pexels.com/photos/7948073/pexels-photo-7948073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Global Expansion"
          className="w-full lg:w-1/2 h-[300px] object-cover rounded-md shadow-md"
        />
        <p className="text-lg text-gray-700 lg:w-1/2">
          Welcome to <span className="font-bold">TradeWise</span>, your
          AI-powered assistant for simplifying cross-border trade. Our platform
          is designed to make international expansion easy and accessible for
          businesses worldwide. With features like real-time regulatory updates,
          financial incentive discovery, and AI-driven compliance advice, we aim
          to empower businesses to grow globally without hassle.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full my-8 border-t-2 border-gray-200"></div>

      {/* Row 2: Text Left, Image Right */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 w-full max-w-6xl">
        <img
          src="https://images.pexels.com/photos/16380906/pexels-photo-16380906/free-photo-of-webpage-of-ai-chatbot-a-prototype-ai-smith-open-chatbot-is-seen-on-the-website-of-openai-on-a-apple-smartphone-examples-capabilities-and-limitations-are-shown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="AI Solutions"
          className="w-full lg:w-1/2 h-[300px] object-cover rounded-md shadow-md"
        />
        <p className="text-lg text-gray-700 lg:w-1/2">
          TradeWise leverages cutting-edge technologies like{" "}
          <span className="font-bold">GPT-4</span> for generating compliance
          advice, Scikit-Learn for risk assessments, and MongoDB for efficient
          data management. By streamlining compliance, identifying market risks,
          and automating documentation, we reduce reliance on costly consultants
          and enable businesses to focus on their growth.
        </p>
      </div>
    </div>
  );
};

export default About;
