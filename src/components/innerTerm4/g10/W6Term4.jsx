import React, { useState } from "react";
import G6EnglishW6Term1 from "../../subjects/english/g6/G6EnglishW6Term1";
import G6MathW6Term1 from "../../subjects/math/g6/G6MathW6Term1";
import G10PhysicalW5to6Term4 from "../../subjects/science/g10/G10PhysicalW5to6Term4";
import G10CivicsW5to6T4 from "../../subjects/hass/g10/G10CivicsW5to6T4";
import G10TechW4to6Term4 from "../../subjects/technology/g10/G10TechW4to6Term4";
import G10MusicW1to10Term4 from "../../subjects/visual arts/g10/G10MusicW1to10Term4";
import G10HETerm4 from "../../subjects/healthEducation/g10/G10HETerm4";
import G10PEW5to7Term4 from "../../subjects/physicalEducation/g10/G10PEW5to7Term4";
import G6MandarinW6Term1 from "../../subjects/mandarin/g6/G6MandarinW6Term1";

function W6Term4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: "No content yet",
    },
    {
      id: "item2",
      label: "Math",
      content: "No content yet",
    },
    {
      id: "item3",
      label: "Science - Physical (Motion)",
      content: <G10PhysicalW5to6Term4 />,
    },
    {
      id: "item4",
      label: "HaSS - Civics and Citizenship",
      content: <G10CivicsW5to6T4 />,
    },
    {
      id: "item5",
      label: "Technology - Digital",
      content: <G10TechW4to6Term4 />,
    },
    {
      id: "item6",
      label: "The Arts: Music",
      content: <G10MusicW1to10Term4 />,
    },
    {
      id: "item7",
      label: "Health Education - Respectful Relationships",
      content: <G10HETerm4 />,
    },
    {
      id: "item8",
      label: "Physical Education",
      content: <G10PEW5to7Term4 />,
    },
    {
      id: "item9",
      label: "Language: Mandarin",
      content: "No content yet",
    },
    {
      id: "item10",
      label: "Khmer",
      content: "No content yet",
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
              className="flex items-center p-[.65rem] cursor-pointer before:content-['🚩'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg font-bold "
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

export default W6Term4;
