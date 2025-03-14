import React, { useState, useEffect } from "react";
import BackgroundG5 from "../components/BackgroundG5";
import Header from "../components/grade5main/Header";
import Term1 from "../components/grade5main/Term1";
import Term2 from "../components/grade5main/Term2";
import Term3 from "../components/grade5main/Term3";
import Term4 from "../components/grade5main/Term4";
import Footer from "../components/Footer";
import G5Loader from "../components/loaders/G5Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";

function Grade5() {
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
      {isLoading && <G5Loader />}
      <div
        className={`w-full min-h-screen text-white text-6xl flex flex-col items-center justify-center transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <BackgroundG5 />
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

export default Grade5;
