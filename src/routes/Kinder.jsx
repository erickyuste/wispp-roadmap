import React, { useState, useEffect } from "react";
import Loader from "../components/utils/Loader";
import UpperContentK from "../components/upperContent/UpperContentK";
import Term1 from "../components/KinderMain/Term1";
import Term2 from "../components/KinderMain/Term2";
import Term3 from "../components/KinderMain/Term3";
import Term4 from "../components/KinderMain/Term4";
import Footer from "../components/Footer";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/chatbotContent/Chatbot";
import Header from "../components/Header.jsx";
import data from "../data/header.js";

function Kinder() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[11];

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
        <UpperContentK />
        <Term1 />
        <Term2 />
        <Term3 />
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

export default Kinder;
