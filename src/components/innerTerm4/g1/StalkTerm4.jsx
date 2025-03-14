import React, { useState } from "react";
import G1EnglishStalkTerm4 from "../../subjects/english/g1/G1EnglishStalkTerm4";
import G1MathStalkTerm4 from "../../subjects/math/g1/G1MathStalkTerm4";
import G1ScienceStalkTerm4 from "../../subjects/science/g1/G1ScienceStalkTerm4";
import G1HASSStalkTerm4 from "../../subjects/hass/g1/G1HASSStalkTerm4";
import G1TechnologyStalkTerm4 from "../../subjects/technology/g1/G1TechnologyStalkTerm4";
import G1VisualArtsStalkTerm4 from "../../subjects/visual arts/g1/G1VisualArtsStalkTerm4";
import G1MusicStalkTerm4 from "../../subjects/music/g1/G1MusicStalkTerm4";
import G1HealthStalkTerm4 from "../../subjects/healthEducation/g1/G1HealthStalkTerm4";
import G1PhysicalStalkTerm4 from "../../subjects/physicalEducation/g1/G1PhysicalStalkTerm4";

function StalkTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishStalkTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathStalkTerm4 />,
    },
    {
      id: "item3",
      label: "Science (Physical Sciences)",
      content: <G1ScienceStalkTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G1HASSStalkTerm4 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologyStalkTerm4 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsStalkTerm4 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicStalkTerm4 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthStalkTerm4 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalStalkTerm4 />,
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
              className="flex items-center p-[.65rem] font-medium cursor-pointer before:content-['+'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg before:font-semibold "
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

export default StalkTerm4;
