import React, { useState } from "react";
import dotted from "../../assets/dotted.png";
import W1Term1 from "../innerTerm1/g5/W1Term1";
import W2Term1 from "../innerTerm1/g5/W2Term1";
import W3Term1 from "../innerTerm1/g5/W3Term1";
import W4Term1 from "../innerTerm1/g5/W4Term1";
import W5Term1 from "../innerTerm1/g5/W5Term1";
import W6Term1 from "../innerTerm1/g5/W6Term1";
import W7Term1 from "../innerTerm1/g5/W7Term1";
import W8Term1 from "../innerTerm1/g5/W8Term1";

function Term1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "W1 (August 12-16)",
      content: <W1Term1 />,
    },
    {
      id: "item2",
      label: "W2 (Aug 19 - 23)",
      content: <W2Term1 />,
    },
    {
      id: "item3",
      label: "W3 (Aug 26-30)",
      content: <W3Term1 />,
    },
    {
      id: "item4",
      label: "W4 (Sept 2-6)",
      content: <W4Term1 />,
    },
    {
      id: "item5",
      label: "W5 (Sept 9-13)",
      content: <W5Term1 />,
    },
    {
      id: "item6",
      label: "W6 (Sept 16-20)",
      content: <W6Term1 />,
    },
    {
      id: "item7",
      label: "W7 (Sept 23-27)",
      content: <W7Term1 />,
    },
    {
      id: "item8",
      label: "W8 (Oct 7 -11)",
      content: <W8Term1 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center">
            TERM 1
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
              className="flex items-center p-[.65rem] font-medium cursor-pointer before:content-['🏳️'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg before:font-semibold "
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

export default Term1;
