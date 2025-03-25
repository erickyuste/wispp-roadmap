import React, { useState } from "react";
import G2EnglishFlowerTerm3 from "../../subjects/english/g2/G2EnglishFlowerTerm3";
import G2MathFlowerTerm3 from "../../subjects/math/g2/G2MathFlowerTerm3";
import G2ScienceFlowerTerm3 from "../../subjects/science/g2/G2ScienceFlowerTerm3";
import G2HASSFlowerTerm3 from "../../subjects/hass/g2/G2HASSFlowerTerm3";
import G2TechnologyFlowerTerm3 from "../../subjects/technology/g2/G2TechnologyFlowerTerm3";
import G2VisualArtsFlowerTerm3 from "../../subjects/visual arts/g2/G2VisualArtsFlowerTerm3";
import G2MusicFlowerTerm3 from "../../subjects/music/g2/G2MusicFlowerTerm3";
import G2HealthFlowerTerm3 from "../../subjects/healthEducation/g2/G2HealthFlowerTerm3";
import G2PhysicalFlowerTerm3 from "../../subjects/physicalEducation/g2/G2PhysicalFlowerTerm3";
import G2KhmerFlowerTerm3 from "../../subjects/khmer/g2/G2KhmerFlowerTerm3";
import G2MandarinFlowerTerm3 from "../../subjects/mandarin/g2/G2MandarinFlowerTerm3";

function FlowerTerm3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishFlowerTerm3 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathFlowerTerm3 />,
    },
    {
      id: "item3",
      label: "Science (Earth and Space Sciences)",
      content: <G2ScienceFlowerTerm3 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G2HASSFlowerTerm3 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyFlowerTerm3 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsFlowerTerm3 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicFlowerTerm3 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthFlowerTerm3 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalFlowerTerm3 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G2MandarinFlowerTerm3 />,
    },
    {
      id: "item11",
      label: "Khmer",
      content: <G2KhmerFlowerTerm3 />,
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

export default FlowerTerm3;
