import React, { useState, useEffect } from "react";
import BackgroundP from "../components/BackgroundP";
import Header from "../components/PrePMain/Header";
import Term1 from "../components/PrePMain/Term1";
import Term4 from "../components/PrePMain/Term4";
import Footer from "../components/Footer";
import PrePLoader from "../components/loaders/PrePLoader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
function PreP() {
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
      {isLoading && <PrePLoader />}
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Header />
        <BackgroundP />
        <Term1 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default PreP;
