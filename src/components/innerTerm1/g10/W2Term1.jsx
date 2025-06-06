import React, { useState } from "react";
import G6EnglishW2Term1 from "../../subjects/english/g6/G6EnglishW2Term1";
import G6MathW2Term1 from "../../subjects/math/g6/G6MathW2Term1";
import G10BioW1to2Term1 from "../../subjects/science/g10/G10BioW1to2Term1";
import G10HistoryW1to2T1 from "../../subjects/hass/g10/G10HistoryW1to2T1";
import G10TechW1to3Term1 from "../../subjects/technology/g10/G10TechW1to3Term1";
import G10VisualW1to2Term1 from "../../subjects/visual arts/g10/G10VisualW1to2Term1";
import G10HETerm1 from "../../subjects/healthEducation/g10/G10HETerm1";
import G10PEW1to3Term1 from "../../subjects/physicalEducation/g10/G10PEW1to3Term1";
import G6MandarinW2Term1 from "../../subjects/mandarin/g6/G6MandarinW2Term1";

function W2Term1() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: "No content yet",
    },
    {
      id: "item2",
      label: "Math",
      content: "No content yet",
    },
    {
      id: "item3",
      label: "Science - Biological (DNA, genes and inheritance)",
      content: <G10BioW1to2Term1 />,
    },
    {
      id: "item4",
      label: "HaSS - History",
      content: <G10HistoryW1to2T1 />,
    },
    {
      id: "item5",
      label: "Technology - Digital",
      content: <G10TechW1to3Term1 />,
    },
    {
      id: "item6",
      label: "The Arts: Visual Arts",
      content: <G10VisualW1to2Term1 />,
    },
    {
      id: "item7",
      label: "Health Education - Respectful Relationships",
      content: <G10HETerm1 />,
    },
    {
      id: "item8",
      label: "Physical Education",
      content: <G10PEW1to3Term1 />,
    },
    {
      id: "item9",
      label: "Language: Mandarin",
      content: "No content yet",
    },
    {
      id: "item10",
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
              className="flex items-center p-[.65rem] cursor-pointer before:content-['🚩'] before:mr-[10px] text-xs sm:text-sm md:text-md lg:text-lg font-bold "
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

export default W2Term1;
