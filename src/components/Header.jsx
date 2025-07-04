export default function Header(props) {
  return (
    <div className="w-[100vw] mt-[2rem] md:mt-[5rem] h-auto flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[830px]" id="upper-content">
        <div className="flex flex-col items-left">
          <h1 className="title text-[2rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[5.5rem] font-bold text-gray-300 text-center">
            {props.grade} <span className={props.style}>Roadmap</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-md lg:text-lg px-[1rem] sm:px-[1.75rem] md:px-[9rem] lg:px-0 my-2">
            This roadmap guides your successful implementation of the Western
            Australian Curriculum in Grade {props.grade}. It offers term plans,
            assessment ideas, differentiation tips, and valuable resources to
            support your teaching journey.
          </p>
        </div>
      </div>
    </div>
  );
}
