import React, { useState } from "react";
import G4EnglishW3Term2 from "../../subjects/english/g4/G4EnglishW3Term2";
import G4MathW3Term2 from "../../subjects/math/g4/G4MathW3Term2";
import G4ScienceW3Term2 from "../../subjects/science/g4/G4ScienceW3Term2";
import G4HassW3Term2 from "../../subjects/hass/g4/G4HassW3Term2";
import G4TechW3Term2 from "../../subjects/technology/g4/G4TechW3Term2";
import G4DramaW3Term2 from "../../subjects/drama/G4DramaW3Term2";
import G4HealthW3Term2 from "../../subjects/healthEducation/g4/G4HealthW3Term2";
import G4PEW3Term2 from "../../subjects/physicalEducation/g4/G4PEW3Term2";
import G4MandarinW3Term2 from "../../subjects/mandarin/g4/G4MandarinW3Term2";

function W3Term2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G4EnglishW3Term2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G4MathW3Term2 />,
    },
    {
      id: "item3",
      label: "Science (Physical Sciences)",
      content: <G4ScienceW3Term2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Civics and Citizenship)",
      content: <G4HassW3Term2 />,
    },
    {
      id: "item5",
      label: "Technology (Digital)",
      content: <G4TechW3Term2 />,
    },
    {
      id: "item7",
      label: "The Arts: Drama",
      content: <G4DramaW3Term2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G4HealthW3Term2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G4PEW3Term2 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G4MandarinW3Term2 />,
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

export default W3Term2;
