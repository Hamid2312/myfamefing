import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/WhatsApp_Image_2024-01-29_at_14.15.44_a1d382f1-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle side menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="mr-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FBF2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex md:items-center md:space-x-8 text-[18.6px] font-sans font-bold">
          <Link to="/" className="text-[#00FBF2]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#00FBF2]">
            About Us
          </Link>
          <Link to="/services" className="hover:text-[#00FBF2]">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-[#00FBF2]">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-[#00FBF2]">
            Contact Us
          </Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block ml-3">
          <Link
            to="/services"
            className="inline-block w-[168px] h-[52px] text-[18.6px] font-sans text-[#00FBF2] font-montserrat border-2 border-[#00FBF2] bg-black transition-all duration-300 transform hover:text-black hover:bg-white hover:border-[#00FBF2] hover:scale-95 hover:translate-x-[-5px] py-2 pl-7 mr-3"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-black text-white p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
        >
          &times; {/* Cross button */}
        </button>
        <div className="flex flex-col space-y-6 mt-10 text-[18.6px] font-sans font-bold">
          <Link to="/" className="hover:text-[#00FBF2]" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-[#00FBF2]" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/services" className="hover:text-[#00FBF2]" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-[#00FBF2]" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-[#00FBF2]" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
