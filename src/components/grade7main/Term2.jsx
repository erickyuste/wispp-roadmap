import React, { useState } from "react";
import dotted from "../../assets/dotted.png";
import W1Term2 from "../innerTerm2/g7/W1Term2";
import W2Term2 from "../innerTerm2/g7/W2Term2";
import W3Term2 from "../innerTerm2/g7/W3Term2";
import W4Term2 from "../innerTerm2/g7/W4Term2";
import W5Term2 from "../innerTerm2/g7/W5Term2";
import W6Term2 from "../innerTerm2/g7/W6Term2";
import W7Term2 from "../innerTerm2/g7/W7Term2";
import W8Term2 from "../innerTerm2/g7/W8Term2";
import click from "../../assets/click.png";

function Term2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "W1",
      content: <W1Term2 />,
    },
    {
      id: "item2",
      label: "W2",
      content: <W2Term2 />,
    },
    {
      id: "item3",
      label: "W3",
      content: <W3Term2 />,
    },
    {
      id: "item4",
      label: "W4",
      content: <W4Term2 />,
    },
    {
      id: "item5",
      label: "W5",
      content: <W5Term2 />,
    },
    {
      id: "item6",
      label: "W6",
      content: <W6Term2 />,
    },
    {
      id: "item7",
      label: "W7",
      content: <W7Term2 />,
    },
    {
      id: "item8",
      label: "W8",
      content: <W8Term2 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title flex gap-1 items-center justify-center py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center cursor-pointer transition-transform duration-200 hover:scale-120">
            <a
              href="https://docs.google.com/spreadsheets/d/1ALaooCOPXT3y-Jl7vj-jWbPmf0Ur-9f3VAbGusayzKs/edit?usp=sharing"
              target="_blank"
            >
              TERM 2
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
            className={`list-none w-full my-3 px-2 rounded-lg bg-[#003554] border-[#003554] text-white border-3 hover:border-[#0582ca]${
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

export default Term2;
