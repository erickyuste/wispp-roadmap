import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/utils/Loader";
import videoBg from "../assets/video-bg.mp4";
import Chatbot from "../components/chatbotContent/Chatbot";
import HomapageNavbar from "../components/HomapageNavbar";
import data from "../data/header.js";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[13];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setContentVisible(true);
      }, 3000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader loader={headerItem.loader} />}

      <div className="w-full min-h-screen bg-black block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full min-h-screen object-cover block md:hidden"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 min-h-screen bg-black opacity-80 block md:hidden"></div>

        <HomapageNavbar />

        <div className="homepage text-gray-300">
          <main className="flex flex-col">
            <div className="homepage-content w-full ml-0 md:ml-[10%] z-50 mt-50 mb-10 px-[10%] md:px-0">
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
                className="description text-[1.2rem] tracking-[0.05em] max-w-[45rem] text-gray-400"
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
              className="robot-3d absolute top-0 right-[-20%] hidden md:block"
              url="https://prod.spline.design/kqy2hHpxHsvQdWdL/scene.splinecode"
            ></spline-viewer>
          </main>
        </div>
        <Chatbot />
      </div>
    </>
  );
}

export default Home;
