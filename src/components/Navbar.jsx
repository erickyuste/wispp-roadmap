import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setIsLevelsDropdownOpen] = useState(false);
  const location = useLocation();
  const levelsDropdownRef = useRef(null);

  const toggleNavDropdown = () => {
    setIsNavDropdownOpen(!isNavDropdownOpen);
  };

  const toggleLevelsDropdown = () => {
    setIsLevelsDropdownOpen(!isLevelsDropdownOpen);
  };

  const closeLevelsDropdown = () => {
    setIsLevelsDropdownOpen(false);
  };

  useEffect(() => {
    setIsLevelsDropdownOpen(false);
    setIsNavDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        levelsDropdownRef.current &&
        !levelsDropdownRef.current.contains(event.target)
      ) {
        setIsLevelsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [levelsDropdownRef]);

  return (
    <div className="w-full">
      <nav className="bg-[#006494] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-9" alt="WISPP Logo" />
            <span className="self-center text-3xl font-bold whitespace-nowrap text-white hidden md:block">
              WISPP
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isNavDropdownOpen}
            onClick={toggleNavDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full font-bold text-white py-2 px-3 rounded-sm  md:hover:bg-transparent md:border-0 hover:text-[#006494] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent cursor-pointer"
                  onClick={toggleLevelsDropdown}
                >
                  <span className="flex items-center justify-center rounded-xl hover:bg-white w-[6rem] hover:text-[#006494] transition-all duration-300 ease-in-out">
                    Levels
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  ref={levelsDropdownRef}
                  id="dropdownNavbar"
                  className={`${
                    isLevelsDropdownOpen ? "block" : "hidden"
                  } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/kinder"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        Kinder
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pre-p"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        Pre-P
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g1"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g2"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G2
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g3"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g4"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G4
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g5"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/g6"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeLevelsDropdown}
                      >
                        G6
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
