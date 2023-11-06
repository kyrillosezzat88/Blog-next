"use client";
import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<
  { darkMode: boolean; toggleMode: () => void } | undefined
>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      <div className={`theme ${darkMode ? "darkTheme" : "lightTheme"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
