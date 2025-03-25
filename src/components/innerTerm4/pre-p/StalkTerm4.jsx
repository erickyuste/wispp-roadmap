import React, { useState } from "react";
import PrepEnglishStalkTerm4 from "../../subjects/english/pre-p/PrepEnglishStalkTerm4";
import PrepMathStalkTerm4 from "../../subjects/math/pre-p/PrepMathStalkTerm4";
import PrepHASSStalkTerm4 from "../../subjects/hass/pre-p/PrepHASSStalkTerm4";
import PrepTechStalkTerm4 from "../../subjects/technology/pre-p/PrepTechStalkTerm4";
import PrepScienceStalkTerm4 from "../../subjects/science/pre-p/PrepScienceStalkTerm4";
import PrePDramaStalkTerm4 from "../../subjects/drama/PrePDramaStalkTerm4";
import PrepHealthStalkTerm4 from "../../subjects/healthEducation/pre-p/PrepHealthStalkTerm4";

function StalkTerm4() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label: "English",
      content: <PrepEnglishStalkTerm4 />,
    },
    {
      id: "item2",
      label: "Math",
      content: <PrepMathStalkTerm4 />,
    },
    {
      id: "item3",
      label: "Science (Integrated Learning)",
      content: <PrepScienceStalkTerm4 />,
    },
    {
      id: "item4",
      label: "Humanities and Social Studies (Geography)",
      content: <PrepHASSStalkTerm4 />,
    },
    {
      id: "item5",
      label: "Technology (Integrated Learning)",
      content: <PrepTechStalkTerm4 />,
    },
    {
      id: "item6",
      label: "The Arts: Drama (Integrated Learning)",
      content: <PrePDramaStalkTerm4 />,
    },
    {
      id: "item7",
      label: "Health Education (Integrated Learning)",
      content: <PrepHealthStalkTerm4 />,
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

export default StalkTerm4;
