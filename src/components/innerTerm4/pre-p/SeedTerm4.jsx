import React, { useState } from "react";
import PrepEnglishSeedTerm4 from "../../subjects/english/pre-p/PrepEnglishSeedTerm4";
import PrepMathSeedTerm4 from "../../subjects/math/pre-p/PrepMathSeedTerm4";
import PrepHASSSeedTerm4 from "../../subjects/hass/pre-p/PrepHASSSeedTerm4";
import PrepTechSeedTerm4 from "../../subjects/technology/pre-p/PrepTechSeedTerm4";
import PrepScienceSoilTerm4 from "../../subjects/science/pre-p/PrepScienceSoilTerm4";
import PrepDanceSeedTerm4 from "../../subjects/visual arts/pre-p/PrepDanceSeedTerm4";

function SeedTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <PrepEnglishSeedTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <PrepMathSeedTerm4 />,
    },
    {
      id: "item3",
      label: "Science",
      content: <PrepScienceSoilTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <PrepHASSSeedTerm4 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: <PrepTechSeedTerm4 />,
    },
    {
      id: "item6",
      label: "The Arts: Dance",
      content: <PrepDanceSeedTerm4 />,
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

export default SeedTerm4;
