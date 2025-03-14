import React, { useState } from "react";
import G1EnglishSeedTerm2 from "../../subjects/english/g1/G1EnglishSeedTerm2";
import G1MathSeedTerm2 from "../../subjects/math/g1/G1MathSeedTerm2";
import G1ScienceSeedTerm2 from "../../subjects/science/g1/G1ScienceSeedTerm2";
import G1HASSSeedTerm2 from "../../subjects/hass/g1/G1HASSSeedTerm2";
import G1TechnologySeedTerm2 from "../../subjects/technology/g1/G1TechnologySeedTerm2";
import G1VisualArtsSeedTerm2 from "../../subjects/visual arts/g1/G1VisualArtsSeedTerm2";
import G1MusicSeedTerm2 from "../../subjects/music/g1/G1MusicSeedTerm2";
import G1HealthSeedTerm2 from "../../subjects/healthEducation/g1/G1HealthSeedTerm2";
import G1PhysicalSeedTerm2 from "../../subjects/physicalEducation/g1/G1PhysicalSeedTerm2";

function SeedTerm2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishSeedTerm2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathSeedTerm2 />,
    },
    {
      id: "item3",
      label: "Science (Biological Sciences)",
      content: <G1ScienceSeedTerm2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G1HASSSeedTerm2 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologySeedTerm2 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsSeedTerm2 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicSeedTerm2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthSeedTerm2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalSeedTerm2 />,
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

export default SeedTerm2;
