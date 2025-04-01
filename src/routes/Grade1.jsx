import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Header from "../components/grade1main/Header";
import Term1 from "../components/grade1main/Term1";
import Term2 from "../components/grade1main/Term2";
import Term3 from "../components/grade1main/Term3";
import Term4 from "../components/grade1main/Term4";
import Footer from "../components/Footer";
import G1Loader from "../components/loaders/G1Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Chatbot from "../components/Chatbot";
import Mojo1 from "../components/mojo1";

function Grade1() {
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
      {isLoading && <G1Loader />}
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
        <Mojo1 />
        <Chatbot />
      </div>
    </>
  );
}

export default Grade1;
