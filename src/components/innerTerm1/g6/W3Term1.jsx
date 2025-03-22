import React, { useState } from "react";
import G6EnglishW3Term1 from "../../subjects/english/g6/G6EnglishW3Term1";
import G6MathW3Term1 from "../../subjects/math/g6/G6MathW3Term1";
import G6ScienceW3Term1 from "../../subjects/science/g6/G6ScienceW3Term1";
import G6HassW3Term1 from "../../subjects/hass/g6/G6HassW3Term1";
import G6TechW3Term1 from "../../subjects/technology/g6/G6TechW3Term1";
import G6DramaW3Term1 from "../../subjects/drama/g6/G6DramaW3Term1";
import G6MusicW3Term1 from "../../subjects/music/g6/G6MusicW3Term1";
import G6HealthW3Term1 from "../../subjects/healthEducation/g6/G6HealthW3Term1";
import G6PEW3Term1 from "../../subjects/physicalEducation/g6/G6PEW3Term1";
import G6MandarinW3Term1 from "../../subjects/mandarin/g6/G6MandarinW3Term1";

function W3Term1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G6EnglishW3Term1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G6MathW3Term1 />,
    },
    {
      id: "item3",
      label: "Science (Physical sciences)",
      content: <G6ScienceW3Term1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Economics and Business)",
      content: <G6HassW3Term1 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: <G6TechW3Term1 />,
    },
    {
      id: "item6",
      label: "The Arts: Drama (Exploring drama elements)",
      content: <G6DramaW3Term1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G6MusicW3Term1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G6HealthW3Term1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G6PEW3Term1 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G6MandarinW3Term1 />,
    },
    {
      id: "item11",
      label: "Khmer",
      content: "Khmer",
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

export default W3Term1;
