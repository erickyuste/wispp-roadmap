import React, { useState } from "react";
import dotted from "../../assets/dotted.png";
import W1Term4 from "../innerTerm4/g3/W1Term4";
import W2Term4 from "../innerTerm4/g3/W2Term4";
import W3Term4 from "../innerTerm4/g3/W3Term4";
import W4Term4 from "../innerTerm4/g3/W4Term4";
import W5Term4 from "../innerTerm4/g3/W5Term4";
import W6Term4 from "../innerTerm4/g3/W6Term4";
import W7Term4 from "../innerTerm4/g3/W7Term4";
import W8Term4 from "../innerTerm4/g3/W8Term4";

function Term4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "W1 (Apr 7-11)",
      content: <W1Term4 />,
    },
    {
      id: "item2",
      label: "W2 (Apr 21-25)",
      content: <W2Term4 />,
    },
    {
      id: "item3",
      label: "W3 (Apr 28 - May 2)",
      content: <W3Term4 />,
    },
    {
      id: "item4",
      label: "W4 (May 5-9)",
      content: <W4Term4 />,
    },
    {
      id: "item5",
      label: "W5 (May 19-23)",
      content: <W5Term4 />,
    },
    {
      id: "item6",
      label: "W6 (May 26-30)",
      content: <W6Term4 />,
    },
    {
      id: "item7",
      label: "W7 (Jun 2-6)",
      content: <W7Term4 />,
    },
    {
      id: "item8",
      label: "W8 (Jun 9-13)",
      content: <W8Term4 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[95vw] flex justify-evenly items-center">
        <div className="w-[100%] bg-[#003554] h-[1px] rotate-180"></div>
        <li className="flex items-center justify-center shadow-lg list-none w-[100%] rounded-lg bg-[#003554]">
          <h1 className="title py-2 font-bold text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 text-center">
            TERM 4
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
