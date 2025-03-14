import React, { useState } from "react";
import G3EnglishW5Term1 from "../../subjects/english/g3/G3EnglishW5Term1";
import G3MathW5Term1 from "../../subjects/math/g3/G3MathW5Term1";
import G3ScienceW5Term1 from "../../subjects/science/g3/G3ScienceW5Term1";
import G3HassW5Term1 from "../../subjects/hass/g3/G3HassW5Term1";
import G3TechW5Term1 from "../../subjects/technology/g3/G3TechW5Term1";
import G3VisualW5Term1 from "../../subjects/visual arts/g3/G3VisualW5Term1";
import G3MusicW5Term1 from "../../subjects/music/g3/G3MusicW5Term1";
import G3HealthW5Term1 from "../../subjects/healthEducation/g3/G3HealthW5Term1";
import G3PEW5Term1 from "../../subjects/physicalEducation/g3/G3PEW5Term1";
import G3MandarinW5Term1 from "../../subjects/mandarin/g3/G3MandarinW5Term1";

function W5Term1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G3EnglishW5Term1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G3MathW5Term1 />,
    },
    {
      id: "item3",
      label: "Science (Physical sciences)",
      content: <G3ScienceW5Term1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Civics and Citizenship)",
      content: <G3HassW5Term1 />,
    },
    {
      id: "item5",
      label: "Technology (Digital)",
      content: <G3TechW5Term1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G3VisualW5Term1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G3MusicW5Term1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G3HealthW5Term1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G3PEW5Term1 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G3MandarinW5Term1 />,
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

export default W5Term1;
