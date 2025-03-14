import React, { useState } from "react";
import G2EnglishCanopyTerm2 from "../../subjects/english/g2/G2EnglishCanopyTerm2";
import G2MathCanopyTerm2 from "../../subjects/math/g2/G2MathCanopyTerm2";
import G2ScienceCanopyTerm2 from "../../subjects/science/g2/G2ScienceCanopyTerm2";
import G2HASSCanopyTerm2 from "../../subjects/hass/g2/G2HASSCanopyTerm2";
import G2TechnologyCanopyTerm2 from "../../subjects/technology/g2/G2TechnologyCanopyTerm2";
import G2VisualArtsCanopyTerm2 from "../../subjects/visual arts/g2/G2VisualArtsCanopyTerm2";
import G2MusicCanopyTerm2 from "../../subjects/music/g2/G2MusicCanopyTerm2";
import G2HealthCanopyTerm2 from "../../subjects/healthEducation/g2/G2HealthCanopyTerm2";
import G2PhysicalCanopyTerm2 from "../../subjects/physicalEducation/g2/G2PhysicalCanopyTerm2";

function CanopyTerm2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishCanopyTerm2 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathCanopyTerm2 />,
    },
    {
      id: "item3",
      label: "Science (Biological Sciences)",
      content: <G2ScienceCanopyTerm2 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <G2HASSCanopyTerm2 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyCanopyTerm2 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsCanopyTerm2 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicCanopyTerm2 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthCanopyTerm2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalCanopyTerm2 />,
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

export default CanopyTerm2;
