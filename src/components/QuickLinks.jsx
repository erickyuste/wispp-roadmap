export default function QuickLinks(props) {
  return (
    <div>
      <div className="quicklinks-slide h-full w-full flex flex-wrap justify-evenly">
        <button
          id="seemore"
          className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a
            href="https://k10outline.scsa.wa.edu.au/home/wa-curriculum/learning-areas/english/p-10-english-teaching"
            target="_blank"
          >
            Teaching
          </a>
        </button>
        <button
          id="seemore"
          className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a href="https://k10outline.scsa.wa.edu.au/home" target="_blank">
            Syllabus
          </a>
        </button>
        <button
          id="seemore"
          className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a
            href="https://k10outline.scsa.wa.edu.au/home/wa-curriculum/learning-areas/english/p-10-english-assessing"
            target="_blank"
          >
            Assessing
          </a>
        </button>
        <button
          id="seemore"
          className="w-[11em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a
            href="https://k10outline.scsa.wa.edu.au/home/wa-curriculum/learning-areas/english/p-10-english-curriculum"
            target="_blank"
          >
            Scope & Sequence
          </a>
        </button>
        <button
          id="seemore"
          className="w-[11em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a href={props.judging} target="_blank">
            Judging Standards
          </a>
        </button>
        <button
          id="seemore"
          className="w-[6em] h-[2em] rounded-xl text-xs md:text-sm  text-white border-2 border-white font-bold hover:bg-white hover:text-[#003554]"
        >
          <a href={props.exemplar} target="_blank">
            Exemplar
          </a>
        </button>
      </div>
    </div>
  );
}
