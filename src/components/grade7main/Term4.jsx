import React, { useState } from "react";
import dotted from "../../assets/dotted.png";
import W1Term4 from "../innerTerm4/g7/W1Term4";
import W2Term4 from "../innerTerm4/g7/W2Term4";
import W3Term4 from "../innerTerm4/g7/W3Term4";
import W4Term4 from "../innerTerm4/g7/W4Term4";
import W5Term4 from "../innerTerm4/g7/W5Term4";
import W6Term4 from "../innerTerm4/g7/W6Term4";
import W7Term4 from "../innerTerm4/g7/W7Term4";
import W8Term4 from "../innerTerm4/g7/W8Term4";
import click from "../../assets/click.png";

function Term4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "W1 (Mar 31-Apr 4)",
      content: <W1Term4 />,
    },
    {
      id: "item2",
      label: "W2 (Apr 7-11)",
      content: <W2Term4 />,
    },
    {
      id: "item3",
      label: "W3 (Apr 14-18)",
      content: <W3Term4 />,
    },
    {
      id: "item4",
      label: "W4 (Apr  21-25)",
      content: <W4Term4 />,
    },
    {
      id: "item5",
      label: "W5 (Apr 28-May 2)",
      content: <W5Term4 />,
    },
    {
      id: "item6",
      label: "W6 (May 5-9)",
      content: <W6Term4 />,
    },
    {
      id: "item7",
      label: "W7 (May 12-16)",
      content: <W7Term4 />,
    },
    {
      id: "item8",
      label: "W8-W10 (May 19-Jun 13)",
      content: <W8Term4 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title flex gap-1 items-center justify-center py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center cursor-pointer transition-transform duration-200 hover:scale-120">
            <a
              href="https://docs.google.com/spreadsheets/d/16rjWMdDAvKxMErT5xVCyY91cEwCzjRXQeF6ZaP9IUY0/edit?usp=sharing"
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
                  ? "max-h-[135vh] py-[10px] px-[10px] pb-[20px]"
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
