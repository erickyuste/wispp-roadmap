import React, { useState } from "react";
import PrepEnglishSoilTerm1 from "../../subjects/english/pre-p/PrepEnglishSoilTerm1";
import PrepMathSoilTerm1 from "../../subjects/math/pre-p/PrepMathSoilTerm1";
import PrepScienceSoilTerm1 from "../../subjects/science/pre-p/PrepScienceSoilTerm1";
import PrepVisualSoilTerm1 from "../../subjects/visual arts/pre-p/PrepVisualSoilTerm1";
import PrepHASSSoilTerm1 from "../../subjects/hass/pre-p/PrepHASSSoilTerm1";
import PrepTechSoilTerm1 from "../../subjects/technology/pre-p/PrepTechSoilTerm1";

function SoilTerm1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <PrepEnglishSoilTerm1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <PrepMathSoilTerm1 />,
    },
    {
      id: "item3",
      label: "Science (Integrated Learning)",
      content: <PrepScienceSoilTerm1 />,
    },
    {
      id: "item4",
      label: "The Arts: Visual Arts (Integrated Learning)",
      content: <PrepVisualSoilTerm1 />,
    },
    {
      id: "item5",
      label: "Humanities and Social Studies (History)",
      content: <PrepHASSSoilTerm1 />,
    },
    {
      id: "item6",
      label: "Technology",
      content: <PrepTechSoilTerm1 />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <ul className="accordion mx-[1rem] w-[100%] md:w-[750px] lg:w-[800px]">
        {items.map((item) => (
          <li
            key={item.id}
            className={`list-none w-full my-1 px-2 rounded-lg bg-[#0582ca] border-[#003554] text-white border-3 hover:border-[#0582ca] ${
              openItem === item.id ? "active" : ""
            }`} // Added active class
          >
            <label
              className="flex items-center p-[.65rem] font-bold cursor-pointer before:content-['🚩'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg"
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
    </div>
  );
}

export default SoilTerm1;
