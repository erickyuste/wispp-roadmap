import React, { useState } from "react";
import G1EnglishCanopyTerm1 from "../../subjects/english/g1/G1EnglishCanopyTerm1";
import G1MathCanopyTerm1 from "../../subjects/math/g1/G1MathCanopyTerm1";
import G1ScienceCanopyTerm1 from "../../subjects/science/g1/G1ScienceCanopyTerm1";
import G1HASSCanopyTerm1 from "../../subjects/hass/g1/G1HASSCanopyTerm1";
import G1TechnologyCanopyTerm1 from "../../subjects/technology/g1/G1TechnologyCanopyTerm1";
import G1VisualArtsCanopyTerm1 from "../../subjects/visual arts/g1/G1VisualArtsCanopyTerm1";
import G1MusicCanopyTerm1 from "../../subjects/music/g1/G1MusicCanopyTerm1";
import G1HealthCanopyTerm1 from "../../subjects/healthEducation/g1/G1HealthCanopyTerm1";
import G1PhysicalCanopyTerm1 from "../../subjects/physicalEducation/g1/G1PhysicalCanopyTerm1";

function CanopyTerm1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G1EnglishCanopyTerm1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G1MathCanopyTerm1 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G1ScienceCanopyTerm1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G1HASSCanopyTerm1 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G1TechnologyCanopyTerm1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G1VisualArtsCanopyTerm1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G1MusicCanopyTerm1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G1HealthCanopyTerm1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G1PhysicalCanopyTerm1 />,
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
              className="flex items-center p-[.65rem] font-bold cursor-pointer before:content-['🚩'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg"
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

export default CanopyTerm1;
