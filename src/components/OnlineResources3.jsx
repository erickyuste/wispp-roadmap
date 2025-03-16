import React from "react";
import polypad from "../assets/polypad.png";
import fluency from "../assets/fluency.png";
import didax from "../assets/didax.png";
import gamestolearnenglish from "../assets/gamestolearnenglish.png";
import abbythepup from "../assets/abbythepup.png";
import superteacher from "../assets/superteacher.png";

function OnlineResources3() {
  return (
    <div className="logos w-[100%] md:w-[750px] lg:w-[850px] relative bg-[#051923] overflow-hidden whitespace-nowrap">
      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideleft_15s_linear_infinite] mr-4 mt-2">
        <a href="https://polypad.amplify.com/" target="_blank">
          <img
            src={polypad}
            alt="polypad-logo"
            className="inline-flex h-[6vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.superteacherworksheets.com/" target="_blank">
          <img
            src={superteacher}
            alt="superteacher-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a
          href="https://www.abbythepup.com/?gad_source=1&gclid=Cj0KCQjwhMq-BhCFARIsAGvo0KcXlBdeRiA4TYkGACrRY3aRtLzJES2UKFe8GchiAtqxdX93nqXxxQIaArJ-EALw_wcB"
          target="_blank"
        >
          <img
            src={abbythepup}
            alt="abbythepup-logo"
            className="inline-flex h-[8vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.gamestolearnenglish.com/" target="_blank">
          <img
            src={gamestolearnenglish}
            alt="classgamestolearnenglish-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://fluency.amplify.com/" target="_blank">
          <img
            src={fluency}
            alt="fluency-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a
          href="https://www.didax.com/math/virtual-manipulatives.html?srsltid=AfmBOoqwRaHKeMFCO0-esg3KOjIoWnnRbegTO2ScrPiTJHx6yXeB1j97"
          target="_blank"
        >
          <img
            src={didax}
            alt="didax-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>

      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideleft_15s_linear_infinite] mr-4">
        <a href="https://polypad.amplify.com/" target="_blank">
          <img
            src={polypad}
            alt="polypad-logo"
            className="inline-flex h-[6vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.superteacherworksheets.com/" target="_blank">
          <img
            src={superteacher}
            alt="superteacher-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a
          href="https://www.abbythepup.com/?gad_source=1&gclid=Cj0KCQjwhMq-BhCFARIsAGvo0KcXlBdeRiA4TYkGACrRY3aRtLzJES2UKFe8GchiAtqxdX93nqXxxQIaArJ-EALw_wcB"
          target="_blank"
        >
          <img
            src={abbythepup}
            alt="abbythepup-logo"
            className="inline-flex h-[8vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.gamestolearnenglish.com/" target="_blank">
          <img
            src={gamestolearnenglish}
            alt="classgamestolearnenglish-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://fluency.amplify.com/" target="_blank">
          <img
            src={fluency}
            alt="fluency-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a
          href="https://www.didax.com/math/virtual-manipulatives.html?srsltid=AfmBOoqwRaHKeMFCO0-esg3KOjIoWnnRbegTO2ScrPiTJHx6yXeB1j97"
          target="_blank"
        >
          <img
            src={didax}
            alt="didax-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-lg cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>
      <div className="w-[100%] bg-[#003554] h-[1px] rotate-180 mt-4"></div>
    </div>
  );
}

export default OnlineResources3;
