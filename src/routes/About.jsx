import React, { useState, useEffect } from "react";
import AboutContent from "../components/BackgroundContent/AboutContent";
import Footer from "../components/Footer";
import AboutLoader from "../components/loaders/AboutLoader";

function About() {
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
      {isLoading && <AboutLoader />}
      <div
        className={`w-full min-h-screen text-white text-6xl flex flex-col items-center justify-center transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <AboutContent />

        <Footer />
      </div>
    </>
  );
}

export default About;
