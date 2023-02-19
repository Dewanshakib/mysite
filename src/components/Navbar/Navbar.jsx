import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo = "DMSAM";
  const [showMenu, setShowMenu] = useState(false);


  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="w-full h-20 flex items-center justify-between">
      <a href="/" className="text-[28px] font-medium md:text-3xl">
        {logo}
      </a>

      {/* Desktop view  */}
      <ul className="hidden md:flex">
        <li className="px-5  cursor-pointer text-xl text-gray-800 hover:text-gray-500">
        <Link to="/Home">
            Home
            </Link>
        </li>
        <li className="px-5   cursor-pointer text-xl text-gray-800 hover:text-gray-500">
        <Link to="/Intro">
            Intro
            </Link>
        </li>
        <li className="px-5   cursor-pointer text-xl text-gray-800 hover:text-gray-500">
        <Link to="/About">
            About
            </Link>
        </li>
        <li className="px-5   cursor-pointer text-xl text-gray-800 hover:text-gray-500">
        <Link to="/Project">
            Project
            </Link>
        </li>
      </ul>

      {/* Hamburger Menu  */}
      {!showMenu ? (
        <button onClick={handleMenu} className="sm:hidden">
          <img src="./Bars_B.svg" alt="Bars" />
        </button>
      ) : (
        <button onClick={handleMenu}  className="sm:hidden">
          <img src="./Xmark_B.svg" alt="Bars" />
        </button>
      )}

      {showMenu ? (
        <ul className="fixed top-0 right-0 bg-gray-600 w-full text-center h-screen md:hidden">
          <button onClick={handleMenu} className="absolute top-5 right-6">
            <img src="./Xmark_B.svg" alt="Bars" />
          </button>
          <li className="my-32 text-4xl font-medium  transform transition-all deley-600 hover:text-gray-300">
            <Link to="/Home">
            Home
            </Link>
          </li>
          <li className="my-32 text-4xl font-medium transform transition-all deley-600 hover:text-gray-300">
          <Link to="/Intro">
            Intro
            </Link>
          </li>
          <li className="my-32 text-4xl font-medium transform transition-all deley-600 hover:text-gray-300">
          <Link to="/About">
            About
            </Link>
          </li>
          <li className="my-32 text-4xl font-medium transform transition-all deley-600 hover:text-gray-300">
          <Link to="/Project">
            Project
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
