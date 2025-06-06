import React, { useState } from "react";
import dotted from "../../assets/dotted.png";
import W1Term3 from "../innerTerm3/kinder/W1Term3";
import W2Term3 from "../innerTerm3/kinder/W2Term3";
import W3Term3 from "../innerTerm3/kinder/W3Term3";
import W4Term3 from "../innerTerm3/kinder/W4Term3";
import W5Term3 from "../innerTerm3/kinder/W5Term3";
import W6Term3 from "../innerTerm3/kinder/W6Term3";
import W7Term3 from "../innerTerm3/kinder/W7Term3";
import W8Term3 from "../innerTerm3/kinder/W8Term3";
import W9Term3 from "../innerTerm3/kinder/W9Term3";
import W10Term3 from "../innerTerm3/kinder/W10Term3";

function Term3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "W1 (Jan 12-16)",
      content: <W1Term3 />,
    },
    {
      id: "item2",
      label: "W2 (Jan 19-23) - Learning Outcome 4: Learning and Thinking",
      content: <W2Term3 />,
    },
    {
      id: "item3",
      label: "W3 (Jan 26-30)",
      content: <W3Term3 />,
    },
    {
      id: "item4",
      label: "W4 (Feb 2-6)",
      content: <W4Term3 />,
    },
    {
      id: "item5",
      label: "W5 (Feb 9-13)",
      content: <W5Term3 />,
    },
    {
      id: "item6",
      label: "W6 (Feb 16-20)",
      content: <W6Term3 />,
    },
    {
      id: "item7",
      label: "W7 (Feb 23-27)",
      content: <W7Term3 />,
    },
    {
      id: "item8",
      label: "W8 (Mar 2-6)",
      content: <W8Term3 />,
    },
    {
      id: "item9",
      label: "W9 (Mar 9-13)",
      content: <W9Term3 />,
    },
    {
      id: "item10",
      label: "W10 (Mar 16-20)",
      content: <W10Term3 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center">
            TERM 3
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

export default Term3;
