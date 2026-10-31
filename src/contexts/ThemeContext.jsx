import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * ThemeProvider
 * Primary theme: "light" (Yellow / White / Black - Warm Idol Stage)
 * Secondary theme: "dark" (Cyber-Idol Live Stage)
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Primary / Default theme is LIGHT mode
    const saved = localStorage.getItem("h5_theme_v2");
    if (saved === "dark") return "dark";
    if (saved === "light") return "light";
    return "light"; // Default to Light Mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
      document.body.style.backgroundColor = "#0f0a1e";
      document.body.style.color = "#f8fafc";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      document.body.style.backgroundColor = "#fffdf0";
      document.body.style.color = "#0f0f0f";
    }
    localStorage.setItem("h5_theme_v2", theme);
    localStorage.setItem("h5_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
