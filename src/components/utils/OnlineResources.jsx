import abcya from "../assets/abcya.png";
import classdojo from "../assets/classdojo.png";
import gamilab from "../assets/gamilab.png";
import GOM from "../assets/GOM.png";
import google from "../assets/google.png";
import lessonplan from "../assets/lessonplan.png";

function OnlineResources() {
  return (
    <div className="logos w-[100%] md:w-[750px] lg:w-[850px] relative bg-[#051923] overflow-hidden whitespace-nowrap mt-4">
      <div className="flex w-full items-center justify-evenly">
        <div className="w-[100%] bg-[#003554] h-[1px] mt-4 rotate-180"></div>
        <h1 className="text-xs md:text-[1rem] mt-[1rem] w-[100%] md:w-[50%] border-1 border-[#003554] text-center px-2 py-1.5 text-gray-300 rounded-lg">
          Online Resources 🔥
        </h1>
        <div className="w-[100%] bg-[#003554] h-[1px] mt-4 rotate-180"></div>
      </div>
      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideleft_15s_linear_infinite] mr-4 mt-4">
        <a href="https://www.classdojo.com/v1/" target="_blank">
          <img
            src={classdojo}
            alt="classdojo-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>

        <a href="https://gamilab.com/" target="_blank">
          <img
            src={gamilab}
            alt="gamilab-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.abcya.com/" target="_blank">
          <img
            src={abcya}
            alt="abcya-logo"
            className="inline-flex h-[7vw] md:h-[40px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://erickyuste.github.io/GOM.Ai/" target="_blank">
          <img
            src={GOM}
            alt="GOM-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://edu.google.com/teaching-resources/" target="_blank">
          <img
            src={google}
            alt="google-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://erickyuste.github.io/LessonPlanAi/" target="_blank">
          <img
            src={lessonplan}
            alt="lessonplan-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>

      <div className="logos-slide inline-flex gap-2 md:gap-8 animate-slide animate-[slideleft_15s_linear_infinite] mr-4">
        <a href="https://www.classdojo.com/v1/" target="_blank">
          <img
            src={classdojo}
            alt="classdojo-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://gamilab.com/" target="_blank">
          <img
            src={gamilab}
            alt="gamilab-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://www.abcya.com/" target="_blank">
          <img
            src={abcya}
            alt="abcya-logo"
            className="inline-flex h-[7vw] md:h-[40px] mx-[20px]  cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://erickyuste.github.io/GOM.Ai/" target="_blank">
          <img
            src={GOM}
            alt="GOM-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://edu.google.com/teaching-resources/" target="_blank">
          <img
            src={google}
            alt="google-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px]  rounded-xl cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
        <a href="https://erickyuste.github.io/LessonPlanAi/" target="_blank">
          <img
            src={lessonplan}
            alt="lessonplan-logo"
            className="inline-flex h-[7vw] md:h-[50px] mx-[20px] cursor-pointer hover:scale-110 transition-transform duration-500"
          />
        </a>
      </div>
    </div>
  );
}

export default OnlineResources;
