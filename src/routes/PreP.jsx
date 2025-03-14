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
      <div
        className={`w-full min-h-screen text-white text-6xl flex flex-col items-center justify-center transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <BackgroundP />
        <Term1 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
      </div>
    </>
  );
}

export default PreP;
