import React, { useState, useEffect } from "react";
import UpperContentP from "../components/upperContent/UpperContentP";
import Term1 from "../components/PrePMain/Term1";
import Term4 from "../components/PrePMain/Term4";
import Footer from "../components/Footer";
import Loader from "../components/utils/Loader";
import OnlineResources from "../components/utils/OnlineResources";
import OnlineResources2 from "../components/utils/OnlineResources2";
import OnlineResources3 from "../components/utils/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/chatbotContent/Chatbot";
import Header from "../components/Header.jsx";
import data from "../data/header.js";

function PreP() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[10];

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
        <Header grade={headerItem.grade} style={headerItem.style} />
        <UpperContentP />
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
