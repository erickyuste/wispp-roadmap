import React, { useState, useEffect } from "react";
import BackgroundG6 from "../components/BackgroundG6";
import Header from "../components/grade6main/Header";
import Term1 from "../components/grade6main/Term1";
import Term2 from "../components/grade6main/Term2";
import Term3 from "../components/grade6main/Term3";
import Term4 from "../components/grade6main/Term4";
import Footer from "../components/Footer";
import G6Loader from "../components/loaders/G6Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import Mojo6 from "../components/Mojo6";

function Grade6() {
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
      {isLoading && <G6Loader />}
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Header />
        <BackgroundG6 />
        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
        <Mojo6 />
        <Chatbot />
      </div>
    </>
  );
}

export default Grade6;
