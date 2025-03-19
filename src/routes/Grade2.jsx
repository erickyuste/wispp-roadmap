import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Header from "../components/grade2main/Header";
import Term1 from "../components/grade2main/Term1";
import Term2 from "../components/grade2main/Term2";
import Term3 from "../components/grade2main/Term3";
import Term4 from "../components/grade2main/Term4";
import Footer from "../components/Footer";
import G2Loader from "../components/loaders/G2Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import Chatbot2 from "../components/Chatbot2";

function Grade2() {
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
      {isLoading && <G2Loader />}
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Header />
        <Background />
        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
        <Chatbot2 />
        <Chatbot />
      </div>
    </>
  );
}

export default Grade2;
