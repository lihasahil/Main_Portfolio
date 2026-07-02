"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { Theme, ColorTheme, ThemeContext } from "./theme-context";

interface ThemeProviderProps {
  children: ReactNode;
}

type ViewTransition = { finished: Promise<void> };
type DocWithTransition = Document & {
  startViewTransition?: (cb: () => void) => ViewTransition;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("system");
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("neutral");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setThemeState(stored);
    const storedColor = localStorage.getItem("colorTheme") as ColorTheme | null;
    if (storedColor) {
      setColorThemeState(storedColor);
      applyColorTheme(storedColor);
    }
  }, []);

  const applyTheme = (mode: Theme) => {
    if (mode === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
    } else {
      document.documentElement.dataset.theme = mode;
    }
  };

  const applyColorTheme = (color: ColorTheme) => {
    if (color === "neutral") {
      document.documentElement.removeAttribute("data-color");
    } else {
      document.documentElement.setAttribute("data-color", color);
    }
  };

  const setTheme = (mode: Theme) => {
    const doc = document as DocWithTransition;
    const apply = () => {
      applyTheme(mode);
      setThemeState(mode);
      localStorage.setItem("theme", mode);
    };
    if (doc.startViewTransition) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  };

  const setColorTheme = (color: ColorTheme) => {
    const doc = document as DocWithTransition;
    const apply = () => {
      setColorThemeState(color);
      applyColorTheme(color);
      localStorage.setItem("colorTheme", color);
    };
    if (doc.startViewTransition) {
      document.documentElement.classList.add("color-transition");
      const vt = doc.startViewTransition(apply);
      vt.finished.finally(() => {
        document.documentElement.classList.remove("color-transition");
      });
    } else {
      apply();
    }
  };

  useEffect(() => {
    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.dataset.theme = e.matches ? "dark" : "light";
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
