import React from "react";
import { FaArrowRight } from "react-icons/fa";
// Import the image from the components folder
import myImage from "./bitcoin-2714196_processed.jpg"; // Replace 'bitcoin-2714196_processed.jpg' with your actual image file name

function MainSection() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center md:items-center p-6 md:p-12 space-y-8 md:space-y-0 md:space-x-12">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left flex justify-center md:justify-start items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mt-4">
            Crowdfunding, Simplified and Secured
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Welcome to AptFund, the future of crowdfunding—where raising funds is
            secure, transparent, and completely hassle-free. Harness the power of
            blockchain to turn your ideas into reality with a platform designed for
            trust, efficiency, and seamless project support. Your vision, our mission, a brighter future together.
          </p>
          <button className="mt-6 bg-white text-[#181048] py-2 px-6 rounded-full flex items-center justify-center space-x-2 mx-auto md:mx-0">
            <span>Start free today</span> <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full md:w-auto flex justify-center items-center">
        <img
          src={myImage}
          alt="Crowdfunding platform illustration"
          className="rounded-lg w-full h-auto max-w-md md:max-w-full"
        />
      </div>
    </main>
  );
}

export default MainSection;
