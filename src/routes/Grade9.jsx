import React, { useState, useEffect } from "react";
import UpperContentG9 from "../components/upperContent/UpperContentG9";
import Term1 from "../components/grade9main/Term1";
import Term2 from "../components/grade9main/Term2";
import Term3 from "../components/grade9main/Term3";
import Term4 from "../components/grade9main/Term4";
import Footer from "../components/Footer";
import Loader from "../components/utils/Loader";
import OnlineResources from "../components/utils/OnlineResources";
import OnlineResources2 from "../components/utils/OnlineResources2";
import OnlineResources3 from "../components/utils/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/chatbotContent/Chatbot";
import Header from "../components/Header.jsx";
import data from "../data/header.js";

function Grade9() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const headerItem = data[8];

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
        <UpperContentG9 />
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

export default Grade9;
