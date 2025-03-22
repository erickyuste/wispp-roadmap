import React, { useState } from "react";
import G2EnglishSeedTerm1 from "../../subjects/english/g2/G2EnglishSeedTerm1";
import G2MathSeedTerm1 from "../../subjects/math/g2/G2MathSeedTerm1";
import G2ScienceSeedTerm1 from "../../subjects/science/g2/G2ScienceSeedTerm1";
import G2HASSSeedTerm1 from "../../subjects/hass/g2/G2HASSSeedTerm1";
import G2TechnologySeedTerm1 from "../../subjects/technology/g2/G2TechnologySeedTerm1";
import G2VisualArtsSeedTerm1 from "../../subjects/visual arts/g2/G2VisualArtsSeedTerm1";
import G2HealthSeedTerm1 from "../../subjects/healthEducation/g2/G2HealthSeedTerm1";
import G2MusicSeedTerm1 from "../../subjects/music/g2/G2MusicSeedTerm1";
import G2PhysicalSeedTerm1 from "../../subjects/physicalEducation/g2/G2PhysicalSeedTerm1";

function SeedTerm1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishSeedTerm1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathSeedTerm1 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G2ScienceSeedTerm1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G2HASSSeedTerm1 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologySeedTerm1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsSeedTerm1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicSeedTerm1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthSeedTerm1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalSeedTerm1 />,
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

export default SeedTerm1;
