import React, { useState, useEffect } from "react";
import KLoader from "../components/loaders/KLoader";
import BackgroundK from "../components/BackgroundK";
import Header from "../components/KinderMain/Header";
import Term1 from "../components/KinderMain/Term1";
import Term2 from "../components/KinderMain/Term2";
import Term3 from "../components/KinderMain/Term3";
import Term4 from "../components/KinderMain/Term4";
import Footer from "../components/Footer";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";

function Kinder() {
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
      {isLoading && <KLoader />}
      <div
        className={`w-full min-h-screen text-white text-6xl flex flex-col items-center justify-center transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <BackgroundK />
        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
      </div>
    </>
  );
}

export default Kinder;
