import React from "react";

function G1MusicCanopyTerm1() {
  return (
    <div>
      <div className="inner-content px-[.2rem] md:px-[1rem]">
        <p className="font-semibold text-xs md:text-[16px] sm:text-sm text-white ">
          • Welcome activity
        </p>
        <p className="font-semibold text-xs md:text-[16px] sm:text-sm text-white">
          • Music and literature
        </p>
        <p className="font-semibold text-xs md:text-[16px] sm:text-sm text-white">
          • Beat activity
        </p>
        <br></br>

        <div className="gap-2 mt-2 flex flex-wrap">
          <button className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://drive.google.com/file/d/1X6sr-rdEWf_fEv0n6Nt2q6nQlFmE5C7-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more
            </a>
          </button>

          <button className="w-[7em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://drive.google.com/file/d/14yxpC0YxnC3eR50EkDn5_Z4R8yXdRoPl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources
            </a>
          </button>

          <button className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm text-white border-2 border-white font-bold hover:text-[#0582ca] hover:bg-white">
            <a
              href="https://drive.google.com/file/d/1WEYp4Pzv3VkKfRnzBxqYDqcO1_jEJSIF/view?usp=sharing"
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

export default G1MusicCanopyTerm1;
