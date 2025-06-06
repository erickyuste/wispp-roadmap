import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function HomapageNavbar() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setIsLevelsDropdownOpen] = useState(false);
  const location = useLocation();
  const levelsDropdownRef = useRef(null);
  const buttonRef = useRef(null);

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

  const toggleLevelsDropdown = () => {
    setIsLevelsDropdownOpen(!isLevelsDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        levelsDropdownRef.current &&
        !levelsDropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsLevelsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [levelsDropdownRef]);

  return (
    <nav className="pt-4 absolute top-0 z-100 w-full">
      <div className="w-full flex flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse md:ml-20 ml-0"
        >
          <img
            src={logo}
            data-aos="fade-down"
            data-a0s-duration="1500"
            className=" h-11 filter drop-shadow-[0_0_10px_white]"
            alt="WISPP Logo"
          />
          <span
            data-aos="fade-down"
            data-a0s-duration="1500"
            className="filter drop-shadow-[0_0_10px_white] self-center text-xl font-bold whitespace-nowrap text-white hidden lg:block"
          >
            Westbridge International<br></br>
            School of Phnom Penh
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          id="nav-toggler"
          type="button"
          className="border-2 rounded-[50%] p-1 inline-flex items-center w-10 h-10 justify-center text-lg text-white md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isNavDropdownOpen}
          onClick={toggleNavDropdown}
        >
          <span
            className={`material-symbols-rounded transition-transform duration-300 absolute ${
              isNavDropdownOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          >
            menu
          </span>
          <span
            className={`material-symbols-rounded transition-transform duration-300 absolute ${
              isNavDropdownOpen ? "opacity-100 rotate-90" : "opacity-0 rotate-0"
            }`}
          >
            close
          </span>
        </button>

        <div
          className={`${
            isNavDropdownOpen ? "block" : "hidden"
          } absolute md:relative md:top-0 w-[50%] right-12 md:right-0 mr-0 md:mr-20 top-15 md:block md:w-auto `}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center z-10 font-medium bg-[#006494] md:bg-transparent p-4 md:p-0 mt-4 border rounded-xl rounded-tr-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="https://wispp.edu.kh/"
                data-aos="fade-down"
                data-a0s-duration="1500"
                className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent drop-shadow-[0_0_10px_white]"
                aria-current="page"
                target="_blank"
              >
                WISPP
              </a>
            </li>
            <li>
              <a
                href="https://www.scsa.wa.edu.au/"
                data-aos="fade-down"
                data-a0s-duration="2000"
                className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent drop-shadow-[0_0_10px_white]"
                aria-current="page"
                target="_blank"
              >
                WAC
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/12g91T_ZBaHrTSDJMdfss8l-WqRT0yr58?usp=sharing"
                data-aos="fade-down"
                data-a0s-duration="2000"
                className="block py-2 px-3 font-bold text-white text-center rounded-xl hover:bg-white w-[5rem] hover:text-[#006494] transition-all duration-300 ease-in-out md:bg-transparent md:p-0 md:dark:text-blue-500 md:dark:bg-transparent drop-shadow-[0_0_10px_white]"
                aria-current="page"
                target="_blank"
              >
                GDrive
              </a>
            </li>
            <li className="relative">
              <button
                data-aos="fade-down"
                data-a0s-duration="2500"
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full font-bold cursor-pointer bg-[#006494] relative z-100 rounded-lg"
                onClick={toggleLevelsDropdown}
              >
                <span className="flex items-center justify-center p-2 rounded-lg w-[10rem] transition-all duration-100 ease-in-out text-white hover:border-2 border-gray-100 md:border-0 hover:border-white">
                  Get Started!
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
                }  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 relative md:absolute mt-2 z-1`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 w-full rounded-lg"
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
                  <li>
                    <Link
                      to="/g7"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeLevelsDropdown}
                    >
                      G7
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g8"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeLevelsDropdown}
                    >
                      G8
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g9"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeLevelsDropdown}
                    >
                      G9
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/g10"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeLevelsDropdown}
                    >
                      G10
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomapageNavbar;
