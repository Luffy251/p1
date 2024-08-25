import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  return (
    <header className="bg-[#181048] p-6 md:p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          Apt Fund
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
          <Link to="/campaign" className="text-gray-300 hover:text-white">Campaign</Link>
          <Link to="/swap" className="text-gray-300 hover:text-white">Swap</Link>
        </nav>

        {/* Sign Up Button */}
        <div className="hidden md:flex">
          <button className="bg-white text-[#181048] py-2 px-4 rounded-full hover:bg-gray-200">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="md:hidden mt-4 space-y-2">
        <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
        <Link to="/profile" className="block text-gray-300 hover:text-white">Profile</Link>
        <Link to="/campaign" className="block text-gray-300 hover:text-white">Campaign</Link>
        <Link to="/swap" className="block text-gray-300 hover:text-white">Swap</Link>
        <button className="w-full bg-white text-[#181048] py-2 px-4 rounded-full hover:bg-gray-200">
          Sign up
        </button>
      </nav>
    </header>
  );
}

export default Header;
