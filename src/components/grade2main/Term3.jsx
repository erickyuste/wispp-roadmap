import React, { useState } from "react";
import SoilTerm3 from "../innerTerm3/g2/SoilTerm3";
import SeedTerm3 from "../innerTerm3/g2/SeedTerm3";
import StalkTerm3 from "../innerTerm3/g2/StalkTerm3";
import FlowerTerm3 from "../innerTerm3/g2/FlowerTerm3";
import CanopyTerm3 from "../innerTerm3/g2/CanopyTerm3";
import dotted from "../../assets/dotted.png";
import click from "../../assets/click.png";

function Term3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "Soil W1-2",
      content: <SoilTerm3 />,
    },
    {
      id: "item2",
      label: "Seed W3-4",
      content: <SeedTerm3 />,
    },
    {
      id: "item3",
      label: "Stalk W5-6",
      content: <StalkTerm3 />,
    },
    {
      id: "item4",
      label: "Flower W7-8",
      content: <FlowerTerm3 />,
    },
    {
      id: "item5",
      label: "Canopy W9-10",
      content: <CanopyTerm3 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title flex gap-1 items-center justify-center py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center cursor-pointer transition-transform duration-200 hover:scale-120">
            <a
              href="https://docs.google.com/spreadsheets/d/17j_8QL-xqc_O8zss5FP2awSZWusweDVW-ONg2A4o7zk/edit?usp=sharing"
              target="_blank"
            >
              TERM 3
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
    </div>
  );
}

export default Term3;
