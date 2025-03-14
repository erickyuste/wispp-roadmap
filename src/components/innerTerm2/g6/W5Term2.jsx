import React, { useState } from "react";
import G6EnglishW5Term2 from "../../subjects/english/g6/G6EnglishW5Term2";
import G6MathW5Term2 from "../../subjects/math/g6/G6MathW5Term2";
import G6ScienceW5Term2 from "../../subjects/science/g6/G6ScienceW5Term2";
import G6HassW5Term2 from "../../subjects/hass/g6/G6HassW5Term2";
import G6TechW5Term2 from "../../subjects/technology/g6/G6TechW5Term2";
import G6DramaW5Term2 from "../../subjects/drama/g6/G6DramaW5Term2";
import G6MusicW5Term2 from "../../subjects/music/g6/G6MusicW5Term2";
import G6HealthW5Term2 from "../../subjects/healthEducation/g6/G6HealthW5Term2";
import G6PEW5Term2 from "../../subjects/physicalEducation/g6/G6PEW5Term2";
import G6MandarinW5Term2 from "../../subjects/mandarin/g6/G6MandarinW5Term2";

function W5Term2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G6EnglishW5Term2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G6MathW5Term2 />,
    },
    {
      id: "item3",
      label: "Science (Biological sciences)",
      content: <G6ScienceW5Term2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Civics and Citizenship)",
      content: <G6HassW5Term2 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: <G6TechW5Term2 />,
    },
    {
      id: "item6",
      label: "The Arts: Drama (Spy school)",
      content: <G6DramaW5Term2 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G6MusicW5Term2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G6HealthW5Term2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G6PEW5Term2 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G6MandarinW5Term2 />,
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

export default W5Term2;
