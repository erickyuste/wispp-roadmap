import React, { useState } from "react";
import SoilTerm4 from "../innerTerm4/g2/SoilTerm4";
import SeedTerm4 from "../innerTerm4/g2/SeedTerm4";
import StalkTerm4 from "../innerTerm4/g2/StalkTerm4";
import FlowerTerm4 from "../innerTerm4/g2/FlowerTerm4";
import CanopyTerm4 from "../innerTerm4/g2/CanopyTerm4";
import dotted from "../../assets/dotted.png";
import click from "../../assets/click.png";

function Term4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "Soil W1-2 (Mar 23-Apr 3)",
      content: <SoilTerm4 />,
    },
    {
      id: "item2",
      label: "Seed W3-4 (Apr 6-24)",
      content: <SeedTerm4 />,
    },
    {
      id: "item3",
      label: "Stalk W5 (Apr 27-May 8)",
      content: <StalkTerm4 />,
    },
    {
      id: "item4",
      label: "Flower W6 (May 11 -22)",
      content: <FlowerTerm4 />,
    },
    {
      id: "item5",
      label: "Canopy W7 (May 25-Jun 5)",
      content: <CanopyTerm4 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title flex gap-1 items-center justify-center py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center cursor-pointer transition-transform duration-200 hover:scale-120">
            <a
              href="https://docs.google.com/spreadsheets/d/1Jx_OqHFb4w6hBvlJUCVRgwpk-plfID7YJGXRbgDe56A/edit?usp=sharing"
              target="_blank"
            >
              TERM 4
            </a>
            <img src={click} className="w-[2rem] filter invert" />
          </h1>
        </li>
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
      </div>
      <img
        src={dotted}
        className="w-[1.5rem] md:w-[30px] filter invert"
        alt="Dotted Line"
      />
      <ul className="accordion mx-[1rem] w-[95%] md:w-[800px] lg:w-[850px] px-3 border-2 border-white border-dashed rounded-2xl">
        {items.map((item) => (
          <li
            key={item.id}
            className={`list-none w-full my-3 px-2 rounded-lg bg-[#003554] border-[#003554] text-white border-3 hover:border-[#0582ca] ${
              openItem === item.id ? "active" : ""
            }`}
          >
            <label
              className="flex items-center p-[.65rem] font-medium cursor-pointer before:content-['📍'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg before:font-semibold "
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </label>
            <div
              className={`content text-white px-[5px] leading-[26px] content max-h-0 overflow-hidden transition-all duration-500 ${
                openItem === item.id
                  ? "max-h-screen py-[10px] px-[10px] pb-[20px]"
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
        alt="Dotted Line"
      />
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center">
            End of Academic Year
          </h1>
        </li>
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
      </div>
    </div>
  );
}

export default Term4;
