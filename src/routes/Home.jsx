import React, { useState, useEffect } from "react";
import MainLoader from "../components/loaders/MainLoader";
import videobg from "../assets/video-bg.mp4";
import Navbar from "../components/Navbar";

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

      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className="text-white font-bold text-4xl">
            Home not yet available
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
