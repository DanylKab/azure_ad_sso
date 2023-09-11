"use client";

//@hooks
import { createContext, useCallback, useEffect, useState } from "react";

export enum THEME_MODE {
  DARK = "dark",
  LIGHT = "light",
  NONE = "none",
}

type ThemeContext = {
  isDark: boolean;
  isLight: boolean;
  toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContext>({
  isDark: false,
  isLight: false,
  toggleThemeMode: () => null,
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<THEME_MODE>(THEME_MODE.NONE);

  const updateBrowserThemeMode = useCallback((themeMode: THEME_MODE) => {
    if (themeMode === THEME_MODE.DARK) {
      document.documentElement.classList.add(THEME_MODE.DARK);
      localStorage.theme = THEME_MODE.DARK;

      setThemeMode((prev) =>
        prev !== THEME_MODE.DARK ? THEME_MODE.DARK : prev,
      );
    } else {
      document.documentElement.classList.remove(THEME_MODE.DARK);
      localStorage.theme = THEME_MODE.LIGHT;

      setThemeMode((prev) =>
        prev !== THEME_MODE.LIGHT ? THEME_MODE.LIGHT : prev,
      );
    }
  }, []);

  const toggleThemeMode = () => {
    const newTheme =
      themeMode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK;

    updateBrowserThemeMode(newTheme);
  };

  useEffect(() => {
    const themeMode = localStorage.getItem("theme") as THEME_MODE;

    if (themeMode) {
      updateBrowserThemeMode(themeMode);
    } else if (
      !themeMode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      updateBrowserThemeMode(THEME_MODE.DARK);
    } else {
      updateBrowserThemeMode(THEME_MODE.LIGHT);
    }
  }, [updateBrowserThemeMode]);

  if (themeMode === THEME_MODE.NONE) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleThemeMode,
        isDark: themeMode === THEME_MODE.DARK,
        isLight: themeMode === THEME_MODE.LIGHT,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
