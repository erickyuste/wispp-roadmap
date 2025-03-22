import React, { useState } from "react";
import G1EnglishCanopyTerm4 from "../../subjects/english/g1/G1EnglishCanopyTerm4";
import G1MathCanopyTerm4 from "../../subjects/math/g1/G1MathCanopyTerm4";
import G1ScienceCanopyTerm4 from "../../subjects/science/g1/G1ScienceCanopyTerm4";
import G1HASSCanopyTerm4 from "../../subjects/hass/g1/G1HASSCanopyTerm4";
import G1TechnologyCanopyTerm4 from "../../subjects/technology/g1/G1TechnologyCanopyTerm4";
import G1VisualArtsCanopyTerm4 from "../../subjects/visual arts/g1/G1VisualArtsCanopyTerm4";
import G1MusicCanopyTerm4 from "../../subjects/music/g1/G1MusicCanopyTerm4";
import G1HealthCanopyTerm4 from "../../subjects/healthEducation/g1/G1HealthCanopyTerm4";
import G1PhysicalCanopyTerm4 from "../../subjects/physicalEducation/g1/G1PhysicalCanopyTerm4";

function CanopyTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishCanopyTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathCanopyTerm4 />,
    },
    {
      id: "item3",
      label: "Science (Physical Sciences)",
      content: <G1ScienceCanopyTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G1HASSCanopyTerm4 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologyCanopyTerm4 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsCanopyTerm4 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicCanopyTerm4 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthCanopyTerm4 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalCanopyTerm4 />,
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

export default CanopyTerm4;
