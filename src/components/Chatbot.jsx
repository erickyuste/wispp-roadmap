import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import Chatform from "./Chatform";
import ChatMessage from "./ChatMessage";
import { companyInfo } from "./companyInfo";
import wisppLogo2 from "../assets/wisppLogo2.png";

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
        className="filter drop-shadow-[0_0_25px_#006494]"
      >
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <img
              src={wisppLogo2}
              alt="wispp-logo"
              className="rounded-[50%] w-[2rem]"
            />
            <h2 className="logo-text">WISPP-bot</h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleRefresh}
              className="material-symbols-rounded"
            >
              refresh
            </button>
            <button
              onClick={() => setShowChatbot((prev) => !prev)}
              className="material-symbols-rounded"
            >
              keyboard_arrow_down
            </button>
          </div>
        </div>
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hello! I'm Wispp, your academic assistant. How can I help you
              today?
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        <div className="chat-footer">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
