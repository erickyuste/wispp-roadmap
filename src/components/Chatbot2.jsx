import React, { useEffect, useRef, useState } from "react";
import { companyInfo } from "./companyInfo";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import profile from "../assets/profile.jpeg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.jpg";
import tailwind from "../assets/tailwind.jpg";
import web3forms from "../assets/web3forms.png";
import gemini from "../assets/gemini.png";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "• • •"),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  const handleRefresh = () => {
    setChatHistory([
      {
        hideInChat: true,
        role: "model",
        text: companyInfo,
      },
    ]);
  };

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
        className="filter drop-shadow-[0_0_35px_#006494] mb-15"
      >
        <span className="material-symbols-rounded">email</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup m-0 sm:mb-14">
        <div className="chat-header">
          <div className="header-info">
            <h2 className="logo-text">Email me!</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowChatbot((prev) => !prev)}
              className="material-symbols-rounded"
            >
              keyboard_arrow_down
            </button>
          </div>
        </div>
        <div className="chatbot2 w-full h-[65vh] flex flex-col text-center justify-center">
          <div
            ref={chatBodyRef}
            className="flex items-center justify-center flex-col gap-1 mb-3 px-[22px] pt-2 scrollbar-thin scrollbar-thumb-[#ddd3f9] scrollbar-track-transparent"
          >
            <h1 className="text-sm">
              This project was created and designed by:
            </h1>
            <div className="flex items-center w-[18rem] md:w-[325px] h-[4rem] bg-[#353535] rounded-md transition-all duration-500 ease-in-out hover:transition-transform hover:scale-105 shadow-xl">
              <img
                src={profile}
                className="ml-5 w-[3rem]  rounded-sm"
                alt="profile"
              />
              <div className="textBox flex flex-col text-left w-[calc(100%-90px)] ml-2 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">Erickson Yuste</p>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/erickyuste"
                      className="cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={github}
                        alt="github-logo"
                        className="w-5 h-5 rounded-md"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/erickson-yuste-lpt-995592230/"
                      className="cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-5 h-5 rounded-sm bg-white"
                      />
                    </a>
                  </div>
                </div>
                <p className="text-xs font-light">Educator/Web Developer</p>
                <div></div>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-center">
            <h1 className="text-sm font-bold mb-2">Technologies used:</h1>
            <div>
              <div className="flex w-[100%] items-center justify-center gap-7">
                <div>
                  <div className="flex gap-3 mb-2">
                    <img
                      src={html}
                      alt="html-logo"
                      className="w-[2rem] rounded-lg shadow-xl"
                    />
                    <img
                      src={css}
                      alt="css-logo"
                      className="w-[2rem] rounded-lg shadow-xl"
                    />
                    <img
                      src={js}
                      alt="js-logo"
                      className="w-[2rem] rounded-lg shadow-xl"
                    />
                  </div>
                  <img
                    src={react}
                    alt="react-logo"
                    className="w-[8rem] rounded-lg shadow-xl"
                  />
                </div>

                <div>
                  <img
                    src={tailwind}
                    alt="tailwind-logo"
                    className="w-[7rem] rounded-lg shadow-xl mt-2"
                  />
                  <img
                    src={gemini}
                    alt="gemini-logo"
                    className="h-[3rem] rounded-lg shadow-xl mt-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-4">
            <div id="contact-container" className="w-[18rem] md:w-[325px]">
              <p className="w-[100%] text-left text-xs md:text-sm pb-3 px-2">
                Help me improve this website by sending your comments and
                suggestions below:
              </p>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-full items-center flex flex-col"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="08cba000-2cc9-4f2d-a6fd-71b6f99d3019"
                />
                <input
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  className="w-[100%] h-[2rem] p-2 text-sm mb-2 border-1 rounded-md"
                  required
                />
                <input
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  className="w-[100%] h-[2rem] p-2 text-sm mb-2 border-1  rounded-md"
                  required
                />
                <textarea
                  id="comment"
                  name="nessage"
                  rows="4"
                  className="w-[100%] h-[8rem] rounded-lg p-2 text-sm border-1"
                  placeholder="Write your suggestions here..."
                  required
                ></textarea>
                <button
                  type="submit"
                  id="send-btn"
                  className="w-[18vw] md:w-[80px] text-xs text-white md:text-md font-bold py-1 cursor-pointer border-1 mt-2 rounded-[20px] bg-[#006494] hover:transform scale-125 mb-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
