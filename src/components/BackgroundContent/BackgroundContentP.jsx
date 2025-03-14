import React from "react";
import img2 from "../../assets/img2.png";

function BackgroundContentP() {
  return (
    <div>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The Western Australian Curriculum and Assessment Outline (the Outline)
        sets out the mandated curriculum, guiding principles for teaching,
        learning and assessment, and support for teachers in their assessment
        and reporting of student achievement.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        This exemplar demonstrates two transition periods in the year, Term 1
        Kindergarten to Pre-primary and Term 4 Pre-primary to Year 1. Term 1
        recognises the importance of spending time getting to know the children,
        while establishing an understanding of individual skills and knowledge.
        Term 4 supports teachers in recognising the expected levels of
        achievement as indicated by the Judging Standards for a smooth
        transition into Year 1. Teachers plan according to their children,
        classroom and school context in Terms 2 and 3.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The teaching and learning experiences provided in the exemplar are
        flexible and should be guided by the children’s interests and
        curiosities. The teaching and learning experiences provided in the
        exemplar are not exhaustive, and teachers, in collaboration with their
        colleagues, are encouraged to make professional decisions about which
        learning experiences, and the sequence in which they are delivered, are
        best suited to their classroom context, taking into account the
        availability of resources and the needs of the children. The exemplar is
        a sequence of teaching and learning that provides the teacher with
        autonomy in the teaching and learning process.
      </p>
      <br></br>
      <img src={img2} alt="time measurement image" />
    </div>
  );
}

export default BackgroundContentP;
