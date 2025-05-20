import React, { useState } from "react";
import G6EnglishW3Term1 from "../../subjects/english/g6/G6EnglishW3Term1";
import G6MathW3Term1 from "../../subjects/math/g6/G6MathW3Term1";
import G6ScienceW3Term1 from "../../subjects/science/g6/G6ScienceW3Term1";
import G10GeoW3to4T2 from "../../subjects/hass/g10/G10GeoW3to4T2";
import G6TechW3Term1 from "../../subjects/technology/g6/G6TechW3Term1";
import G6DramaW3Term1 from "../../subjects/drama/g6/G6DramaW3Term1";
import G6MusicW3Term1 from "../../subjects/music/g6/G6MusicW3Term1";
import G10HETerm2 from "../../subjects/healthEducation/g10/G10HETerm2";
import G10PEW1to3Term2 from "../../subjects/physicalEducation/g10/G10PEW1to3Term2";
import G6MandarinW3Term1 from "../../subjects/mandarin/g6/G6MandarinW3Term1";

function W3Term2() {
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
      label: "Science",
      content: "No content yet",
    },
    {
      id: "item4",
      label: "Humanities and Social Studies - Geography",
      content: <G10GeoW3to4T2 />,
    },
    {
      id: "item5",
      label: "Technology",
      content: "No content yet",
    },
    {
      id: "item6",
      label: "The Arts: Drama",
      content: "No content yet",
    },
    {
      id: "item7",
      label: "The Arts: Music",
      content: "No content yet",
    },
    {
      id: "item8",
      label: "Health Education - Respectful Relationships",
      content: <G10HETerm2 />,
    },
    {
      id: "item9",
      label: "Physical Education",
      content: <G10PEW1to3Term2 />,
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

export default W3Term2;
