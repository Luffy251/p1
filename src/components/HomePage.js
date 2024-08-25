import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Import images
import myImage from "../assets/bitcoin-2714196_processed.jpg";
import exploreImage from "../assets/binoculars.png";
import howItWorksImage from "../assets/info.png";
import startCampaignImage from "../assets/social-media-marketing.png";

function MainSection() {
  return (
    <main className="flex flex-col items-center p-6 md:p-12 space-y-8">
      {/* Main Content and Image Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="text-center md:text-left flex justify-center md:justify-start items-center md:flex-1">
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
              <span>Start today</span> <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:flex-1">
          <img
            src={myImage}
            alt="Crowdfunding platform illustration"
            className="rounded-lg w-full h-auto max-w-md md:max-w-full"
          />
        </div>
      </div>

      {/* New Section: Options Horizontally Aligned */}
      <section className="flex flex-col items-center w-full mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0 md:space-x-8">
          {/* Option 1: Explore */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <img src={exploreImage} alt="Explore" className="w-24 h-24" />
            <h2 className="text-xl font-bold mt-4">Explore</h2>
            <p className="text-gray-300">Discover crowdfunding campaigns</p>
          </div>

          {/* Option 2: How It Works */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <img src={howItWorksImage} alt="How It Works" className="w-24 h-24" />
            <h2 className="text-xl font-bold mt-4">How It Works</h2>
            <p className="text-gray-300">
              Get introduced to crowdfunding and learn how to use AptFund
            </p>
          </div>

          {/* Option 3: Start Your Campaign */}
          <div className="flex flex-col items-center text-center md:w-1/3">
            <img
              src={startCampaignImage}
              alt="Start Your Campaign"
              className="w-24 h-24"
            />
            <h2 className="text-xl font-bold mt-4">Start Your Campaign</h2>
            <p className="text-gray-300">
              Walkthrough the steps before you start creating your campaign
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
