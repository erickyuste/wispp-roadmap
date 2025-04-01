import React, { useEffect, useRef, useState } from "react";
import mojo from "../assets/mojo.png";

function Mojo4() {
  return (
    <div>
      <button
        id="chatbot-toggler"
        className="filter drop-shadow-[0_0_35px_#006494] mb-15"
      >
        <a
          href="https://teach.classdojo.com/#/classes/66b41b0bd81a749b0c044655/story"
          target="_blank"
        >
          <img
            src={mojo}
            className="transition-transform duration-300 ease-in-out hover:scale-120"
          />
        </a>
      </button>
      <div className="chatbot-popup m-0 sm:mb-14"></div>
    </div>
  );
}

export default Mojo4;
