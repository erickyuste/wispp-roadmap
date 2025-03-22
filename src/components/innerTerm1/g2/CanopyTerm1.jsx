import React, { useState } from "react";
import G2EnglishCanopyTerm1 from "../../subjects/english/g2/G2EnglishCanopyTerm1";
import G2MathCanopyTerm1 from "../../subjects/math/g2/G2MathCanopyTerm1";
import G2ScienceCanopyTerm1 from "../../subjects/science/g2/G2ScienceCanopyTerm1";
import G2HASSCanopyTerm1 from "../../subjects/hass/g2/G2HASSCanopyTerm1";
import G2TechnologyCanopyTerm1 from "../../subjects/technology/g2/G2TechnologyCanopyTerm1";
import G2VisualArtsCanopyTerm1 from "../../subjects/visual arts/g2/G2VisualArtsCanopyTerm1";
import G2MusicCanopyTerm1 from "../../subjects/music/g2/G2MusicCanopyTerm1";
import G2HealthCanopyTerm1 from "../../subjects/healthEducation/g2/G2HealthCanopyTerm1";
import G2PhysicalCanopyTerm1 from "../../subjects/physicalEducation/g2/G2PhysicalCanopyTerm1";

function CanopyTerm1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishCanopyTerm1 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathCanopyTerm1 />,
    },
    {
      id: "item3",
      label: "Science (Chemical Sciences)",
      content: <G2ScienceCanopyTerm1 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G2HASSCanopyTerm1 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyCanopyTerm1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsCanopyTerm1 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicCanopyTerm1 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthCanopyTerm1 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalCanopyTerm1 />,
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

export default CanopyTerm1;
