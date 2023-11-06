"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const DarkMode = () => {
  const { toggleMode, darkMode } = useContext(ThemeContext);
  return (
    <div
      className="relative border border-gray-300 w-[55px] h-7 flex justify-evenly items-center rounded-3xl cursor-pointer transition-all"
      onClick={toggleMode}
    >
      <div>🌙</div>
      <div>🔆</div>
      <div
        className={`w-5 h-5 bg-green-300 rounded-full absolute transition-all duration-500 ${
          darkMode ? "left-1" : "right-1"
        }`}
      />
    </div>
  );
};

export default DarkMode;
