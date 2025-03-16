import React from "react";
import { Link, useLocation } from "react-router-dom";
import australialogo from "../assets/australialogo.png";
import SCSA from "../assets/SCSA.png";
import youtubeLogo from "../assets/youtubeLogo.png";
import wisppLogo from "../assets/wisppLogo.png";
import website from "../assets/website.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

function Footer() {
  const location = useLocation();

  return (
    <div className="w-full">
      <footer
        className="w-[100%] flex flex-col items-center justify-center mt-[4rem]"
        id="footer-content"
      >
        <div className="flex w-full items-center justify-evenly">
          <div className="w-[100%] bg-[#003554] h-[1px] mt-4 rotate-180"></div>
          <h1 className="text-xs md:text-[1rem] mt-[1rem] w-[100%] md:w-[50%] border-1 border-[#003554] text-center py-1.5 text-gray-300 rounded-xl">
            © Erick Yuste⚡2025
          </h1>
          <div className="w-[100%] bg-[#003554] h-[1px] mt-4 rotate-180"></div>
        </div>

        <div className="w-[90vw] md:w-[800px] flex flex-col md:flex-row items-center justify-between mt-1 mb-8 px-4 md:px-0">
          <div className="w-[90vw] md:w-[350px] flex flex-col">
            <div className="flex flex-col gap-1">
              <div className="flex gap-3">
                <img
                  src={australialogo}
                  alt="australia-logo"
                  className="w-[10vw] md:w-[60px] rounded-lg"
                />
                <img
                  src={SCSA}
                  alt="SCSA-logo"
                  className="w-[10vw] md:w-[60px] invert filter"
                />
              </div>
              <p className="text-gray-400 text-wrap text-xs md:text-sm text-left mt-1">
                Content on this website is based on exemplars provided by the
                Western Australian Curriculum. No copyright infringement is
                intended. All rights reserved by the SCSA and WAC.
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.scsa.wa.edu.au/"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={website}
                  alt="www-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
              <a
                href="https://www.youtube.com/@westernaustraliaeducationn9792"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={youtubeLogo}
                  alt="www-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
            </div>
          </div>

          <div className="w-[90vw] md:w-[350px] flex flex-col mt-12">
            <div className="flex flex-col md:items-end gap-1">
              <img
                src={wisppLogo}
                alt="wispp-logo"
                className="w-[30vw] md:w-[200px] rounded-lg"
              />
              <p className="text-gray-400 text-wrap text-xs md:text-sm md:text-right mt-1">
                This website utilizes exemplars from the Western Australian
                Curriculum to support the educational programs at{" "}
                <span className="text-gray-100">
                  Westbridge International School of Phnom Penh
                </span>
                , under authorization. This usage is intended for educational
                purposes and does not represent a claim of copyright.
              </p>
            </div>
            <div className="flex items-end md:justify-end gap-4 mt-2">
              <a
                href="https://wispp.edu.kh/"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={website}
                  alt="www-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
              <a
                href="https://www.facebook.com/WestbridgeEdu/"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="facebook-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fwestbridgeedu%2F&is_from_rle"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="instagram-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
              <a
                href="https://www.youtube.com/@Westbridge_Edu"
                className="cursor-pointer"
                target="_blank"
              >
                <img
                  src={youtubeLogo}
                  alt="www-logo"
                  className="w-[1rem] md:w-[2rem] h-[1rem] md:h-[2rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
