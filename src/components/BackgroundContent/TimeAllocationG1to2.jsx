import timeallocation from "../../assets/timeallocation.png";

export default function TimeAllocationG1to2() {
  return (
    <div>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        This exemplar assumes a 25 hour teaching week over 40 teaching weeks per
        year. It is recognised that school teaching hours often exceed 25 hours
        per week and that the length of the school year may vary.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The teaching and learning reflected in this exemplar is designed to ebb
        and flow across the term, taking into account the repetitive nature of
        early childhood. The teacher is responsible for identifying the needs of
        the children and to make suitable changes accordingly.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The following table outlines the time allocation for learning areas
        reflected in the exemplar and the allocated time available for
        school-based programs.
      </p>
      <br></br>
      <img src={timeallocation} alt="time measurement image" />
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        * The time allocation for English is six (6) hours each week. <br></br>†
        The amount of unallocated time will depend on whether a language program
        is offered.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        Teachers should use their professional judgement to decide the amount of
        time required to complete activities based on the learning needs and
        interests of their children.
      </p>
    </div>
  );
}
