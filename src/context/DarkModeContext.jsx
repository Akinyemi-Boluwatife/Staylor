import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // 1. Initialize state based on Tailwind's recommended logic
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we are in a browser environment
    if (typeof window === "undefined") return false;

    // Logic: Check local storage OR system preference
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // 2. Sync state changes to the DOM and LocalStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("Dark mode context was used outside dark mode provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
