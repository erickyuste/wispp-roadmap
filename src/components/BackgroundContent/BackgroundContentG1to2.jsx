import img1 from "../../assets/img1.png";

export default function BackgroundContentG1to2() {
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
        The exemplar demonstrates one approach to planning from the Outline and
        exemplifies the three inter-related elements: Principles, Practice and
        Learning Outcomes from the Early Years Learning Framework (EYLF). These
        three elements are fundamental to early childhood pedagogy and
        curriculum decision-making.
      </p>
      <br></br>
      <p className="font-semibold md:text-[16px] sm:text-sm text-xs text-gray-300">
        The teaching and learning is represented by a non-arbitrary measurement
        of time. The following symbols: Soil, Seed, Stalk, Flower, Canopy
        demonstrate the progression of knowledge, understanding and skills to be
        taught during the natural ebb and flow of teaching and learning in the
        early years.
      </p>
      <br></br>
      <img src={img1} alt="time measurement image" />
    </div>
  );
}
