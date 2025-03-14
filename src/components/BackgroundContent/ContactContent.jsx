import React from "react";
import profile from "../../assets/profile.jpeg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import gemini from "../../assets/gemini.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import tailwind from "../../assets/tailwind.jpg";
import web3forms from "../../assets/web3forms.png";
import abaqr from "../../assets/aba-qr.png";
import coffee from "../../assets/coffee.gif";
import react from "../../assets/react.jpg";

function ContactContent() {
  return (
    <div className="card-contact w-[93%] md:w-[760px] p-4 my-4 flex flex-row py-4">
      <div className="flex flex-col items-center md:w-[350px] gap-2 border-b-3 md:border-b-0 md:border-r-3 border-dashed pr-0 md:pr-4 mb-4 md:mb-0 pb-10 md:pb-0">
        <h1 className="text-sm">This project was created and designed by:</h1>
        <div className="card-profile flex items-center justify-left w-[18rem] md:w-[325px] h-[4rem] bg-[#353535] rounded-md transition-all duration-500 ease-in-out hover:transition-transform hover:scale-105 shadow-xl">
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
        <div className="flex w-[19rem] md:w-[325px] gap-4 rounded-xl px-2 md:px-0">
          <div className="flex flex-col w-[100%] items-center justify-center">
            <h1 className="text-xs font-bold mb-1">Technologies used:</h1>
            <div className="flex gap-1">
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
              className="w-[7rem] rounded-lg shadow-xl mt-2"
            />
            <img
              src={tailwind}
              alt="tailwind-logo"
              className="w-[7rem] rounded-lg shadow-xl mt-2"
            />
            <img
              src={web3forms}
              alt="tailwind-logo"
              className="w-[7rem] rounded-lg shadow-xl mt-2"
            />
          </div>
          <div className="flex flex-col w-[50%] items-center">
            <p className="text-xs w-full mb-1 text-left text-gray-200">
              If this tool has made your life simpler in any way and you wish to
              support my future projects, then...
            </p>
            <div className="book w-[40%] shadow-xl">
              <div className="group-hover:pb-10 transition-all duration-500 delay-200 flex flex-col items-center py-4">
                <img
                  src={abaqr}
                  alt="coffee"
                  className="w-[85%] my-2 rounded-lg"
                />
              </div>
              <div className="cover shadow-xl flex pr-3">
                <img
                  src={coffee}
                  alt="coffee"
                  className="w-[8rem] left-[-0.5rem] absolute"
                />
                <h1 className="font-semibold text-xs absolute right-6">
                  Buy
                  <br />
                  me a<br />
                  coffee!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[18rem] md:w-[350px] flex flex-col items-center mx-[1rem]"
        id="contact-container"
      >
        <span className="text-4xl my-2">Email me!</span>
        <p className="card__content w-[100%] text-left text-xs md:text-sm text-gray-200 pb-3 px-2">
          Help me improve this website by sending your comments and suggestions
          below:
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
            className="w-[18vw] md:w-[80px] text-xs md:text-md font-bold py-2 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactContent;
