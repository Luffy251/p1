import React from "react";

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
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Profile</a>
          <a href="#" className="text-gray-300 hover:text-white">Campaign</a>
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
            {/* You can replace this with a hamburger icon */}
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
        <a href="#" className="block text-gray-300 hover:text-white">Solutions</a>
        <a href="#" className="block text-gray-300 hover:text-white">Pricing</a>
        <a href="#" className="block text-gray-300 hover:text-white">About</a>
        <button className="w-full bg-white text-[#181048] py-2 px-4 rounded-full hover:bg-gray-200">
          Sign up
        </button>
      </nav>
    </header>
  );
}

export default Header;
