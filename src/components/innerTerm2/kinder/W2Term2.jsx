import React, { useState } from "react";
import KLearningOutcomes2b from "../../subjects/kinder/KLearningOutcomes2b";

function W2Term2() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: "item1",
      label:
        "(b) Developing inquiry and communication skills when exploring and connecting with groups",
      content: <KLearningOutcomes2b />,
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <p className="mb-1 font-bold text-xs md:text-md lg:text-[1rem]">
        2.1 Developing a sense of connectedness to groups and communities and an
        understanding of reciprocal rights and responsibilities as active and
        informed citizens
      </p>
      <ul className="accordion mx-[1rem] w-[100%] md:w-[750px] lg:w-[800px]">
        {items.map((item) => (
          <li
            key={item.id}
            className={`list-none w-full my-1 px-2 rounded-lg bg-[#0582ca] border-[#003554] text-white border-3 hover:border-[#0582ca] ${
              openItem === item.id ? "active" : ""
            }`}
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

export default W2Term2;
