import React, { useState } from "react";
import G6EnglishW7Term1 from "../../subjects/english/g6/G6EnglishW7Term1";
import G6MathW7Term1 from "../../subjects/math/g6/G6MathW7Term1";
import G6ScienceW7Term1 from "../../subjects/science/g6/G6ScienceW7Term1";
import G9EcoW7T3 from "../../subjects/hass/g9/G9EcoW7T3";
import G6TechW7Term1 from "../../subjects/technology/g6/G6TechW7Term1";
import G9MusicW7to8Term3 from "../../subjects/visual arts/g9/G9MusicW7to8Term3";
import G9HETerm3 from "../../subjects/healthEducation/g9/G9HETerm3";
import G9PEW5to7Term3 from "../../subjects/physicalEducation/g9/G9PEW5to7Term3";
import G6MandarinW7Term1 from "../../subjects/mandarin/g6/G6MandarinW7Term1";

function W7Term3() {
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
      label: "Science",
      content: "No content yet",
    },
    {
      id: "item4",
      label: "Humanities and Social Studies - Economics and Business",
      content: <G9EcoW7T3 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: "No content yet",
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G9MusicW7to8Term3 />,
    },
    {
      id: "item7",
      label:
        "Health Education - Factors that shape identities/gender stereotypes",
      content: <G9HETerm3 />,
    },
    {
      id: "item8",
      label: "Physical Education - Invasion Games",
      content: <G9PEW5to7Term3 />,
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

export default W7Term3;
