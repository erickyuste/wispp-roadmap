import React, { useState } from "react";
import G3EnglishW1Term3 from "../../subjects/english/g3/G3EnglishW1Term3";
import G3MathW1Term3 from "../../subjects/math/g3/G3MathW1Term3";
import G3ScienceW1Term3 from "../../subjects/science/g3/G3ScienceW1Term3";
import G3HassW1Term3 from "../../subjects/hass/g3/G3HassW1Term3";
import G3TechW1Term3 from "../../subjects/technology/g3/G3TechW1Term3";
import G3VisualW1Term3 from "../../subjects/visual arts/g3/G3VisualW1Term3";
import G3MusicW1Term3 from "../../subjects/music/g3/G3MusicW1Term3";
import G3HealthW1Term3 from "../../subjects/healthEducation/g3/G3HealthW1Term3";
import G3PEW1Term3 from "../../subjects/physicalEducation/g3/G3PEW1Term3";
import G3MandarinW1Term3 from "../../subjects/mandarin/g3/G3MandarinW1Term3";
import G3KhmerW1Term3 from "../../subjects/khmer/g3/G3KhmerW1Term3";

function W1Term3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G3EnglishW1Term3 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G3MathW1Term3 />,
    },
    {
      id: "item3",
      label: "Science (Earth and space sciences)",
      content: <G3ScienceW1Term3 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G3HassW1Term3 />,
    },
    {
      id: "item5",
      label: "Technology (Digital)",
      content: <G3TechW1Term3 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G3VisualW1Term3 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G3MusicW1Term3 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G3HealthW1Term3 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G3PEW1Term3 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G3MandarinW1Term3 />,
    },
    {
      id: "item11",
      label: "Khmer",
      content: <G3KhmerW1Term3 />,
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

export default W1Term3;
