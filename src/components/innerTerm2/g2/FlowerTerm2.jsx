import React, { useState } from "react";
import G2EnglishFlowerTerm2 from "../../subjects/english/g2/G2EnglishFlowerTerm2";
import G2MathFlowerTerm2 from "../../subjects/math/g2/G2MathFlowerTerm2";
import G2ScienceFlowerTerm2 from "../../subjects/science/g2/G2ScienceFlowerTerm2";
import G2HASSFlowerTerm2 from "../../subjects/hass/g2/G2HASSFlowerTerm2";
import G2TechnologyFlowerTerm2 from "../../subjects/technology/g2/G2TechnologyFlowerTerm2";
import G2VisualArtsFlowerTerm2 from "../../subjects/visual arts/g2/G2VisualArtsFlowerTerm2";
import G2MusicFlowerTerm2 from "../../subjects/music/g2/G2MusicFlowerTerm2";
import G2HealthFlowerTerm2 from "../../subjects/healthEducation/g2/G2HealthFlowerTerm2";
import G2PhysicalFlowerTerm2 from "../../subjects/physicalEducation/g2/G2PhysicalFlowerTerm2";

function FlowerTerm2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishFlowerTerm2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathFlowerTerm2 />,
    },
    {
      id: "item3",
      label: "Science (Biological Sciences)",
      content: <G2ScienceFlowerTerm2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G2HASSFlowerTerm2 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyFlowerTerm2 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsFlowerTerm2 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicFlowerTerm2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthFlowerTerm2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalFlowerTerm2 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: "No content yet",
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

export default FlowerTerm2;
