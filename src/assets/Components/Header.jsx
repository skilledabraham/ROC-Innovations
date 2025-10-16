import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">E-Shop</a>
        </div>

        {/* Navbar */}
        <nav className="flex space-x-6">
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
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="w-5 h-5 text-gray-500 absolute left-3 top-2.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l7 7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
