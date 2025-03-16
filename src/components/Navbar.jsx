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
      <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[1rem] md:mx-auto p-4 mt-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-11 filter drop-shadow-[0_0_15px_white]"
              alt="WISPP Logo"
            />
            <span className="filter  drop-shadow-[0_0_15px_white] self-center text-4xl font-bold whitespace-nowrap text-white hidden md:block">
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
            <ul className="flex flex-col md:gap-6 items-center justify-center font-bold p-4 md:p-0 mt-4  bg-[#006494] md:bg-[#051923] rounded-2xl rounded-tr-none transition-all duration-300 ease-in-out origin-top-right md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-[#006494] hover:bg-[#0582ca] cursor-pointer font-bold rounded-lg px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Choose a level ▼{" "}
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
