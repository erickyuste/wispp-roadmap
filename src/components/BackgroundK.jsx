import React, { useState } from "react";
import BackgroundContentK from "./BackgroundContent/BackgroundContentK";
import QuickLinksK from "./BackgroundContent/QuickLinksK";
import dotted from "../assets/dotted.png";
import LearningOutcomesK from "./BackgroundContent/LearningOutcomesK";

function BackgroundK() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "background",
      label: "Background",
      content: <BackgroundContentK />,
    },
    {
      id: "learningoutcomes",
      label: "Learning Outcomes",
      content: <LearningOutcomesK />,
    },
    {
      id: "quicklinks",
      label: "WAC Quick Links",
      content: <QuickLinksK />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center mt-[2rem]">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center">
            Academic Year 24-25
          </h1>
        </li>
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
      </div>
      <img
        src={dotted}
        className="w-[1.5rem] md:w-[30px] mx-auto filter invert"
      ></img>
      <ul className="accordion mx-[1rem] w-[95%] md:w-[800px] lg:w-[850px] px-3 border-2 border-white border-dashed rounded-2xl">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-none w-full my-3 px-2 rounded-lg bg-[#003554] border-[#003554] text-white border-3 hover:border-[#0582ca]"
          >
            <label
              className="flex items-center p-[.65rem] font-medium cursor-pointer before:content-['📍'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg before:font-semibold"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </label>
            <div
              className={`content text-white px-[5px] leading-[26px] content max-h-0  overflow-hidden transition-all duration-500 ${
                openItem === item.id
                  ? "max-h-[150vh] py-[10px] px-[10px] pb-[20px]"
                  : ""
              }`}
            >
              <div>{item.content}</div>
            </div>
          </li>
        ))}
      </ul>
      <img
        src={dotted}
        className="w-[1.5rem] md:w-[30px] mx-auto filter invert"
      ></img>
    </div>
  );
}

export default BackgroundK;
