import React, { useState } from "react";
import G1EnglishFlowerTerm1 from "../../subjects/english/g1/G1EnglishFlowerTerm1";
import G1MathFlowerTerm1 from "../../subjects/math/g1/G1MathFlowerTerm1";
import G1ScienceFlowerTerm1 from "../../subjects/science/g1/G1ScienceFlowerTerm1";
import G1HASSFlowerTerm1 from "../../subjects/hass/g1/G1HASSFlowerTerm1";
import G1TechnologyFlowerTerm1 from "../../subjects/technology/g1/G1TechnologyFlowerTerm1";
import G1VisualArtsFlowerTerm1 from "../../subjects/visual arts/g1/G1VisualArtsFlowerTerm1";
import G1MusicFlowerTerm1 from "../../subjects/music/g1/G1MusicFlowerTerm1";
import G1HealthFlowerTerm1 from "../../subjects/healthEducation/g1/G1HealthFlowerTerm1";
import G1PhysicalFlowerTerm1 from "../../subjects/physicalEducation/g1/G1PhysicalFlowerTerm1";

function FlowerTerm1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishFlowerTerm1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathFlowerTerm1 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G1ScienceFlowerTerm1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G1HASSFlowerTerm1 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Digital)",
      content: <G1TechnologyFlowerTerm1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsFlowerTerm1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicFlowerTerm1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthFlowerTerm1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalFlowerTerm1 />,
    },
    {
      id: "item10",
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
              className="flex items-center p-[.65rem] font-bold cursor-pointer before:content-['+'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg"
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

export default FlowerTerm1;
