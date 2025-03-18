import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLoader from "../components/loaders/MainLoader";
import gradient from "../assets/gradient.png";
import Chatbot from "../components/Chatbot";
import HomapageNavbar from "../components/HomapageNavbar";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <MainLoader />}

      <div className="w-full min-h-screen bg-black">
        <HomapageNavbar />
        <div className="homepage text-gray-300">
          <div className="layer-blur h-0 w-[30rem] absolute top-[20%] right-0 shadow-[0_0_700px_15px_white] rotate-[-30deg] z-[-1]"></div>
          <main className="flex flex-col">
            <div className="content w-full ml-0 md:ml-[10%] z-50 mt-50 mb-10 px-[10%] md:px-0">
              <div
                className="tag-box"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-a0s-duration="1500"
              >
                <div className="tag absolute font-bold inset-1 bg-black rounded-[50px] flex items-center justify-center transition-all duration-500 ease-in-out">
                  INTRODUCING
                </div>
              </div>

              <h1
                className="text-[5rem] font-bold tracking-[0.1rem] my-8  text-shadow-[0_0_10px_rgba(128,128,128,0.418)] leading-none"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-a0s-duration="2000"
              >
                WISPP <br></br>ROADMAP
              </h1>
              <p
                className="description text-[1.2rem] tracking-[0.05em] max-w-[45rem] text-gray-500"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-a0s-duration="2500"
              >
                Empower your teaching at Westbridge International School of
                Phnom Penh with our dedicated curriculum and syllabus platform.
                This essential resource guides teachers through each lesson,
                ensuring seamless execution and alignment with our established
                scope and sequence. Explore a wealth of online resources
                designed to save you time and enrich your students' learning
                experience.
              </p>
              <div
                className="buttons flex gap-4 mt-12"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-a0s-duration="3000"
              >
                <Link
                  to="/about"
                  className="btn-signing-main no-underline bg-gray-300 text-black px-10 py-2.5 rounded-[0%_50px] text-[1.2rem] font-semibold tracking-[0.1em] transition-colors duration-200 ease-in-out hover:bg-gray-500"
                >
                  About &gt;
                </Link>
              </div>
            </div>
            <spline-viewer
              className="robot-3d md:w-[100%] absolute top-0 right-[-20%]"
              url="https://prod.spline.design/FmaJ7Bzsd6KXKQf7/scene.splinecode"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-a0s-duration="3000"
            ></spline-viewer>
          </main>
        </div>
        <Chatbot />
      </div>
    </>
  );
}

export default Home;
