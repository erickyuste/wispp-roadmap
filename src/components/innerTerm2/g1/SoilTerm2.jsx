import React, { useState } from "react";
import G1EnglishSoilTerm2 from "../../subjects/english/g1/G1EnglishSoilTerm2";
import G1MathSoilTerm2 from "../../subjects/math/g1/G1MathSoilTerm2";
import G1ScienceSoilTerm2 from "../../subjects/science/g1/G1ScienceSoilTerm2";
import G1HASSSoilTerm2 from "../../subjects/hass/g1/G1HASSSoilTerm2";
import G1TechnologySoilTerm2 from "../../subjects/technology/g1/G1TechnologySoilTerm2";
import G1VisualArtsSoilTerm2 from "../../subjects/visual arts/g1/G1VisualArtsSoilTerm2";
import G1MusicSoilTerm2 from "../../subjects/music/g1/G1MusicSoilTerm2";
import G1HealthSoilTerm2 from "../../subjects/healthEducation/g1/G1HealthSoilTerm2";
import G1PhysicalSoilTerm2 from "../../subjects/physicalEducation/g1/G1PhysicalSoilTerm2";

function SoilTerm2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishSoilTerm2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathSoilTerm2 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G1ScienceSoilTerm2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G1HASSSoilTerm2 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologySoilTerm2 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsSoilTerm2 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicSoilTerm2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthSoilTerm2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalSoilTerm2 />,
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
            }`} // Added active class
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

export default SoilTerm2;
