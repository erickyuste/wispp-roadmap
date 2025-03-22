import React, { useState } from "react";
import G5EnglishW3Term4 from "../../subjects/english/g5/G5EnglishW3Term4";
import G5MathW3Term4 from "../../subjects/math/g5/G5MathW3Term4";
import G5ScienceW3Term4 from "../../subjects/science/g5/G5ScienceW3Term4";
import G5HassW3Term4 from "../../subjects/hass/g5/G5HassW3Term4";
import G5TechW3Term4 from "../../subjects/technology/g5/G5TechW3Term4";
import G5VisualW3Term4 from "../../subjects/visual arts/g5/G5VisualW3Term4";
import G5MusicW3Term4 from "../../subjects/music/g5/G5MusicW3Term4";
import G5HealthW3Term4 from "../../subjects/healthEducation/g5/G5HealthW3Term4";
import G5PEW3Term4 from "../../subjects/physicalEducation/g5/G5PEW3Term4";
import G5MandarinW3Term4 from "../../subjects/mandarin/g5/G5MandarinW3Term4";

function W3Term4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G5EnglishW3Term4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G5MathW3Term4 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G5ScienceW3Term4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G5HassW3Term4 />,
    },
    {
      id: "item5",
      label: "Technology (Digital)",
      content: <G5TechW3Term4 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G5VisualW3Term4 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G5MusicW3Term4 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G5HealthW3Term4 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G5PEW3Term4 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G5MandarinW3Term4 />,
    },
    {
      id: "item11",
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
              className="flex items-center p-[.65rem] cursor-pointer before:content-['+'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg font-bold "
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

export default W3Term4;
