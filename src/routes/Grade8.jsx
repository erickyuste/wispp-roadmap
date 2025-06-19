import React, { useState, useEffect } from "react";
import UpperContentG8 from "../components/upperContent/UpperContentG8";
import Term1 from "../components/grade8main/Term1";
import Term2 from "../components/grade8main/Term2";
import Term3 from "../components/grade8main/Term3";
import Term4 from "../components/grade8main/Term4";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/chatbotContent/Chatbot";
import ClassDojo from "../components/classDojo.jsx";
import Header from "../components/Header.jsx";
import data from "../data/header.js";

function Grade7() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[7];

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
        <UpperContentG8 />
        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
        <ClassDojo mojo={headerItem.mojo} />
        <Chatbot />
      </div>
    </>
  );
}

export default Grade7;
