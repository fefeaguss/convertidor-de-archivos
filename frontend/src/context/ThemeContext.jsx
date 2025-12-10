import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

/**
 * Theme provider avanzado:
 * - light / dark / system
 * - Guarda preferencia en localStorage
 */
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("convertx_theme") || "system";
    } catch {
      return "system";
    }
  });

  useEffect(() => {
    localStorage.setItem("convertx_theme", mode);
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else if (mode === "light") {
      root.classList.remove("dark");
    } else {
      // system: match prefers-color-scheme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) root.classList.add("dark");
      else root.classList.remove("dark");
    }
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}
