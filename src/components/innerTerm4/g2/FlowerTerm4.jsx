import React, { useState } from "react";
import G2EnglishFlowerTerm4 from "../../subjects/english/g2/G2EnglishFlowerTerm4";
import G2MathFlowerTerm4 from "../../subjects/math/g2/G2MathFlowerTerm4";
import G2ScienceFlowerTerm4 from "../../subjects/science/g2/G2ScienceFlowerTerm4";
import G2HASSFlowerTerm4 from "../../subjects/hass/g2/G2HASSFlowerTerm4";
import G2TechnologyFlowerTerm4 from "../../subjects/technology/g2/G2TechnologyFlowerTerm4";
import G2VisualArtsFlowerTerm4 from "../../subjects/visual arts/g2/G2VisualArtsFlowerTerm4";
import G2MusicFlowerTerm4 from "../../subjects/music/g2/G2MusicFlowerTerm4";
import G2HealthFlowerTerm4 from "../../subjects/healthEducation/g2/G2HealthFlowerTerm4";
import G2PhysicalFlowerTerm4 from "../../subjects/physicalEducation/g2/G2PhysicalFlowerTerm4";
import G2MandarinFlowerTerm4 from "../../subjects/mandarin/g2/G2MandarinFlowerTerm4";

function FlowerTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishFlowerTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathFlowerTerm4 />,
    },
    {
      id: "item3",
      label: "Science (Physical Sciences)",
      content: <G2ScienceFlowerTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G2HASSFlowerTerm4 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyFlowerTerm4 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsFlowerTerm4 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicFlowerTerm4 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthFlowerTerm4 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalFlowerTerm4 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G2MandarinFlowerTerm4 />,
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
            }`}
          >
            <label
              className="flex items-center p-[.65rem] font-medium cursor-pointer before:content-['🚩'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg before:font-semibold "
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

export default FlowerTerm4;
