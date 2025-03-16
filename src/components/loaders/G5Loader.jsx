import React, { useEffect, useState } from "react";

const G5Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-100 flex h-screen w-full items-center justify-center bg-[#051923] overflow-hidden text-[3rem] transition-opacity duration-[5s] transition-visibility md:text-[5rem] ${
        loading ? "" : "opacity-0 invisible"
      }`}
      style={{
        "--loader-text-color": "#f6e9fe",
        "--loader-dot-color": "#a51ff6",
      }}
    >
      <svg viewBox="0 0 400 160" className="w-[20rem] font-bold">
        <text
          x="50%"
          y="50%"
          dy=".32em"
          textAnchor="middle"
          className="text-[#f6e9fe] stroke-2 letter-spacing-[-6px]"
          style={{ animation: "animate-stroke 3s alternate infinite" }}
        >
          Grade5
        </text>
        <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="1.5em"
          textAnchor="middle"
          className="fill-[#a51ff6] stroke-[#a51ff6] letter-spacing-[-6px]"
          style={{ animation: "animate-dot 3s alternate infinite" }}
        ></text>
      </svg>
      <style>
        {`
          @keyframes animate-stroke {
            0% {
              fill: transparent;
              stroke: var(--loader-text-color);
              stroke-width: 3;
              stroke-dashoffset: 25%;
              stroke-dasharray: 0 32%;
            }
            50% {
              fill: transparent;
              stroke-width: 3;
            }
            80%, 100% {
              fill: var(--loader-text-color);
              stroke: transparent;
              stroke-width: 0;
              stroke-dashoffset: -25%;
              stroke-dasharray: 32% 0;
            }
          }

          @keyframes animate-dot {
            0%, 60% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default G5Loader;
