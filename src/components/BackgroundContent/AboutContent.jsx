import React from "react";
import bot from "../../assets/bot.gif";

function Header() {
  return (
    <div className="w-[100vw] mt-[2rem] md:mt-[5rem] h-auto flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[830px]" id="upper-content">
        <div className="flex flex-col items-left">
          <h1 className="title leading-none text-[2rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[5.5rem] font-bold text-gray-300 text-center mb-3">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006494] to-[#FF7F50]">
              WISPP Roadmap
            </span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-md lg:text-lg px-[1rem] sm:px-[1.75rem] md:px-[9rem] lg:px-0 my-2">
            Welcome to the Westbridge Curriculum Roadmap, your comprehensive
            curriculum guide designed exclusively for teachers at Westbridge
            International School of Phnom Penh. Our mission is to empower
            educators with the tools and resources necessary to deliver a
            high-quality, consistent, and engaging learning experience for our
            students from Kindergarten through Grade 6.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm md:text-md lg:text-lg px-[1rem] sm:px-[1.75rem] md:px-[9rem] lg:px-0 my-2">
            <span className="font-bold text-gray-100">
              Navigating the Academic Year with Precision:
            </span>
            <br></br>
            <br></br>
            This platform provides a meticulously crafted timetable mapping for
            the entire academic school year. Each syllabus component is
            strategically plotted against the school calendar, ensuring a
            seamless flow of learning. This mapping is crucial because:<br></br>
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Optimized Time Management
            </span>
            : It allows teachers to effectively allocate time to each topic,
            preventing rushed lessons or neglected areas.<br></br>{" "}
            <span className="font-bold text-gray-300">
              • Contextual Learning
            </span>
            : Aligning the curriculum with the school calendar allows for the
            integration of seasonal events, holidays, and school-wide activities
            into lessons, making learning more relevant and engaging.
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Predictability and Consistency
            </span>
            : Students benefit from a predictable learning schedule, fostering a
            sense of security and enhancing their ability to absorb information.
            <br></br>
            <br></br>
            <span className="font-bold text-gray-100">
              Empowering Teachers with Advanced Resources:
            </span>
            <br></br>
            <br></br>
            Beyond the timetable, the Curriculum Roadmap offers a wealth of
            online resources, quick links to exemplar lessons, and an innovative
            AI-powered lesson plan generator. These features offer significant
            advantages:<br></br>
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Enhanced Efficiency
            </span>
            : The AI lesson plan generator streamlines the lesson planning
            process, allowing teachers to focus on delivery and student
            interaction.
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Access to Best Practices
            </span>
            : Quick links to exemplar lessons provide valuable insights and
            inspiration, showcasing effective teaching strategies.
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Expanded Resource Library
            </span>
            : Online resources offer a diverse range of materials, catering to
            different learning styles and enriching the curriculum.<br></br>
            <br></br>
            <span className="font-bold text-gray-100">
              Maintaining Curriculum Integrity and Quality:
            </span>
            <br></br>
            <br></br>
            Adhering to the scope and sequence of the curriculum is paramount to
            ensuring a consistent and high-quality educational experience. The
            Curriculum Roadmap assists in this by:<br></br>{" "}
            <span className="font-bold text-gray-300">
              • Clear Curriculum Alignment
            </span>
            : Providing a clear visual representation of the curriculum's
            progression, ensuring that all learning objectives are met in the
            correct order.<br></br>{" "}
            <span className="font-bold text-gray-300">
              • Consistent Delivery
            </span>
            : Helping teachers maintain a standardized level of content and
            delivery across all classrooms, ensuring that every student receives
            an equitable education.
            <br></br>{" "}
            <span className="font-bold text-gray-300">• Quality Assurance</span>
            : By following the scope and sequence, we ensure that students build
            upon prior knowledge, fostering a deeper understanding of each
            subject.
            <br></br>
            <br></br>
            <span className="font-bold text-gray-100">
              Fostering Creativity and Flexibility:
            </span>
            <br></br>
            <br></br>
            While this platform serves as a vital guide to the mandated Western
            Australian Curriculum, it is not intended to stifle creativity. We
            encourage teachers to use this as a foundation and to:<br></br>
            <span className="font-bold text-gray-300">
              • Personalize Lessons
            </span>
            : Adapt and expand upon the provided materials to meet the unique
            needs and interests of their students.<br></br>{" "}
            <span className="font-bold text-gray-300">
              • Integrate Innovative Teaching Methods
            </span>
            : Explore and incorporate new teaching techniques and technologies
            to enhance the learning experience.
            <br></br>{" "}
            <span className="font-bold text-gray-300">• Broaden Content</span>:
            Add extra content to deepen the students understanding of the
            subject.<br></br>
            <br></br>
            <span className="font-bold text-gray-100">
              Adherence to the Western Australian Curriculum:
            </span>
            <br></br>
            <br></br>
            This platform is designed to facilitate the strict adherence to the
            mandated course outline of the Western Australian Curriculum. It is
            crucial to understand that:<br></br>
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Educational Purpose
            </span>
            : All content and resources provided are for the exclusive
            educational purposes of Westbridge International School of Phnom
            Penh.<br></br>{" "}
            <span className="font-bold text-gray-300">
              • No Copyright Infringement
            </span>
            : This platform does not claim ownership of the Western Australian
            Curriculum. All materials are used under fair use principles for
            educational purposes. We acknowledge and respect the intellectual
            property of the Western Australian Curriculum.
            <br></br>{" "}
            <span className="font-bold text-gray-300">
              • Curriculum Fidelity
            </span>
            : We are committed to upholding the integrity and standards of the
            Western Australian Curriculum, ensuring that our students receive a
            world-class education.<br></br>
            <br></br>
            <span className="font-bold text-gray-300">
              • Integrate Innovative Teaching Methods
            </span>
            : Explore and incorporate new teaching techniques and technologies
            to enhance the learning experience.<br></br>
            <div className="flex items-center gap-4 my-2">
              <img src={bot} />
              <span className="font-bold text-gray-100 pt-1">
                {" "}
                Chatbot Assistance:
              </span>
            </div>
            In the lower right corner, our website features an AI{" "}
            <span className="material-symbols-rounded">smart_toy</span> Chatbot,
            powered by Google's Gemini, acting as your academic assistant,
            providing instant support and information from our extensive school
            knowledge bank, offering benefits like quick answers, 24/7
            availability, and personalized guidance for a seamless browsing
            experience.<br></br>
            <br></br> The Westbridge Curriculum Roadmap is a testament to our
            commitment to providing our teachers with the best possible
            resources, enabling them to inspire and empower the next generation
            of learners. We are confident that this platform will be an
            invaluable tool in your teaching journey.<br></br>
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
