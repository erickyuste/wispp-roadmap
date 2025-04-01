import React, { useState, useEffect } from "react";
import AboutContent from "../components/BackgroundContent/AboutContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
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
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <AboutContent />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default About;
