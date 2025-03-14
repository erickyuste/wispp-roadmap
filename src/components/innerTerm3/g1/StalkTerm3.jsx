import React, { useState } from "react";
import G1EnglishStalkTerm3 from "../../subjects/english/g1/G1EnglishStalkTerm3";
import G1MathStalkTerm3 from "../../subjects/math/g1/G1MathStalkTerm3";
import G1ScienceStalkTerm3 from "../../subjects/science/g1/G1ScienceStalkTerm3";
import G1HASSStalkTerm3 from "../../subjects/hass/g1/G1HASSStalkTerm3";
import G1TechnologyStalkTerm3 from "../../subjects/technology/g1/G1TechnologyStalkTerm3";
import G1VisualArtsStalkTerm3 from "../../subjects/visual arts/g1/G1VisualArtsStalkTerm3";
import G1MusicStalkTerm3 from "../../subjects/music/g1/G1MusicStalkTerm3";
import G1HealthStalkTerm3 from "../../subjects/healthEducation/g1/G1HealthStalkTerm3";
import G1PhysicalStalkTerm3 from "../../subjects/physicalEducation/g1/G1PhysicalStalkTerm3";

function StalkTerm3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishStalkTerm3 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathStalkTerm3 />,
    },
    {
      id: "item3",
      label: "Science (Earth and Space Sciences)",
      content: <G1ScienceStalkTerm3 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G1HASSStalkTerm3 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologyStalkTerm3 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsStalkTerm3 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicStalkTerm3 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthStalkTerm3 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalStalkTerm3 />,
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

export default StalkTerm3;
