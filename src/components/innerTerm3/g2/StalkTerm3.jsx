import React, { useState } from "react";
import G2EnglishStalkTerm3 from "../../subjects/english/g2/G2EnglishStalkTerm3";
import G2MathStalkTerm3 from "../../subjects/math/g2/G2MathStalkTerm3";
import G2ScienceStalkTerm3 from "../../subjects/science/g2/G2ScienceStalkTerm3";
import G2HASSStalkTerm3 from "../../subjects/hass/g2/G2HASSStalkTerm3";
import G2TechnologyStalkTerm3 from "../../subjects/technology/g2/G2TechnologyStalkTerm3";
import G2VisualArtsStalkTerm3 from "../../subjects/visual arts/g2/G2VisualArtsStalkTerm3";
import G2MusicStalkTerm3 from "../../subjects/music/g2/G2MusicStalkTerm3";
import G2HealthStalkTerm3 from "../../subjects/healthEducation/g2/G2HealthStalkTerm3";
import G2PhysicalStalkTerm3 from "../../subjects/physicalEducation/g2/G2PhysicalStalkTerm3";
import G2KhmerStalkTerm3 from "../../subjects/khmer/g2/G2KhmerStalkTerm3";
import G2MandarinStalkTerm3 from "../../subjects/mandarin/g2/G2MandarinStalkTerm3";

function StalkTerm3() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <G2EnglishStalkTerm3 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <G2MathStalkTerm3 />,
    },
    {
      id: "item3",
      label: "Science (Earth and Space Sciences)",
      content: <G2ScienceStalkTerm3 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (History)",
      content: <G2HASSStalkTerm3 />,
    },
    {
      id: "item5",
      label: "Technology (Digital and Design)",
      content: <G2TechnologyStalkTerm3 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G2VisualArtsStalkTerm3 />,
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: <G2MusicStalkTerm3 />,
    },
    {
      id: "item8",
      label: "Health Education",
      content: <G2HealthStalkTerm3 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G2PhysicalStalkTerm3 />,
    },
    {
      id: "item10",
      label: "Language: Mandarin",
      content: <G2MandarinStalkTerm3 />,
    },
    {
      id: "item11",
      label: "Khmer",
      content: <G2KhmerStalkTerm3 />,
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

export default StalkTerm3;
