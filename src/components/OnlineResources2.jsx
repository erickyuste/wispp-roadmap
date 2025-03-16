import React from "react";
import scootle from "../assets/scootle.png";
import SCSA from "../assets/SCSA.png";
import tinkercad from "../assets/tinkercad.png";
import turtlediary from "../assets/turtlediary.png";
import twinkle from "../assets/twinkle.png";
import wordwall from "../assets/wordwall.png";
import khanacademy from "../assets/khanacademy.png";
import polypad from "../assets/polypad.png";

function OnlineResources2() {
  return (
    <div className="logos w-[100%] md:w-[750px] lg:w-[850px] relative bg-[#051923] overflow-hidden whitespace-nowrap">
      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideright_15s_linear_infinite] mr-4 mt-2">
        <a href="https://www.scootle.edu.au/ec/p/home" target="_blank">
          <img
            src={scootle}
            alt="scootle-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.scsa.wa.edu.au/" target="_blank">
          <img
            src={SCSA}
            alt="SCSA-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  filter invert cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.tinkercad.com/" target="_blank">
          <img
            src={tinkercad}
            alt="tinkercad-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.turtlediary.com/" target="_blank">
          <img
            src={turtlediary}
            alt="turtlediary-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.twinkl.com/" target="_blank">
          <img
            src={twinkle}
            alt="twinkle-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.khanacademy.org/" target="_blank">
          <img
            src={khanacademy}
            alt="khanacademy-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://wordwall.net/" target="_blank">
          <img
            src={wordwall}
            alt="wordwall-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>

      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideright_15s_linear_infinite] mr-4">
        <a href="https://www.scootle.edu.au/ec/p/home" target="_blank">
          <img
            src={scootle}
            alt="scootle-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.scsa.wa.edu.au/" target="_blank">
          <img
            src={SCSA}
            alt="SCSA-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  filter invert cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.tinkercad.com/" target="_blank">
          <img
            src={tinkercad}
            alt="tinkercad-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.turtlediary.com/" target="_blank">
          <img
            src={turtlediary}
            alt="turtlediary-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.twinkl.com/" target="_blank">
          <img
            src={twinkle}
            alt="twinkle-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.khanacademy.org/" target="_blank">
          <img
            src={khanacademy}
            alt="khanacademy-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://wordwall.net/" target="_blank">
          <img
            src={wordwall}
            alt="wordwall-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>
    </div>
  );
}

export default OnlineResources2;
