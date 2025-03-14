import React, { useState, useEffect } from "react";
import BackgroundG4 from "../components/BackgroundG4";
import Header from "../components/grade4main/Header";
import Term1 from "../components/grade4main/Term1";
import Term2 from "../components/grade4main/Term2";
import Term3 from "../components/grade4main/Term3";
import Term4 from "../components/grade4main/Term4";
import Footer from "../components/Footer";
import G4Loader from "../components/loaders/G4Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";

function Grade4() {
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
      {isLoading && <G4Loader />}
      <div
        className={`w-full min-h-screen text-white text-6xl flex flex-col items-center justify-center transition-opacity duration-500 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <BackgroundG4 />
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

export default Grade4;
