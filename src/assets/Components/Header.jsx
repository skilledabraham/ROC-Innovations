import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white min-w-screen  shadow-md">
      <div className="container min-w-screen mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold pl-10 text-gray-800">
          <a href="/" className="text-orange-600">
            Posi Bello
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-20">
          <a href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="/shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative pr-10 bg-#dfe0df">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 ease-in-ease-out text-orange-400 hover:size-[1.1em]" />
          <input
            type="text"
            placeholder="Search..."
            className="border-1 placeholder-orange-300 border-orange-600 rounded-full hover:shadow-md hover:shadow-grey-500 hover:border-orange-600 py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
