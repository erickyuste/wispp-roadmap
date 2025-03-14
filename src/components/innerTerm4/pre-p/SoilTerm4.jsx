import React, { useState } from "react";
import PrepEnglishSoilTerm4 from "../../subjects/english/pre-p/PrepEnglishSoilTerm4";
import PrepMathSoilTerm4 from "../../subjects/math/pre-p/PrepMathSoilTerm4";
import PrepHASSSoilTerm4 from "../../subjects/hass/pre-p/PrepHASSSoilTerm4";
import PrepTechSoilTerm4 from "../../subjects/technology/pre-p/PrepTechSoilTerm4";
import PrepPhysicalSoilTerm4 from "../../subjects/physicalEducation/pre-p/PrepPhysicalSoilTerm4";
import PrepScienceSoilTerm4 from "../../subjects/science/pre-p/PrepScienceSoilTerm4";

function SoilTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <PrepEnglishSoilTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <PrepMathSoilTerm4 />,
    },
    {
      id: "item3",
      label: "Science (Integrated Learning)",
      content: <PrepScienceSoilTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <PrepHASSSoilTerm4 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: <PrepTechSoilTerm4 />,
    },
    {
      id: "item6",
      label: "Physical Education (Integrated Learning)",
      content: <PrepPhysicalSoilTerm4 />,
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
            }`}
          >
            <label
              className="flex items-center p-[.65rem] font-bold cursor-pointer before:content-['+'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg"
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

export default SoilTerm4;
