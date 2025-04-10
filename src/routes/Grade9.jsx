import React, { useState, useEffect } from "react";
import BackgroundG9 from "../components/BackgroundG9";
import Header from "../components/grade9main/Header";
import Term1 from "../components/grade9main/Term1";
import Term2 from "../components/grade9main/Term2";
import Term3 from "../components/grade9main/Term3";
import Term4 from "../components/grade9main/Term4";
import Footer from "../components/Footer";
import G9Loader from "../components/loaders/G9Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import Mojo8 from "../components/Mojo8";

function Grade9() {
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
      {isLoading && <G9Loader />}
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Header />
        <BackgroundG9 />
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
