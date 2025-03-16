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
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[1rem] md:mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-11 filter drop-shadow-[0_0_10px_white]"
              alt="WISPP Logo"
            />
            <span className="filter  drop-shadow-[0_0_10px_white] self-center text-4xl font-bold whitespace-nowrap text-white hidden md:block">
              WISPP
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            id="nav-toggler"
            type="button"
            className="border-1 rounded-[50%] p-1 inline-flex items-center w-10 h-10 justify-center text-lg text-white md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded={isNavDropdownOpen}
            onClick={toggleNavDropdown}
          >
            <span
              className={`material-symbols-rounded transition-transform duration-300 absolute ${
                isNavDropdownOpen
                  ? "opacity-0 rotate-90"
                  : "opacity-100 rotate-0"
              }`}
            >
              menu
            </span>
            <span
              className={`material-symbols-rounded transition-transform duration-300 absolute ${
                isNavDropdownOpen
                  ? "opacity-100 rotate-90"
                  : "opacity-0 rotate-0"
              }`}
            >
              close
            </span>
          </button>

          <div
            className={`${
              isNavDropdownOpen ? "block" : "hidden"
            } md:block absolute md:relative w-[50%] right-10 top-16 md:top-0 md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col gap-6 items-center justify-center font-bold p-4 md:p-0 mt-4  bg-[#006494] md:bg-[#051923] rounded-2xl rounded-tr-none transition-all duration-200 ease-in-out origin-top-right md:flex-row md:mt-0 md:border-0">
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

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Choose a level{" "}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="/kinder"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Kinder
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pre-p"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Pre-Primary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g1"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g2"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g3"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g4"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 4
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g5"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 5
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g6"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Grade 6
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
