import React, { useState, useEffect } from "react";
import BackgroundG7 from "../components/BackgroundG7";
import Header from "../components/grade7main/Header";
import Term1 from "../components/grade7main/Term1";
import Term2 from "../components/grade7main/Term2";
import Term3 from "../components/grade7main/Term3";
import Term4 from "../components/grade7main/Term4";
import Footer from "../components/Footer";
import G7Loader from "../components/loaders/G7Loader";
import OnlineResources from "../components/OnlineResources";
import OnlineResources2 from "../components/OnlineResources2";
import OnlineResources3 from "../components/OnlineResources3";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import Mojo7 from "../components/Mojo7";

function Grade7() {
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
      {isLoading && <G7Loader />}
      <div className="bg-[#051923] w-full min-h-screen overflow-x-hidden flex flex-col items-center">
        <Navbar />
        <Header />
        <BackgroundG7 />
        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <OnlineResources />
        <OnlineResources2 />
        <OnlineResources3 />
        <Footer />
        <Mojo7 />
        <Chatbot />
      </div>
    </>
  );
}

export default Grade7;
