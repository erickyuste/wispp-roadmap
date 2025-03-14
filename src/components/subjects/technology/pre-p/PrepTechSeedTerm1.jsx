import React from "react";

function PrepTechSeedTerm1() {
  return (
    <div>
      <div className="inner-content px-[.2rem] md:px-[1rem]">
        <p className="font-semibold text-xs md:text-[16px] sm:text-sm text-white ">
          Digital systems
        </p>
        <p className="font-semibold text-xs md:text-[16px] sm:text-sm text-white">
          • Digital systems (hardware and software) are used at home, in the
          school and in the community
        </p>
        <br></br>
        <div className="gap-2 mt-2 flex flex-wrap">
          <button className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://drive.google.com/file/d/1FpMbaLPNY4KRF2DPffBTo0HjL33Y58cO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </button>

          <button className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://drive.google.com/file/d/1HqMcFeIVS9GgRLYRlBXhD_T7eu0jekqu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Judging
            </a>
          </button>

          <button className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://erickyuste.github.io/LessonPlanAi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create LP
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrepTechSeedTerm1;
