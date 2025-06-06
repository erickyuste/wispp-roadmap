import React, { useState } from "react";
import G6EnglishW7Term1 from "../../subjects/english/g6/G6EnglishW7Term1";
import G6MathW7Term1 from "../../subjects/math/g6/G6MathW7Term1";
import G9ChemicalW7Term2 from "../../subjects/science/g9/G9ChemicalW7Term2";
import G9GeoW7T2 from "../../subjects/hass/g9/G9GeoW7T2";
import G9TechW7Term2 from "../../subjects/technology/g9/G9TechW7Term2";
import G9VisualW7to8Term2 from "../../subjects/visual arts/g9/G9VisualW7to8Term2";
import G9HETerm2 from "../../subjects/healthEducation/g9/G9HETerm2";
import G9PEW7to9Term2 from "../../subjects/physicalEducation/g9/G9PEW7to9Term2";
import G6MandarinW7Term1 from "../../subjects/mandarin/g6/G6MandarinW7Term1";

function W7Term2() {
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
      label: "Science - Chemical (Chemical reactions)",
      content: <G9ChemicalW7Term2 />,
    },
    {
      id: "item4",
      label: "HaSS - Geography",
      content: <G9GeoW7T2 />,
    },
    {
      id: "item5",
      label: "Technology - Digital",
      content: <G9TechW7Term2 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G9VisualW7to8Term2 />,
    },
    {
      id: "item7",
      label:
        "Health Education - Factors that shape identities/gender stereotypes",
      content: <G9HETerm2 />,
    },
    {
      id: "item8",
      label: "Physical Education - Kicking",
      content: <G9PEW7to9Term2 />,
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

export default W7Term2;
