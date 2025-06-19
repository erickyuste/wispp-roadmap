import React, { useState, useEffect } from "react";
import AboutContent from "../components/backgroundContent/AboutContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Chatbot from "../components/chatbotContent/Chatbot";
import Loader from "../components/Loader";
import data from "../data/header.js";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[12];

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
      {isLoading && <Loader loader={headerItem.loader} />}
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
