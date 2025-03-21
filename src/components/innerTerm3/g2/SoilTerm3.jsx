import React, { useState } from "react";
import G2EnglishSoilTerm3 from "../../subjects/english/g2/G2EnglishSoilTerm3";
import G2MathSoilTerm3 from "../../subjects/math/g2/G2MathSoilTerm3";
import G2ScienceSoilTerm3 from "../../subjects/science/g2/G2ScienceSoilTerm3";
import G2HASSSoilTerm3 from "../../subjects/hass/g2/G2HASSSoilTerm3";
import G2TechnologySoilTerm3 from "../../subjects/technology/g2/G2TechnologySoilTerm3";
import G2VisualArtsSoilTerm3 from "../../subjects/visual arts/g2/G2VisualArtsSoilTerm3";
import G2MusicSoilTerm3 from "../../subjects/music/g2/G2MusicSoilTerm3";
import G2HealthSoilTerm3 from "../../subjects/healthEducation/g2/G2HealthSoilTerm3";
import G2PhysicalSoilTerm3 from "../../subjects/physicalEducation/g2/G2PhysicalSoilTerm3";
import G2KhmerSoilTerm3 from "../../subjects/khmer/g2/G2KhmerSoilTerm3";

function SoilTerm3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishSoilTerm3 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathSoilTerm3 />,
    },
    {
      id: "item3",
      label: "Science (Earth and Space Sciences)",
      content: <G2ScienceSoilTerm3 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G2HASSSoilTerm3 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologySoilTerm3 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsSoilTerm3 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicSoilTerm3 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthSoilTerm3 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalSoilTerm3 />,
    },
    {
      id: "item10",
      label: "Khmer",
      content: <G2KhmerSoilTerm3 />,
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

export default SoilTerm3;
